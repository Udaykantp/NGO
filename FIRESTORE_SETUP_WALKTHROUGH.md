# Firestore + Admin Panel - Complete Setup Walkthrough

## Quick Start (5 minutes)

### Step 1: Verify Firebase Configuration
1. Open `lib/firebase.ts`
2. Confirm your Firebase config is present
3. Verify `getFirestore(app)` is initialized
4. You should see `export const db = getFirestore(app);`

✅ **Done!** Firebase Firestore is ready.

### Step 2: Test User Creation
1. Go to http://localhost:3000
2. Click "Sign Up" button
3. Sign in with Google
4. You'll be redirected to profile page
5. Open Firebase Console:
   - Go to console.firebase.google.com
   - Select project `ngo-e0a34`
   - Go to Firestore Database
   - Open `/users` collection
   - Find your user document (by your Google UID)

✅ **Done!** Your user is saved in Firestore.

### Step 3: Add WhatsApp Number
1. Still on profile page
2. Scroll down to "WhatsApp Number" section
3. Click "Edit"
4. Enter your WhatsApp: `+91 98765 43210`
5. Click "Save"
6. See success message
7. In Firebase Console, verify `whatsappNumber` field is updated

✅ **Done!** WhatsApp is saved.

### Step 4: Become an Admin
1. Open Firebase Console
2. Go to Firestore Database → `/users` collection
3. Open your user document
4. Add field: `isAdmin: true`
5. Go back to app and refresh
6. Click "Admin Panel" on profile page

✅ **Done!** Admin panel is accessible.

### Step 5: View Admin Panel
1. On admin page, you should see:
   - Statistics cards (0 products, 1 seller, 0 with WhatsApp)
   - Empty products table with message "No products listed yet"
2. This is normal - no products exist yet

✅ **Done!** Admin panel works.

## Detailed Setup Guide

### Prerequisites
- Firebase project created
- Google authentication configured
- Firestore database created
- App deployed or running locally

### Installation & Configuration

#### 1. Firebase Initialization

File: `lib/firebase.ts`

Your configuration should look like:
```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "G-XXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
```

#### 2. Auth Context Update

File: `app/auth-provider.tsx`

Check that `signInWithGoogle` function includes:
```typescript
const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  
  if (result.user) {
    await upsertUser({
      uid: result.user.uid,
      email: result.user.email || '',
      displayName: result.user.displayName || 'User',
      photoURL: result.user.photoURL || undefined,
    });
  }
};
```

#### 3. User Profile Page Update

File: `app/profile/page.tsx`

Should include WhatsApp section:
```tsx
<div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
  <h2 className="text-2xl font-bold text-[#6A2A43]">WhatsApp Number</h2>
  {/* Edit form and save/cancel buttons */}
</div>
```

### Firebase Console Setup

#### Create Collections

**Important:** Collections are auto-created, but you can pre-create them:

1. **Users Collection:**
   - Go to Firestore Database
   - Click "Start collection"
   - Collection ID: `users`
   - Document ID: (auto-generate - check "Auto ID")
   - Click "Save"

2. **Products Collection:**
   - Repeat same process
   - Collection ID: `products`

#### Set Security Rules

1. Go to Firestore Database
2. Click "Rules" tab
3. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users can read/write their own documents
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow create: if request.auth.uid == userId;
      allow update: if request.auth.uid == userId;
      
      // Admins can read all users
      allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.get('isAdmin', false) == true;
    }
    
    // Products are publicly readable
    match /products/{productId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.ownerUid;
    }
  }
}
```

4. Click "Publish"

#### Enable Firestore Monitoring

1. Go to Firestore Database
2. Click "Indexes" tab
3. Watch for any required indexes
4. Auto-create if prompted

### Application Setup

#### Install Dependencies

Already installed (Firebase):
```bash
pnpm add firebase
```

#### Verify Files Exist

Check these files are in your project:
- ✅ `lib/firebase.ts`
- ✅ `lib/firestore-users.ts`
- ✅ `lib/firestore-products.ts`
- ✅ `app/auth-provider.tsx`
- ✅ `app/profile/page.tsx`
- ✅ `app/admin/page.tsx`

#### Run Application

```bash
pnpm dev
```

Visit: http://localhost:3000

### Create Your First Admin User

#### Option 1: Firebase Console (Recommended)

1. Sign up with Google on your app
2. Open Firebase Console
3. Go to Firestore → `/users` collection
4. Find your user document
5. Click to open it
6. Add new field:
   - Field name: `isAdmin`
   - Type: Boolean
   - Value: `true`
7. Save

#### Option 2: Cloud Firestore

Use Firebase Admin SDK (requires setup):
```javascript
const admin = require('firebase-admin');
const db = admin.firestore();

