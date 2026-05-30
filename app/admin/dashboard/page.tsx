'use client';

import { useEffect, useState } from 'react';
import AdminWrapper from '@/components/admin-wrapper';
import { getAllProductListings, ProductListing } from '@/lib/firestore-products';
import { Package, Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const allProducts = await getAllProductListings();
        setProducts(allProducts);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
        setError('Failed to load dashboard data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <AdminWrapper title="Dashboard" description="Overview of all listings and sellers">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </AdminWrapper>
    );
  }

  const uniqueSellers = new Set(products.map(p => p.ownerUid)).size;
  const productsWithWhatsApp = products.filter(p => p.ownerWhatsapp).length;
  const categories = new Set(products.map(p => p.category)).size;

  return (
    <AdminWrapper title="Dashboard" description="Overview of all listings and sellers">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900">Error</h3>
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Products */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#6A2A43] hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-medium text-sm">Total Listings</p>
              <p className="text-3xl font-bold text-[#6A2A43] mt-2">{products.length}</p>
              <p className="text-xs text-gray-500 mt-2">Active products</p>
            </div>
            <Package className="w-12 h-12 text-[#6A2A43] opacity-20" />
          </div>
        </div>

        {/* Unique Sellers */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#C53357] hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-medium text-sm">Sellers</p>
              <p className="text-3xl font-bold text-[#C53357] mt-2">{uniqueSellers}</p>
              <p className="text-xs text-gray-500 mt-2">Registered sellers</p>
            </div>
            <Users className="w-12 h-12 text-[#C53357] opacity-20" />
          </div>
        </div>

        {/* With WhatsApp */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#CF8322] hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-medium text-sm">WhatsApp Ready</p>
              <p className="text-3xl font-bold text-[#CF8322] mt-2">{productsWithWhatsApp}</p>
              <p className="text-xs text-gray-500 mt-2">With contact info</p>
            </div>
            <TrendingUp className="w-12 h-12 text-[#CF8322] opacity-20" />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#DA878B] hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-medium text-sm">Categories</p>
              <p className="text-3xl font-bold text-[#DA878B] mt-2">{categories}</p>
              <p className="text-xs text-gray-500 mt-2">Product types</p>
            </div>
            <Package className="w-12 h-12 text-[#DA878B] opacity-20" />
          </div>
        </div>
      </div>

      {/* Recent Listings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#6A2A43] mb-4">Recent Listings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F5E6D3] border-b-2 border-[#D2BEB5]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[#6A2A43]">Product</th>
                <th className="px-4 py-3 text-left font-semibold text-[#6A2A43]">Seller</th>
                <th className="px-4 py-3 text-left font-semibold text-[#6A2A43]">Category</th>
                <th className="px-4 py-3 text-left font-semibold text-[#6A2A43]">Price</th>
                <th className="px-4 py-3 text-left font-semibold text-[#6A2A43]">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.slice(0, 10).map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#6A2A43]">{product.name}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-700">{product.ownerName}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-[#F5E6D3] text-[#6A2A43] text-xs font-semibold px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-medium text-[#CF8322]">{product.price}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-xs">
                    {product.createdAt instanceof Date
                      ? product.createdAt.toLocaleDateString()
                      : new Date(product.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {products.length > 10 && (
          <p className="text-center text-gray-600 text-sm mt-4">
            Showing 10 of {products.length} listings. View all in &quot;All Listings&quot; page.
          </p>
        )}
      </div>
    </AdminWrapper>
  );
}
