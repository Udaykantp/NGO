# Google Authentication Setup

## Overview
Nav Sanyogita Foundation website now has complete Google Sign-In and Sign-Up functionality using Firebase Authentication.

## Files Created

### Core Authentication Files
- **`lib/firebase.ts`** - Firebase initialization with configuration
- **`app/auth-provider.tsx`** - Auth context provider with useAuth hook
- **`app/login/page.tsx`** - Login page with Google sign-in
- **`app/signup/page.tsx`** - Sign-up page with Google sign-up
- **`app/profile/page.tsx`** - Protected user profile page

### Updated Files
- **`components/header.tsx`** - Updated with auth state display, login/logout buttons
- **`app/layout.tsx`** - Wrapped with AuthProvider for global auth state

## Features

### Authentication
✅ Google Sign-In with Firebase  
✅ Google Sign-Up with Firebase  
✅ Auth State Management (useAuth hook)  
✅ Protected Profile Page  
✅ User Profile Display with Avatar  
✅ Logout Functionality  

### User Profile Page
✅ Display user name, email, and Google profile photo  
✅ Account creation date and last login information  
✅ Dashboard stats (programs enrolled, certifications, donations)  
✅ Account details and actions  
✅ Quick links to programs and donation

### Navigation Updates
✅ Header shows Login/Sign Up when not authenticated  
✅ Header shows user profile and logout when authenticated  
✅ Mobile menu with auth options  
✅ Donate button always available  

## How to Use

### For Users

**Sign Up:**
1. Click "Sign Up" button in header
2. Click "Sign up with Google"
3. Complete Google authentication
4. Redirected to profile page

**Login:**
1. Click "Login" button in header
2. Click "Sign in with Google"
3. Complete Google authentication
4. Redirected to profile page

**Logout:**
1. Click on user name in header (shows profile)
2. Click "Logout" button
3. Redirected to home page

**View Profile:**
1. After login, click your name in header
2. View your account details and stats

### For Developers

**Using Auth in Components:**
```tsx
'use client';
import { useAuth } from '@/app/auth-provider';

export function MyComponent() {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  
  if (loading) return <p>Loading...</p>;
  
  if (user) {
    return <p>Welcome {user.displayName}!</p>;
  }
  
  return <button onClick={signInWithGoogle}>Sign In</button>;
}
```

**Creating Protected Pages:**
```tsx
'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth-provider';

export default function ProtectedPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  if (!loading && !user) {
    router.push('/login');
    return null;
  }
  
  // Your protected content here
}
```

## Firebase Configuration

The Firebase configuration is stored in `lib/firebase.ts`:
```
Project: ngo-e0a34
Auth Domain: ngo-e0a34.firebaseapp.com
```

**Never expose API keys in production** - consider moving to environment variables for enhanced security.

## Future Enhancements

- Email/Password authentication
- Social login (GitHub, Facebook)
- Two-factor authentication
- Profile editing
- Password reset
- Account deletion with data export
- Enrollment tracking in programs
- Certificate generation
- Donation history

## Security Notes

1. All auth pages use `'use client'` directive (Client Components required for Firebase)
2. Protected pages check auth state before rendering
3. User data is only stored in Firebase (no backend database required for basic auth)
4. All redirects happen client-side after auth state changes

## Testing

- Login Page: `http://localhost:3000/login`
- Sign Up Page: `http://localhost:3000/signup`
- Profile Page: `http://localhost:3000/profile` (requires login)
- Navigation shows correct buttons based on auth state

## Troubleshooting

**"user is not redirecting to profile after login"**
- Check Firebase is properly initialized in `lib/firebase.ts`
- Ensure `AuthProvider` wraps all children in `app/layout.tsx`
- Check browser console for errors

**"Google button not working"**
- Verify Firebase project has Google auth enabled
- Check Firebase console > Authentication > Google provider is enabled

**"useAuth hook not found"**
- Make sure component has `'use client'` directive at top
- Ensure AuthProvider wraps the entire app in layout.tsx
