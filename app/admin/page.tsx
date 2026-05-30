'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth-provider';
import { isUserAdmin } from '@/lib/firestore-users';
import { Loader } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    const redirectToDashboard = async () => {
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

        // Redirect to dashboard
        router.push('/admin/dashboard');
      } catch (err) {
        console.error('Error checking admin status:', err);
        router.push('/');
      }
    };

    if (!authLoading) {
      redirectToDashboard();
    }
  }, [user, authLoading, router]);

  return (
    <div className="w-full min-h-screen bg-[#F7EBE0] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader className="w-12 h-12 text-[#6A2A43] animate-spin" />
        <p className="text-[#6A2A43] font-semibold">Redirecting to admin dashboard...</p>
      </div>
    </div>
  );
}
