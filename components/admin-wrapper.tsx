'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth-provider';
import { isUserAdmin } from '@/lib/firestore-users';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AdminNav from '@/components/admin-nav';
import { AlertCircle, Loader } from 'lucide-react';

interface AdminWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function AdminWrapper({ children, title, description }: AdminWrapperProps) {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        const adminStatus = await isUserAdmin(user.uid);
        if (!adminStatus) {
          router.push('/');
          return;
        }
        setIsAdmin(true);
      } catch (err) {
        console.error('Error checking admin status:', err);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      checkAdmin();
    }
  }, [user, authLoading, router]);

  if (authLoading || loading) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-12 h-12 text-[var(--color-heading)] animate-spin stroke-[1.5]" />
          <p className="text-[var(--color-heading)] font-semibold tracking-wide">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background)]">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-[var(--color-white)] rounded-lg p-8 text-center shadow-md hover:-translate-y-1 hover:border-[var(--color-accent)] border border-transparent transition">
            <AlertCircle className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-4 stroke-[1.5]" />
            <h1 className="text-3xl font-bold tracking-wide text-[var(--color-heading)] mb-2">Access Denied</h1>
            <p className="text-[var(--color-text)] font-medium tracking-wide">You don&apos;t have permission to access the admin panel.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[var(--color-background)]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-4">
              <div className="bg-[var(--color-white)] rounded-lg shadow-md p-4 border border-[#DFE2CF]">
                <h2 className="text-lg font-bold tracking-wide text-[var(--color-heading)] mb-4">Admin</h2>
                <AdminNav />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-wide text-[var(--color-heading)] mb-2">{title}</h1>
              {description && <p className="text-[var(--color-text)] font-medium tracking-wide text-sm">{description}</p>}
            </div>

            {/* Page Content */}
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
