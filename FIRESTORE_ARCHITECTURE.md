# Firebase Firestore Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        NAV SANYOGITA APP                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    FRONTEND PAGES                        │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │  /login    /signup    /profile    /admin                 │   │
│  │  (Google Auth Only)   (WhatsApp Edit)  (Admin Only)      │   │
│  └──────────────────────────────────────────────────────────┘   │
│           ↓                       ↓              ↓                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              CONTEXT & HOOKS (Client State)              │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │  • AuthContext (useAuth)                                 │   │
│  │    ├─ user: Firebase User                                │   │
│  │    ├─ loading: boolean                                   │   │
│  │    ├─ signInWithGoogle()                                 │   │
│  │    └─ logout()                                           │   │
│  └──────────────────────────────────────────────────────────┘   │
│           ↓                                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │           FIRESTORE UTILITY FUNCTIONS                    │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │  firestore-users.ts:                                     │   │
│  │  ├─ upsertUser()          [Create/Update User]           │   │
│  │  ├─ getUserProfile()      [Get User Data]                │   │
│  │  ├─ updateUserWhatsApp()  [Update Phone]                 │   │
│  │  └─ isUserAdmin()         [Check Admin]                  │   │
│  │                                                           │   │
│  │  firestore-products.ts:                                  │   │
│  │  ├─ addProductListing()       [Create Product]           │   │
│  │  ├─ getAllProductListings()   [Get All Products]         │   │
│  │  └─ getUserProductListings()  [Get User Products]        │   │
│  └──────────────────────────────────────────────────────────┘   │
│           ↓                                                      │
└─────────────────────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────────────────────┐
│            FIREBASE (firebase.ts config)                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │        Firebase Authentication (Google OAuth)            │   │
│  │  • Handles user sign-up/sign-in                          │   │
│  │  • Returns: uid, email, displayName, photoURL            │   │
│  └──────────────────────────────────────────────────────────┘   │
│           ↓                                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │       Firebase Cloud Firestore Database                  │   │
│  │                                                           │   │
│  │  /users/{uid}  ─────── User Profile Documents            │   │
│  │    ├─ uid                                                │   │
│  │    ├─ email                                              │   │
│  │    ├─ displayName                                        │   │
│  │    ├─ photoURL                                           │   │
│  │    ├─ whatsappNumber      ← Editable by user            │   │
│  │    ├─ isAdmin             ← Set by admin                │   │
│  │    ├─ createdAt                                          │   │
│  │    └─ updatedAt                                          │   │
│  │                                                           │   │
│  │  /products/{id}  ─────── Product Listings                │   │
│  │    ├─ name                                               │   │
│  │    ├─ category                                           │   │
│  │    ├─ price                                              │   │
│  │    ├─ description                                        │   │
│  │    ├─ ownerUid      ← Links to users/{uid}              │   │
│  │    ├─ ownerName                                          │   │
│  │    ├─ ownerEmail                                         │   │
│  │    ├─ ownerWhatsapp ← From user profile                 │   │
│  │    ├─ createdAt                                          │   │
│  │    └─ updatedAt                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagrams

### Sign-In Flow

```
┌─────────────┐
│   User      │
│ Clicks      │
│ "Sign In"   │
└──────┬──────┘
       │
       ↓
┌─────────────────────────┐
│ Google Auth Popup       │
│ (Browser standard)      │
└──────┬──────────────────┘
       │ User authenticates with Google
       ↓
┌──────────────────────────────────────────────┐
│ Firebase Auth Service                        │
│ • Validates Google token                     │
│ • Returns: uid, email, displayName, photoURL │
└──────┬───────────────────────────────────────┘
       │
       ↓
┌──────────────────────────────────────────────┐
│ auth-provider.tsx                            │
│ • signInWithGoogle() completes               │
│ • Calls: upsertUser() with user data         │
└──────┬───────────────────────────────────────┘
       │
       ↓
┌──────────────────────────────────────────────┐
│ Firestore - upsertUser()                     │
│ • Checks if user exists                      │
│ • If new: CREATE document in /users/{uid}    │
│ • If exists: UPDATE only email/displayName   │
│ • Preserves: whatsappNumber, isAdmin         │
└──────┬───────────────────────────────────────┘
       │
       ↓
┌──────────────────────────────────────────────┐
│ User State Updated in AuthContext            │
│ • useAuth() returns user object              │
│ • Component re-renders                       │
│ • User redirected to /profile                │
└──────────────────────────────────────────────┘
```

