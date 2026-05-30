# Google Authentication - Quick Reference Card

## 🎯 In 30 Seconds

Your website now has **Google Sign-In/Sign-Up**. Users can create accounts and log in with one click!

## 📍 Key Pages

| Page | URL | What It Does |
|------|-----|--------------|
| Login | `/login` | Sign in with Google |
| Sign Up | `/signup` | Create account with Google |
| Profile | `/profile` | View your account (requires login) |

## 👤 What Users See

### When NOT Logged In (Header)
```
[Nav Sanyogita Logo] ... [Home] [About] ... [Login] [Sign Up] [💚 Donate]
```

### When Logged In (Header)
```
[Nav Sanyogita Logo] ... [Home] [About] ... [👤 John Doe] [Logout] [💚 Donate]
```

## 🔄 User Flows

### Sign Up
```
User clicks "Sign Up" 
    → Google popup appears
    → User confirms
    → Account created
    → Redirected to /profile
```

### Login
```
User clicks "Login"
    → Google popup appears
    → User confirms
    → Logged in
    → Redirected to /profile
```

### Logout
```
User clicks their name in header
    → Sees profile
    → Clicks "Logout"
    → Session ends
    → Redirected to home
    → Header resets to Login/Sign Up
```

## 💻 Developer Quick Start

### Check if User is Logged In
```tsx
'use client';
import { useAuth } from '@/app/auth-provider';

export function MyComponent() {
  const { user } = useAuth();
  
  if (user) {
    console.log("User is logged in:", user.email);
  }
}
```

### Add Google Sign In Button
```tsx
'use client';
import { useAuth } from '@/app/auth-provider';

export function SignInButton() {
  const { signInWithGoogle } = useAuth();
  return <button onClick={signInWithGoogle}>Sign In with Google</button>;
}
```

### Create Protected Page
```tsx
'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth-provider';

export default function SecretPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  if (!loading && !user) {
    router.push('/login');
    return null;
  }
  
  return <h1>Only logged-in users see this</h1>;
}
```

## 🔑 Auth Hook Methods

```tsx
const { 
  user,                // Current user object (null if not logged in)
  loading,             // true while checking auth status
  signInWithGoogle,    // Function to sign in with Google
  logout              // Function to logout
} = useAuth();
```

## 📊 User Object Properties

When logged in, `user` contains:
```javascript
{
  displayName: "John Doe",           // User's name from Google
  email: "john@gmail.com",           // User's email
  photoURL: "https://...",           // User's profile photo
  metadata: {
    creationTime: "2024-01-15T10:30:00Z",
    lastSignInTime: "2024-01-20T14:45:00Z"
  }
}
```

## 📱 Responsive Design

✅ All auth pages work on mobile  
✅ Mobile menu has auth buttons  
✅ Touch-friendly buttons  
✅ Optimized for small screens  

## 🔐 Security Checklist

- [x] Google handles passwords securely
- [x] No sensitive data stored locally
- [x] Firebase manages sessions
- [x] Protected routes enforce login
- [x] Logout clears session properly

## ⚡ Common Tasks

### "I want to show something only to logged-in users"
```tsx
const { user } = useAuth();
if (user) {
  // Show this
}
```

### "I want to redirect users to login if not authenticated"
```tsx
const router = useRouter();
const { user, loading } = useAuth();

if (!loading && !user) {
  router.push('/login');
  return null;
}
```

### "I want to display user's name"
```tsx
const { user } = useAuth();
return <p>Hello, {user?.displayName}!</p>;
```

### "I want to show user's profile photo"
```tsx
const { user } = useAuth();
return <img src={user?.photoURL} alt="Profile" />;
```

## 🚀 Testing

Test in browser console:
```javascript
// Check if auth is working
localStorage
// Look for Firebase tokens

// Check user state
window.__authState  // (if you add debugging)
```

Or just:
1. Go to `/signup`
2. Click "Sign up with Google"
3. Complete auth
4. Should redirect to `/profile`

## 📞 Troubleshooting

| Problem | Solution |
|---------|----------|
| Google button doesn't work | Check Firebase console - enable Google auth |
| Profile page redirects to login | Make sure you're logged in first |
| Can't access other pages | All public pages work without login |
| User info not showing | Wait for `loading` to be `false` |

## 🎨 Styling Auth Pages

Auth pages use the site's color scheme:
- **Primary:** Dark Purple (#6A2A43)
- **Secondary:** Pink Red (#C53357)
- **Accent:** Orange Gold (#CF8322)
- **Background:** Light Cream (#F7EBE0)

## 📚 Full Docs

For complete information:
- `AUTH_SETUP.md` - Setup instructions
- `AUTHENTICATION_IMPLEMENTATION.md` - All features
- `GOOGLE_AUTH_SUMMARY.md` - Detailed guide

## ✅ What's Working

- [x] Google Sign-Up with one click
- [x] Google Login with one click
- [x] User profile display
- [x] Logout button
- [x] Protected profile page
- [x] Header auth UI
- [x] Mobile responsive
- [x] Error handling
- [x] Loading states
- [x] Secure sessions

## ❌ Not Yet Implemented

- [ ] Email/password auth (coming soon)
- [ ] Profile editing
- [ ] Program enrollment tracking
- [ ] Certificate generation
- [ ] Donation history
- [ ] Two-factor auth
- [ ] Social login (GitHub, Facebook)

---

**Everything is ready to go! Start testing authentication now! 🚀**
