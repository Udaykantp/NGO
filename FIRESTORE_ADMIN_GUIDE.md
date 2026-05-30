# Firestore + Admin Panel Integration Guide

## Overview

This guide explains the Firestore integration and Admin Panel features added to the Nav Sanyogita Foundation website.

## What Was Added

### 1. Firebase Cloud Firestore Integration

**File:** `lib/firebase.ts`

- Initialized Firebase App with Firestore database
- Configured to work with existing Firebase Authentication setup

### 2. User Management in Firestore

**File:** `lib/firestore-users.ts`

#### User Collection Structure

```typescript
{
  uid: string;              // Firebase UID (Document ID)
  email: string;            // User's email
  displayName: string;      // User's display name
  photoURL?: string;        // Profile photo URL from Google
  whatsappNumber?: string;  // User's WhatsApp for business/orders
  isAdmin?: boolean;        // Admin flag (default: false)
  createdAt: Timestamp;     // Account creation time
  updatedAt: Timestamp;     // Last update time
}
```

#### Key Functions

**`upsertUser(userData)`**
- Automatically creates user document on first login
- Updates user information on subsequent logins
- Safe operation that won't overwrite WhatsApp or admin status

**`getUserProfile(uid)`**
- Retrieves complete user profile from Firestore

**`updateUserWhatsApp(uid, whatsappNumber)`**
- Updates user's WhatsApp number
- Called when user edits profile

**`isUserAdmin(uid)`**
- Checks if user has admin privileges
- Returns boolean for route protection

### 3. Products Management

**File:** `lib/firestore-products.ts`

#### Products Collection Structure

```typescript
{
  id: string;          // Firestore document ID
  name: string;        // Product name
  category: string;    // Product category
  price: string;       // Product price
  description: string; // Product description
  ownerUid: string;    // UID of product owner
  ownerName: string;   // Name of owner
  ownerEmail: string;  // Email of owner
  ownerWhatsapp?: string;  // WhatsApp number of owner
  createdAt: Timestamp;    // When product was listed
  updatedAt: Timestamp;    // Last update
}
```

#### Key Functions

**`addProductListing(ownerUid, ownerName, ownerEmail, product)`**
- Creates a new product listing linked to a user

**`getAllProductListings()`**
- Retrieves all product listings with owner information
- Used by admin panel

**`getUserProductListings(ownerUid)`**
- Gets products for a specific user

### 4. Updated Authentication Provider

**File:** `app/auth-provider.tsx`

Changes:
- On Google sign-in, user data is automatically upserted to Firestore
- User profile with UID, email, and display name are saved
- Subsequent logins update the user's profile with latest info

### 5. Enhanced User Profile Page

**File:** `app/profile/page.tsx`

New Features:
- Loads user profile from Firestore on page load
- WhatsApp number input field with edit capability
- Save button to update WhatsApp in Firestore
- Cancel button to revert changes
- Success/error messages for WhatsApp updates
- Admin Panel link (visible to all users, redirects if not admin)

### 6. Admin Panel Page

**File:** `app/admin/page.tsx`

#### Features

1. **Access Control**
   - Only accessible to users with `isAdmin: true`
   - Non-admin users redirected to home page
   - Non-logged-in users redirected to login

2. **Statistics Dashboard**
   - Total products count
   - Unique sellers count
   - Products with WhatsApp numbers

3. **Products Table**
   - Displays all products in tabular format
   - Columns:
     - Product Name & Description
     - Category (badge)
     - Price
     - Owner Name
     - Owner Email (clickable mailto link)
     - WhatsApp Number (clickable WhatsApp link)
     - Created Date
   
4. **Responsive Design**
   - Horizontal scroll on mobile
   - Hover effects on table rows
   - Color-coded badges and stats

## How to Use

### For Regular Users

1. **Sign Up / Login**
   - Google authentication automatically creates user in Firestore

2. **Add WhatsApp Number**
   - Go to Profile page
   - Click "Edit" on WhatsApp section
   - Enter WhatsApp number
   - Click "Save"
   - Number is now saved in Firestore

3. **View Admin Panel** (if admin)
   - Click "Admin Panel" button on profile
   - View all products and seller contact info

### For Admins

#### Becoming an Admin

To make a user an admin:

1. Go to Firebase Console (https://console.firebase.google.com)
2. Select project: `ngo-e0a34`
3. Go to Firestore Database
4. Open `users` collection
5. Find user document
6. Set `isAdmin: true`

#### Using Admin Panel

1. Logged-in admin users see "Admin Panel" button on profile
2. Click to view all products
3. See each product with:
   - Owner's name and email
   - Owner's WhatsApp number
   - Direct WhatsApp link (click to contact)
4. Statistics at top show total products and sellers

## Firestore Collections Reference

### Users Collection
```
/users/
  ├─ {uid1}/
  │  ├─ uid: "uid1"
  │  ├─ email: "user@example.com"
  │  ├─ displayName: "User Name"
  │  ├─ photoURL: "https://..."
  │  ├─ whatsappNumber: "+91 98XXX XXXXX"
  │  ├─ isAdmin: false
  │  ├─ createdAt: Timestamp
  │  └─ updatedAt: Timestamp
  └─ {uid2}/ ...
```

### Products Collection
```
/products/
  ├─ {productId1}/
  │  ├─ name: "Product Name"
  │  ├─ category: "Category"
  │  ├─ price: "₹1,000"
  │  ├─ description: "Description"
  │  ├─ ownerUid: "uid1"
  │  ├─ ownerName: "User Name"
  │  ├─ ownerEmail: "user@example.com"
  │  ├─ ownerWhatsapp: "+91 98XXX XXXXX"
  │  ├─ createdAt: Timestamp
  │  └─ updatedAt: Timestamp
  └─ {productId2}/ ...
```

## Code Examples

### Using Auth Context to Get Current User

```tsx
'use client';
import { useAuth } from '@/app/auth-provider';

export function MyComponent() {
  const { user, loading } = useAuth();
  
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please sign in</p>;
  
  return <p>Welcome {user.displayName}!</p>;
}
```

### Accessing Firestore User Data

```tsx
import { getUserProfile } from '@/lib/firestore-users';

async function getUser(uid: string) {
  const profile = await getUserProfile(uid);
  console.log(profile?.whatsappNumber);
}
```

### Adding a Product

```tsx
import { addProductListing } from '@/lib/firestore-products';

async function listProduct(user) {
  const productId = await addProductListing(
    user.uid,
    user.displayName,
    user.email,
    {
      name: 'Handmade Saree',
      category: 'Textiles',
      price: '₹2,500',
      description: 'Beautiful handwoven saree'
    }
  );
  console.log('Product created:', productId);
}
```

## Security Considerations

### Firestore Security Rules (Recommended)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users collection
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow create: if request.auth.uid == userId;
      allow update: if request.auth.uid == userId;
      
      // Only admins can read other users
      allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Products collection - public read
    match /products/{productId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.ownerUid || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
  }
}
```

## Testing the Integration

### Test Firestore User Save

1. Sign up with Google
2. Go to Firebase Console
3. Open Firestore Database
4. Check `/users/{uid}` collection
5. Verify user data is saved

### Test WhatsApp Update

1. Go to Profile page
2. Click "Edit" on WhatsApp section
3. Enter a number
4. Click "Save"
5. Check Firebase Console - `whatsappNumber` should be updated

### Test Admin Panel

1. Make yourself admin in Firebase Console
2. Go to Profile page
3. Click "Admin Panel"
4. Should see products table
5. Click WhatsApp link to verify it works

## Troubleshooting

### Admin Panel shows "Access Denied"

- Check Firebase Console: ensure `isAdmin: true` is set in user document
- Clear browser cache and try again
- Make sure you're logged in

### WhatsApp number not saving

- Check browser console for errors
- Verify Firestore rules allow write access
- Ensure phone number format is valid

### Products not showing in admin panel

- Add test products to Firestore
- Or use home page product section to create listings
- Check that products have `ownerUid` field

## Future Enhancements

1. Product creation form for users
2. User dashboard showing their own products
3. Product search and filtering in admin panel
4. User management in admin panel
5. Product analytics and statistics
6. Email notifications for admin actions

## Files Created/Modified

**Created:**
- `lib/firestore-users.ts` - User management utilities
- `lib/firestore-products.ts` - Product management utilities
- `app/admin/page.tsx` - Admin panel page

**Modified:**
- `lib/firebase.ts` - Added Firestore initialization
- `app/auth-provider.tsx` - Added user upsert on login
- `app/profile/page.tsx` - Added WhatsApp update functionality

## Support

For issues or questions:
1. Check Firebase Console for data
2. Review console logs for errors
3. Verify Firestore security rules
4. Check user permissions in Firebase