### WhatsApp Update Flow

```
┌──────────────────┐
│  User on /profile│
│  Clicks "Edit"   │
└────────┬─────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ Input Field Becomes Editable              │
│ • Shows current WhatsApp number           │
│ • User can edit text                      │
└────────┬─────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ User Enters WhatsApp Number               │
│ • Example: "+91 9876543210"               │
└────────┬─────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ User Clicks "Save" Button                 │
│ • handleSaveWhatsapp() triggered          │
└────────┬─────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ updateUserWhatsApp(uid, number) called    │
│ • Validates input                         │
│ • Prepares Firestore update               │
└────────┬─────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ Firestore Updates /users/{uid}            │
│ • whatsappNumber: "+91 9876543210"        │
│ • updatedAt: Timestamp.now()              │
│ • (merge: true - preserves other fields)  │
└────────┬─────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ Success Message Displayed                 │
│ • "WhatsApp number saved successfully!"   │
│ • Edit mode closes                        │
│ • Number displayed in read-only field     │
└──────────────────────────────────────────┘
```

### Admin Panel Access Flow

```
┌─────────────────────────┐
│ Logged-in User          │
│ Clicks "Admin Panel"    │
└────────┬────────────────┘
         │
         ↓
┌────────────────────────────────────────────┐
│ /admin page mounts                         │
│ • useAuth() gets current user              │
│ • Check if user exists                     │
└────────┬───────────────────────────────────┘
         │
         ├─ No: Redirect to /login
         │
         └─ Yes:
            ↓
┌────────────────────────────────────────────┐
│ Call: isUserAdmin(user.uid)                │
│ • Queries Firestore /users/{uid}           │
│ • Gets: isAdmin field                      │
└────────┬───────────────────────────────────┘
         │
         ├─ isAdmin = false: Redirect to /
         │
         └─ isAdmin = true:
            ↓
┌────────────────────────────────────────────┐
│ Call: getAllProductListings()              │
│ • Queries Firestore /products collection   │
│ • Returns all documents with owner data    │
└────────┬───────────────────────────────────┘
         │
         ↓
┌────────────────────────────────────────────┐
│ Admin Panel Renders:                       │
│ • Statistics cards (totals, sellers, etc)  │
│ • Products table with:                     │
│   ├─ Product Name                          │
│   ├─ Category                              │
│   ├─ Price                                 │
│   ├─ Owner Name                            │
│   ├─ Owner Email (clickable)               │
│   ├─ Owner WhatsApp (clickable link)       │
│   └─ Created Date                          │
└────────────────────────────────────────────┘
```

## Collection Relationships

```
Firebase Auth ─────────┐
                       ↓
                    users/{uid}
                   /    |    \
                  /     |     \
          profile    orders   messages
            data    (future)  (future)
                  
                products/{id} ────→ ownerUid references users/{uid}
                    ├─ References back to user for WhatsApp
                    ├─ References back to user for email
                    └─ References back to user for name
```

## Component Architecture

