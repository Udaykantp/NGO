import { db } from './firebase';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  whatsappNumber?: string;
  isAdmin?: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Upsert a user document to Firestore.
 * Creates the document on first login, updates on subsequent logins.
 */
export async function upsertUser(userData: {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}) {
  try {
    const userRef = doc(db, 'users', userData.uid);
    const userSnap = await getDoc(userRef);
    
    const now = Timestamp.now();
    
    if (userSnap.exists()) {
      // User exists, update with new data
      await setDoc(
        userRef,
        {
          email: userData.email,
          displayName: userData.displayName,
          photoURL: userData.photoURL || null,
          updatedAt: now,
        },
        { merge: true }
      );
    } else {
      // New user, create document
      await setDoc(userRef, {
        uid: userData.uid,
        email: userData.email,
        displayName: userData.displayName,
        photoURL: userData.photoURL || null,
        whatsappNumber: '',
        isAdmin: false,
        createdAt: now,
        updatedAt: now,
      });
    }
  } catch (error) {
    console.error('Error upserting user:', error);
    throw error;
  }
}

/**
 * Get a user's profile from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
}

/**
 * Update user's WhatsApp number
 */
export async function updateUserWhatsApp(uid: string, whatsappNumber: string) {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(
      userRef,
      {
        whatsappNumber,
        updatedAt: Timestamp.now(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('Error updating WhatsApp number:', error);
    throw error;
  }
}

/**
 * Check if user is admin
 */
export async function isUserAdmin(uid: string): Promise<boolean> {
  try {
    const profile = await getUserProfile(uid);
    return profile?.isAdmin ?? false;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}
