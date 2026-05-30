import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, Timestamp, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export interface ProductListing {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  ownerUid: string;
  ownerName: string;
  ownerEmail: string;
  ownerWhatsapp?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Add a product listing to Firestore
 */
export async function addProductListing(
  ownerUid: string,
  ownerName: string,
  ownerEmail: string,
  product: {
    name: string;
    category: string;
    price: string;
    description: string;
    ownerWhatsapp?: string;
  }
) {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'products'), {
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      ownerUid,
      ownerName,
      ownerEmail,
      ownerWhatsapp: product.ownerWhatsapp || '',
      createdAt: now,
      updatedAt: now,
    });

    return docRef.id;
  } catch (error) {
    console.error('Error adding product listing:', error);
    throw error;
  }
}

/**
 * Add a product listing to Firestore (admin-driven)
 *
 * Allows an admin to manually create a product record while specifying the owner metadata.
 */
export async function addProductListingByAdmin(input: {
  ownerUid: string;
  ownerName: string;
  ownerEmail: string;
  ownerWhatsapp?: string;
  product: {
    name: string;
    category: string;
    price: string;
    description: string;
    ownerWhatsapp?: string;
  };
}) {
  return addProductListing(
    input.ownerUid,
    input.ownerName,
    input.ownerEmail,
    {
      name: input.product.name,
      category: input.product.category,
      price: input.product.price,
      description: input.product.description,
      ownerWhatsapp: input.ownerWhatsapp ?? input.product.ownerWhatsapp,
    }
  );
}


/**
 * Get all product listings with owner information
 */
export async function getAllProductListings(): Promise<ProductListing[]> {
  try {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs(q);
    
    const products: ProductListing[] = [];
    
    for (const doc of querySnapshot.docs) {
      const data = doc.data() as DocumentData;
      products.push({
        id: doc.id,
        name: data.name,
        category: data.category,
        price: data.price,
        description: data.description,
        ownerUid: data.ownerUid,
        ownerName: data.ownerName,
        ownerEmail: data.ownerEmail,
        ownerWhatsapp: data.ownerWhatsapp || '',
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
    }
    
    return products;
  } catch (error) {
    console.error('Error getting products:', error);
    return [];
  }
}

/**
 * Get product listings for a specific user
 */
export async function getUserProductListings(ownerUid: string): Promise<ProductListing[]> {
  try {
    const q = query(collection(db, 'products'), where('ownerUid', '==', ownerUid));
    const querySnapshot = await getDocs(q);
    
    const products: ProductListing[] = [];
    
    for (const doc of querySnapshot.docs) {
      const data = doc.data() as DocumentData;
      products.push({
        id: doc.id,
        name: data.name,
        category: data.category,
        price: data.price,
        description: data.description,
        ownerUid: data.ownerUid,
        ownerName: data.ownerName,
        ownerEmail: data.ownerEmail,
        ownerWhatsapp: data.ownerWhatsapp || '',
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
    }
    
    return products;
  } catch (error) {
    console.error('Error getting user products:', error);
    return [];
  }
}