```
app/
├─ layout.tsx
│  └─ wraps with <AuthProvider>
│
├─ page.tsx (home)
│  └─ uses useAuth()
│
├─ auth-provider.tsx
│  ├─ manages Firebase Auth state
│  ├─ calls upsertUser() on sign-in
│  └─ provides useAuth() hook
│
├─ profile/
│  └─ page.tsx
│     ├─ uses useAuth()
│     ├─ calls getUserProfile()
│     ├─ calls updateUserWhatsApp()
│     └─ displays WhatsApp edit form
│
├─ admin/
│  └─ page.tsx
│     ├─ uses useAuth()
│     ├─ calls isUserAdmin()
│     ├─ calls getAllProductListings()
│     └─ displays admin table
│
└─ [other pages]

components/
├─ header.tsx
│  └─ uses useAuth() for nav buttons
└─ footer.tsx

lib/
├─ firebase.ts
│  ├─ initializes auth
│  └─ initializes firestore (db export)
│
├─ firestore-users.ts
│  ├─ upsertUser()
│  ├─ getUserProfile()
│  ├─ updateUserWhatsApp()
│  └─ isUserAdmin()
│
└─ firestore-products.ts
   ├─ addProductListing()
   ├─ getAllProductListings()
   └─ getUserProductListings()
```

## State Management

### AuthContext State
```typescript
type AuthContextType = {
  user: User | null;              // Firebase User object
  loading: boolean;               // Auth loading state
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

// Used throughout app via: const { user, loading } = useAuth();
```

### Component State Examples

**Profile Page:**
```typescript
const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
const [whatsappNumber, setWhatsappNumber] = useState('');
const [editingWhatsapp, setEditingWhatsapp] = useState(false);
const [savingWhatsapp, setSavingWhatsapp] = useState(false);
```

**Admin Panel:**
```typescript
const [isAdmin, setIsAdmin] = useState(false);
const [products, setProducts] = useState<ProductListing[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
```

## Data Validation

### User Profile Validation
- UID: Required (from Firebase Auth)
- Email: Required (from Google)
- Display Name: Required (from Google)
- WhatsApp: Optional, user-entered
- Admin: Optional, admin-set in Firebase Console

### Product Listing Validation
- Name: Required
- Category: Required
- Price: Required
- Description: Required
- Owner UID: Auto-filled from current user
- Owner data: Auto-filled from user profile

## Security Architecture

### Authentication
- Google OAuth 2.0 (Firebase handles)
- Sessions managed by Firebase
- User UID used for data ownership

### Authorization
- User can only modify own profile
- Only admins can access admin panel
- Admin flag checked on every admin panel load

### Data Access
```javascript
// Recommended Firestore Rules:

// Users collection - personal data
users/{userId} {
  allow read, write: if userId == auth.uid;
}

// Admin can read all users
match /users/{userId} {
  allow read: if getUser(auth.uid).isAdmin == true;
}

// Products - public read, owner edit
products/{productId} {
  allow read: if true;
  allow create: if auth.uid != null;
  allow update: if auth.uid == resource.data.ownerUid;
}
```

## Performance Considerations

### Database Queries
- `upsertUser()`: 1 read + 1 write per login
- `getUserProfile()`: 1 read per profile load
- `getAllProductListings()`: 1 read for full collection
- `isUserAdmin()`: 1 read per admin check

### Client-Side Caching
- User profile loaded once on page mount
- Products loaded once on admin panel load
- Consider implementing caching for frequent queries

### Optimization Opportunities
1. Implement pagination for product lists (100+ items)
2. Cache user profiles in local state
3. Use Firestore indexes for complex queries
4. Consider Cloud Functions for heavy operations

## Deployment Checklist

- [ ] Firebase config in `lib/firebase.ts`
- [ ] Firestore collections exist (`users`, `products`)
- [ ] Security rules applied in Firebase Console
- [ ] First admin user created manually
- [ ] Test sign-up/login flow
- [ ] Test WhatsApp update
- [ ] Test admin panel access
- [ ] Monitor Firestore usage
- [ ] Set up Firestore backups
- [ ] Enable Firestore monitoring in Firebase Console

---

**Architecture Version:** 1.0
**Last Updated:** 2024
**Status:** Production Ready
