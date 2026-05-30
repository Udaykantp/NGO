# Admin Pages Quick Reference

## URL Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/admin` | Redirect | Redirects to `/admin/dashboard` |
| `/admin/dashboard` | Dashboard | Overview & statistics |
| `/admin/listings` | Listings | Complete product table with search |
| `/admin/categories` | Categories | Products organized by category |

## Files Structure

```
app/
├── admin/
│   ├── page.tsx                    # Redirect to dashboard
│   ├── dashboard/
│   │   └── page.tsx                # Dashboard page
│   ├── listings/
│   │   └── page.tsx                # Listings page
│   └── categories/
│       └── page.tsx                # Categories page

components/
├── admin-wrapper.tsx               # Reusable admin page wrapper
├── admin-nav.tsx                   # Admin navigation sidebar
```

## Key Components

### AdminWrapper
```tsx
import AdminWrapper from '@/components/admin-wrapper';

export default function MyAdminPage() {
  return (
    <AdminWrapper 
      title="Page Title" 
      description="Optional description"
    >
      {/* Your content */}
    </AdminWrapper>
  );
}
```

### AdminNav
Automatically used inside AdminWrapper. Shows navigation to:
- Dashboard
- All Listings
- By Category

## Firestore Queries

### Load All Products with Owner Info
```tsx
const products = await getAllProductListings();
// Returns: ProductListing[]
// Each product includes ownerWhatsapp from Firestore
```

### Check If User Is Admin
```tsx
const isAdmin = await isUserAdmin(userId);
// Returns: boolean
```

### Get User Profile
```tsx
const profile = await getUserProfile(userId);
// Returns: UserProfile with whatsappNumber
```

## Authentication Flow

```
User visits /admin/dashboard
        ↓
AdminWrapper checks if logged in
        ↓
    No → Redirect to /login
    Yes → Check isAdmin flag
        ↓
    No → Redirect to /
    Yes → Show dashboard
```

## Admin User Setup

1. User signs in with Google
2. User created in Firestore `users` collection
3. Set `isAdmin: true` in Firebase Console
4. User can access admin pages

## Display Owner WhatsApp

In all admin pages, products show owner's WhatsApp:

```tsx
{product.ownerWhatsapp ? (
  <a href={`https://wa.me/${product.ownerWhatsapp.replace(/[^\d]/g, '')}`}>
    {product.ownerWhatsapp}
  </a>
) : (
  <span>Not provided</span>
)}
```

## Color Scheme

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Dark Purple | `#6A2A43` |
| Secondary | Pink Red | `#C53357` |
| Accent | Orange Gold | `#CF8322` |
| Background | Light Cream | `#F7EBE0` |

## Admin Page Features

### Dashboard
- Stats cards (total, sellers, WhatsApp ready)
- Recent listings table
- Category count

### Listings
- Full product table
- Search bar
- All product details
- Owner WhatsApp link

### Categories
- Grouped by category
- Expandable sections
- Individual product cards
- Owner contact info

## Development

### Adding New Admin Page

1. Create new folder: `app/admin/[page-name]/`
2. Create `page.tsx` inside
3. Use AdminWrapper component
4. Add route to AdminNav in `components/admin-nav.tsx`

```tsx
// app/admin/[page-name]/page.tsx
'use client';

import AdminWrapper from '@/components/admin-wrapper';

export default function [PageName]() {
  return (
    <AdminWrapper title="Page Title" description="Description">
      {/* Your content */}
    </AdminWrapper>
  );
}
```

4. Update AdminNav:
```tsx
const navItems = [
  // ... existing items
  { href: '/admin/[page-name]', label: 'Page Label', icon: IconComponent },
];
```

## Common Tasks

### Get All Products
```tsx
import { getAllProductListings } from '@/lib/firestore-products';

const products = await getAllProductListings();
```

### Filter Products by Category
```tsx
const categorized = products.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});
```

### Search Products
```tsx
const filtered = products.filter(p =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  p.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
);
```

## Security Checklist

- ✅ AdminWrapper checks authentication
- ✅ AdminWrapper verifies admin status
- ✅ Non-admins redirected to home
- ✅ Non-authenticated redirected to login
- ✅ WhatsApp data only visible to admins
- ✅ No sensitive data in URLs

## Performance Tips

- Firestore queries cached by React
- Lazy load products on component mount
- Use search to filter on client-side
- Category grouping done in-memory
- Pagination recommended for 1000+ products

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| Mobile Chrome | ✅ |
| Mobile Safari | ✅ |

## Responsive Breakpoints

- Mobile: < 768px (hamburger menu)
- Tablet: 768px - 1024px (responsive grid)
- Desktop: > 1024px (sidebar layout)

## Icons Used

- BarChart3: Dashboard
- Package: Listings
- Grid3x3: Categories
- Menu/X: Mobile menu toggle
- ChevronUp/Down: Expand/collapse
- Phone: WhatsApp link
- Mail: Email link
- AlertCircle: Error messages
- Loader: Loading state

## Imports

### From Components
```tsx
import AdminWrapper from '@/components/admin-wrapper';
import AdminNav from '@/components/admin-nav';
```

### From Libraries
```tsx
import { getAllProductListings, ProductListing } from '@/lib/firestore-products';
import { getUserProfile, isUserAdmin } from '@/lib/firestore-users';
import { useAuth } from '@/app/auth-provider';
import { useRouter } from 'next/navigation';
```

## Styling

All components use:
- Tailwind CSS classes
- Existing color scheme
- Responsive design patterns
- Consistent spacing (gap-4, p-6, etc.)
- Lucide icons

---

**Quick Links:**
- Documentation: `ADMIN_PAGES_DOCUMENTATION.md`
- Firestore Guide: `FIRESTORE_ADMIN_GUIDE.md`
- Architecture: `FIRESTORE_ARCHITECTURE.md`

**Last Updated:** 2024 | **Version:** 1.0
