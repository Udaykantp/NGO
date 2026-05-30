'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Phone, Calendar, LogOut, Edit2, Heart, BookOpen, Award, MessageCircle, Save, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getUserProfile, updateUserWhatsApp } from '@/lib/firestore-users';
import { UserProfile } from '@/lib/firestore-users';

export default function Profile() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [editingWhatsapp, setEditingWhatsapp] = useState(false);
  const [savingWhatsapp, setSavingWhatsapp] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');

  // Load user profile from Firestore
  useEffect(() => {
    const loadUserProfile = async () => {
      if (user) {
        try {
          const profile = await getUserProfile(user.uid);
          setUserProfile(profile);
          setWhatsappNumber(profile?.whatsappNumber || '');
        } catch (error) {
          console.error('Error loading user profile:', error);
        } finally {
          setProfileLoading(false);
        }
      }
    };

    if (!loading) {
      loadUserProfile();
    }
  }, [user, loading]);

  if (!loading && !user) {
    router.push('/login');
    return null;
  }

  if (loading || profileLoading) {
    return (
      <div className="w-full min-h-screen bg-[#F7EBE0] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#6A2A43] border-t-[#C53357] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6A2A43] font-semibold">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSaveWhatsapp = async () => {
    if (!user || !whatsappNumber.trim()) {
      setSaveMessage('Please enter a valid WhatsApp number');
      return;
    }

    try {
      setSavingWhatsapp(true);
      await updateUserWhatsApp(user.uid, whatsappNumber);
      setSaveMessage('WhatsApp number saved successfully!');
      setEditingWhatsapp(false);
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving WhatsApp:', error);
      setSaveMessage('Failed to save WhatsApp number');
    } finally {
      setSavingWhatsapp(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7EBE0] flex flex-col">
      <Header />

      <div className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-[#6A2A43]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-[#CF8322]">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Profile'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#6A2A43] to-[#C53357] flex items-center justify-center text-white text-3xl">
                      {user?.displayName?.[0] || user?.email?.[0] || '?'}
                    </div>
                  )}
                </div>

                <div>
                  <h1 className="text-4xl font-bold text-[#6A2A43] mb-2">
                    {user?.displayName || 'Welcome!'}
                  </h1>
                  <p className="text-[#CF8322] font-semibold mb-2">
                    Member since{' '}
                    {user?.metadata?.creationTime
                      ? new Date(user.metadata.creationTime).toLocaleDateString()
                      : 'Recently'}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full md:w-auto">
                <a
                  href="/admin/dashboard"
                  className="flex items-center justify-center gap-2 bg-[#CF8322] hover:bg-[#6A2A43] text-white font-bold px-6 py-3 rounded-lg transition"
                >
                  <Shield className="w-5 h-5" />
                  Admin Dashboard
                </a>
                <button
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition disabled:opacity-50"
                >
                  <LogOut className="w-5 h-5" />
                  {loggingOut ? 'Logging out...' : 'Logout'}
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Programs Enrolled */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#CF8322]">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-[#CF8322]" />
                <div>
                  <p className="text-sm text-gray-600">Programs Enrolled</p>
                  <p className="text-3xl font-bold text-[#6A2A43]">0</p>
                </div>
              </div>
              <a
                href="/programs"
                className="text-[#C53357] hover:text-[#6A2A43] font-semibold text-sm"
              >
                Browse Programs →
              </a>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#C53357]">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-[#C53357]" />
                <div>
                  <p className="text-sm text-gray-600">Certifications</p>
                  <p className="text-3xl font-bold text-[#6A2A43]">0</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Complete programs to earn certificates</p>
            </div>

            {/* Donations Made */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-green-500" fill="currentColor" />
                <div>
                  <p className="text-sm text-gray-600">Donations Made</p>
                  <p className="text-3xl font-bold text-[#6A2A43]">0</p>
                </div>
              </div>
              <a
                href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 font-semibold text-sm"
              >
                Make a Donation →
              </a>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#6A2A43] mb-6">Account Details</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Full Name
                </label>
                <div className="bg-gray-50 border border-[#D2BEB5] rounded-lg px-4 py-3 text-gray-700">
                  {user?.displayName || 'Not set'}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Email Address
                </label>
                <div className="bg-gray-50 border border-[#D2BEB5] rounded-lg px-4 py-3 text-gray-700">
                  {user?.email}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Account Created
                </label>
                <div className="bg-gray-50 border border-[#D2BEB5] rounded-lg px-4 py-3 text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'Recently'}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Last Login
                </label>
                <div className="bg-gray-50 border border-[#D2BEB5] rounded-lg px-4 py-3 text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {user?.metadata?.lastSignInTime
                    ? new Date(user.metadata.lastSignInTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'Recently'}
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold text-[#6A2A43]">WhatsApp Number</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Add your WhatsApp number so customers can easily reach you to order your products or inquire about your services.
            </p>

            {saveMessage && (
              <div className={`mb-4 p-4 rounded-lg ${
                saveMessage.includes('successfully')
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {saveMessage}
              </div>
            )}

            {editingWhatsapp ? (
              <div className="flex gap-4">
                <input
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className="flex-1 border-2 border-[#D2BEB5] rounded-lg px-4 py-3 focus:outline-none focus:border-[#C53357]"
                />
                <button
                  onClick={handleSaveWhatsapp}
                  disabled={savingWhatsapp}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  {savingWhatsapp ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={() => {
                    setEditingWhatsapp(false);
                    setWhatsappNumber(userProfile?.whatsappNumber || '');
                  }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-gray-50 border border-[#D2BEB5] rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    {whatsappNumber || 'Not provided yet'}
                  </span>
                </div>
                <button
                  onClick={() => setEditingWhatsapp(true)}
                  className="flex items-center gap-2 text-[#C53357] hover:text-[#6A2A43] font-semibold"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
