'use client';

import { useEffect, useState } from 'react';
import AdminWrapper from '@/components/admin-wrapper';
import { getAllProductListings, ProductListing } from '@/lib/firestore-products';
import { Phone, Mail, Package, AlertCircle, Search } from 'lucide-react';

export default function AdminListings() {
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getAllProductListings();
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (err) {
        console.error('Error loading listings:', err);
        setError('Failed to load product listings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  if (loading) {
    return (
      <AdminWrapper title="All Listings" description="Complete list of all product listings with owner information">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading listings...</p>
        </div>
      </AdminWrapper>
    );
  }

  return (
    <AdminWrapper title="All Listings" description="Complete list of all product listings with owner information">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900">Error</h3>
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-6 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by product name, seller, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#D2BEB5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
          />
        </div>
        <div className="text-sm text-gray-600 px-4 py-2 bg-white rounded-lg border border-[#D2BEB5]">
          {filteredProducts.length} results
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#6A2A43] to-[#C53357] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Product Name</th>
                <th className="px-6 py-4 text-left font-semibold">Category</th>
                <th className="px-6 py-4 text-left font-semibold">Price</th>
                <th className="px-6 py-4 text-left font-semibold">Owner Name</th>
                <th className="px-6 py-4 text-left font-semibold">Owner Email</th>
                <th className="px-6 py-4 text-left font-semibold">WhatsApp</th>
                <th className="px-6 py-4 text-left font-semibold">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    <Package className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <p>{searchTerm ? 'No products match your search' : 'No products listed yet'}</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-[#6A2A43]">{product.name}</p>
                        <p className="text-sm text-gray-600 truncate">{product.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#C53357] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#CF8322]">{product.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{product.ownerName}</p>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`mailto:${product.ownerEmail}`}
                        className="text-[#C53357] hover:text-[#6A2A43] underline text-sm"
                      >
                        {product.ownerEmail}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      {product.ownerWhatsapp ? (
                        <a
                          href={`https://wa.me/${product.ownerWhatsapp.replace(/[^\d]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                        >
                          <Phone className="w-4 h-4" />
                          {product.ownerWhatsapp}
                        </a>
                      ) : (
                        <span className="text-gray-400 italic text-sm">Not provided</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {product.createdAt instanceof Date
                        ? product.createdAt.toLocaleDateString()
                        : new Date(product.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminWrapper>
  );
}