await db.collection('users').doc('YOUR_UID').update({
  isAdmin: true
});
```

### Test Everything

#### Test 1: Sign Up & User Created
- [ ] Go to http://localhost:3000/signup
- [ ] Sign up with Google
- [ ] Redirected to profile page
- [ ] Check Firebase Console `/users` collection
- [ ] Your document exists with email and displayName

#### Test 2: WhatsApp Update
- [ ] On profile page, scroll to "WhatsApp Number"
- [ ] Click "Edit"
- [ ] Enter: `+91 98765 43210`
- [ ] Click "Save"
- [ ] See success message
- [ ] In Firebase Console, refresh `/users` collection
- [ ] Verify `whatsappNumber` field shows your number

#### Test 3: Admin Access
- [ ] Logged in, go to profile page
- [ ] Click "Admin Panel" button
- [ ] Should see admin page with statistics
- [ ] See message "No products listed yet"

#### Test 4: Non-Admin Access
- [ ] Create another user (different Google account)
- [ ] Try to go to /admin directly
- [ ] Should see "Access Denied" or redirect to home

#### Test 5: WhatsApp Link
- [ ] In admin panel, add a test product to Firestore
- [ ] Make sure product has `ownerWhatsapp: "+91 98765 43210"`
- [ ] Admin panel should show the product
- [ ] Click the WhatsApp number
- [ ] Should open WhatsApp chat

### Verify Deployment

If deploying to production:

1. **Test Firebase Config:**
   - Verify API keys match production Firebase project
   - Test authentication works
   - Test Firestore reads/writes

2. **Set Firestore Rules:**
   - Apply security rules from setup
   - Test data is only accessible to proper users
   - Test admin-only routes

3. **Monitor Usage:**
   - Go to Firebase Console
   - Watch Firestore usage metrics
   - Set up alerts for quota limits

4. **Backup Data:**
   - Enable Firestore backups
   - Test backup restoration
   - Document backup schedule

## Troubleshooting

### Issue: "Error initializing Firestore"
**Solution:**
- Check `lib/firebase.ts` has correct config
- Verify Firebase project is active
- Check internet connection
- Clear browser cache

### Issue: User not saved to Firestore
**Solution:**
- Check `app/auth-provider.tsx` calls `upsertUser`
- Verify Firestore security rules allow writes
- Check browser console for errors
- Try signing up again

### Issue: Can't update WhatsApp number
**Solution:**
- Check Firestore rules allow user updates
- Verify phone number format is valid
- Check browser console for error messages
- Try refreshing profile page

### Issue: Admin panel shows "Access Denied"
**Solution:**
- Verify `isAdmin: true` is set in Firebase
- Check you're logged in with correct account
- Clear browser cache and try again
- Refresh profile page

### Issue: Products not showing in admin panel
**Solution:**
- Add test product to `/products` collection in Firebase
- Verify product has `ownerUid` field
- Check Firestore rules allow reads
- Refresh admin panel

### Issue: Firestore quota exceeded
**Solution:**
- Check usage in Firebase Console
- Consider implementing caching
- Add pagination for large product lists
- Upgrade Firebase plan if needed

## Performance Tips

1. **Cache User Profiles:**
```tsx
const [cachedProfiles, setCachedProfiles] = useState({});
// Avoid repeated getUserProfile calls
```

2. **Implement Product Pagination:**
```tsx
// Instead of loading all products
const [pageSize] = useState(50);
const [pageNum, setPageNum] = useState(0);
// Use startAt/endAt in Firestore query
```

3. **Use Batch Operations:**
```tsx
const batch = writeBatch(db);
// Multiple writes in single transaction
batch.commit();
```

## Next Steps

### Immediate
1. ✅ User creation working
2. ✅ WhatsApp update working
3. ✅ Admin panel working
4. Test with multiple users

### Short Term
1. Add product creation form
2. Let users list their products
3. Add product search

### Medium Term
1. Add user reviews/ratings
2. Add product images
3. Add order tracking

### Long Term
1. Add email notifications
2. Add analytics dashboard
3. Add payment integration

## Support Resources

### Documentation Files
- `FIRESTORE_ADMIN_GUIDE.md` - Complete feature guide
- `FIRESTORE_QUICK_REFERENCE.md` - API reference
- `FIRESTORE_ARCHITECTURE.md` - System design
- `FIRESTORE_IMPLEMENTATION_SUMMARY.md` - What was added

### Firebase Resources
- Firebase Console: https://console.firebase.google.com
- Firebase Docs: https://firebase.google.com/docs
- Firestore Docs: https://firebase.google.com/docs/firestore

### Code References
- `lib/firestore-users.ts` - User functions
- `lib/firestore-products.ts` - Product functions
- `app/admin/page.tsx` - Admin panel implementation
- `app/profile/page.tsx` - Profile with WhatsApp

## Checklists

### Initial Setup Checklist
- [ ] Firebase config in `lib/firebase.ts`
- [ ] Firestore initialized with `getFirestore(app)`
- [ ] Collections exist (auto-created or manual)
- [ ] Security rules applied
- [ ] Google Auth configured
- [ ] App running locally or deployed

### User Setup Checklist
- [ ] Sign up with Google works
- [ ] User document created in Firestore
- [ ] User profile page loads
- [ ] WhatsApp edit form works
- [ ] WhatsApp updates Firestore
- [ ] Logout works

### Admin Setup Checklist
- [ ] Made first user admin in Firebase Console
- [ ] Admin panel link shows on profile
- [ ] Admin panel loads without errors
- [ ] Products table displays (even if empty)
- [ ] Non-admin users can't access admin panel

### Production Checklist
- [ ] Security rules reviewed and applied
- [ ] API keys restricted to production domain
- [ ] Error logging configured
- [ ] Firestore backups enabled
- [ ] Usage monitoring set up
- [ ] Data deletion policy defined

---

**Guide Version:** 1.0
**Last Updated:** 2024
**Time to Complete:** 15-30 minutes
**Difficulty:** Beginner to Intermediate
