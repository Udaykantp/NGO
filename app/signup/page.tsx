'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, CheckCircle } from 'lucide-react';

export default function SignUp() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/profile');
    return null;
  }

  const handleGoogleSignUp = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      router.push('/profile');
    } catch (err: any) {
      setError(err.message || 'Failed to sign up with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7EBE0] flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Sign Up Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#C53357]">
            <h1 className="text-3xl font-bold text-[#6A2A43] mb-2 text-center">
              Join Us Today
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Create an account to track your progress and connect with our programs
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Google Sign Up Button */}
            <button
              onClick={handleGoogleSignUp}
              disabled={loading}
              className="w-full bg-white border-2 border-[#C53357] hover:bg-[#F7EBE0] text-[#6A2A43] font-bold px-6 py-3 rounded-lg transition flex items-center justify-center gap-3 mb-6 disabled:opacity-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {loading ? 'Creating account...' : 'Sign up with Google'}
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#D2BEB5]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or sign up with email</span>
              </div>
            </div>

            {/* Email Sign Up (Coming Soon) */}
            <button
              disabled
              className="w-full bg-[#F7EBE0] border-2 border-[#D2BEB5] text-gray-500 font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-3 mb-6 cursor-not-allowed opacity-50"
            >
              <Mail className="w-6 h-6" />
              Email Sign Up (Coming Soon)
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="text-[#C53357] hover:text-[#6A2A43] font-bold">
                  Login
                </a>
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 space-y-3">
            {[
              'Access exclusive skill development programs',
              'Track your learning progress and certificates',
              'Connect with community of empowered women',
              'Get job placement opportunities',
              'Purchase handmade products from graduates',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#CF8322] flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-8">
            By signing up, you agree to our{' '}
            <a href="#" className="text-[#C53357] hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#C53357] hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
