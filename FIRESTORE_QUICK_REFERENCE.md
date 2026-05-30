# Firestore + Admin Panel - Quick Reference

## Database Structure

### Users Collection (`/users/{uid}`)
```
uid ........................ Firebase Auth UID
email ...................... User's email
displayName ................ User's name
photoURL ................... Profile photo from Google
whatsappNumber ............. Contact number (editable by user)
isAdmin .................... Admin flag (default: false)
createdAt .................. Account creation timestamp
updatedAt .................. Last update timestamp
```

### Products Collection (`/products/{productId}`)
```
name ....................... Product name
category ................... Product category
price ...................... Product price
description ................ Product description
ownerUid ................... Creator's UID
ownerName .................. Creator's name
ownerEmail ................. Creator's email
ownerWhatsapp .............. Creator's WhatsApp number
createdAt .................. Listing creation timestamp
updatedAt .................. Last update timestamp
```

## Key Functions

### User Management (`lib/firestore-users.ts`)

```typescript
// Save/update user on login
await upsertUser({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

// Get user profile
const profile = await getUserProfile(uid);

// Update WhatsApp
await updateUserWhatsApp(uid, "+91 98XXXXXX");

// Check if admin
const isAdmin = await isUserAdmin(uid);
```

### Product Management (`lib/firestore-products.ts`)

```typescript
// Add product
const productId = await addProductListing(
  ownerUid,
  ownerName,
  ownerEmail,
  { name, category, price, description }
);

// Get all products
const allProducts = await getAllProductListings();

// Get user's products
const userProducts = await getUserProductListings(ownerUid);
```

## Implementation Flow

### User Registration/Login

```
User signs in with Google
         ↓
Firebase Authentication (existing)
         ↓
upsertUser() called in auth-provider
         ↓
User document created/updated in Firestore
```

### User Profile Update

```
User edits WhatsApp on /profile
         ↓
Click "Save" button
         ↓
updateUserWhatsApp() called
         ↓
Firestore user document updated
         ↓
Success message shown
```

### Admin Panel Access

```
User clicks "Admin Panel"
         ↓
Check isUserAdmin(uid)
         ↓
If admin: Show products table
If not: Redirect to home page
         ↓
Load all products with getAllProductListings()
         ↓
Display with owner WhatsApp numbers
```

## Page URLs & Access

| Page | URL | Access | Notes |
|------|-----|--------|-------|
| Admin Panel | `/admin` | Admin users only | Redirects non-admins to home |
| User Profile | `/profile` | Logged-in users | Redirects guests to login |
| WhatsApp Edit | `/profile` | Logged-in users | In-page edit form |

## Making a User Admin

1. Open Firebase Console
2. Go to Firestore Database
3. Open `/users` collection
4. Find user document (by UID)
5. Add/update field: `isAdmin: true`
6. User gets access to admin panel on next login

## Files to Know

| File | Purpose |
|------|---------|
| `lib/firebase.ts` | Firebase initialization with Firestore |
| `lib/firestore-users.ts` | User CRUD operations |
| `lib/firestore-products.ts` | Product CRUD operations |
| `app/auth-provider.tsx` | Auth context with user upsert |
| `app/admin/page.tsx` | Admin dashboard page |
| `app/profile/page.tsx` | User profile with WhatsApp edit |

## Common Tasks

### Check if Current User Exists in Firestore

```tsx
import { useAuth } from '@/app/auth-provider';
import { getUserProfile } from '@/lib/firestore-users';

export function MyComponent() {
  const { user } = useAuth();
  const profile = await getUserProfile(user?.uid);
  console.log(profile); // null or UserProfile
}
```

### Get All Products with Owners

```tsx
import { getAllProductListings } from '@/lib/firestore-products';

const products = await getAllProductListings();
products.forEach(p => {
  console.log(`${p.name} - ${p.ownerWhatsapp}`);
});
```

### Save New Product

```tsx
import { addProductListing } from '@/lib/firestore-products';
import { useAuth } from '@/app/auth-provider';

export function SellProduct() {
  const { user } = useAuth();
  
  const handleList = async () => {
    const id = await addProductListing(
      user!.uid,
      user!.displayName!,
      user!.email!,
      {
        name: 'Handmade Scarf',
        category: 'Textiles',
        price: '₹1,200',
        description: 'Beautiful woven scarf'
      }
    );
    console.log('Listed:', id);
  };
  
  return <button onClick={handleList}>List Product</button>;
}
```

### Display Admin Panel Link

```tsx
import { useAuth } from '@/app/auth-provider';
import { isUserAdmin } from '@/lib/firestore-users';

export function ProfileHeader() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    if (user) {
      isUserAdmin(user.uid).then(setIsAdmin);
    }
  }, [user]);
  
  return (
    <>
      {isAdmin && <a href="/admin">Admin Panel</a>}
    </>
  );
}
```

## Firestore Rules (Recommended)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow create: if request.auth.uid == userId;
      allow update: if request.auth.uid == userId;
    }
    
    match /products/{productId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update: if request.auth.uid == resource.data.ownerUid;
    }
  }
}
```

## Testing Checklist

- [ ] User signs up → Document created in `/users/{uid}`
- [ ] User updates WhatsApp → `whatsappNumber` field updated
- [ ] Admin panel shows all products
- [ ] Product shows owner's WhatsApp number
- [ ] Click WhatsApp link → Opens WhatsApp chat
- [ ] Non-admin can't access admin panel
- [ ] Guest user redirected to login on admin access

## Console Logs to Watch

When debugging:
- Check `console` for auth errors
- Check Firebase Console for data structure
- Look at timestamps in Firestore documents
- Verify `isAdmin` flag is set correctly

## Performance Tips

1. **Caching**: Products are fetched fresh each time. Consider adding client-side caching for repeated calls
2. **Pagination**: For large product lists, implement pagination in admin panel
3. **Indexes**: Firestore auto-creates indexes for common queries
4. **Security**: Always validate on backend if needed for production

## Environment Variables

No new environment variables needed. Uses existing:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Admin panel shows "Access Denied" | Check `isAdmin: true` in Firebase Console |
| WhatsApp not saving | Verify Firestore rules allow writes |
| Products not appearing | Check `products` collection exists in Firestore |
| User not in Firestore | User saves on first Google sign-in |
| WhatsApp link doesn't open | Format: `+{country_code}{number}` |

---

**Last Updated:** 2024
**Status:** Production Ready
