'use client';

import { useEffect, useState } from 'react';
import AdminWrapper from '@/components/admin-wrapper';
import { getAllProductListings, ProductListing } from '@/lib/firestore-products';
import { Phone, Package, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function AdminCategories() {
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getAllProductListings();
        setProducts(allProducts);
        // Expand first category by default
        const categories = Array.from(new Set(allProducts.map(p => p.category)));
        if (categories.length > 0) {
          setExpandedCategories(new Set([categories[0]]));
        }
      } catch (err) {
        console.error('Error loading categories:', err);
        setError('Failed to load product categories. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  if (loading) {
    return (
      <AdminWrapper title="By Category" description="Product listings organized by category">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading categories...</p>
        </div>
      </AdminWrapper>
    );
  }

  const categoriesMap = new Map<string, ProductListing[]>();
  products.forEach(product => {
    if (!categoriesMap.has(product.category)) {
      categoriesMap.set(product.category, []);
    }
    categoriesMap.get(product.category)!.push(product);
  });

  const categories = Array.from(categoriesMap.entries()).sort((a, b) => b[1].length - a[1].length);

  return (
    <AdminWrapper title="By Category" description="Product listings organized by category">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900">Error</h3>
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Category Summary */}
      <div className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(([category, items]) => (
          <div
            key={category}
            className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#C53357] cursor-pointer hover:shadow-lg transition"
            onClick={() => toggleCategory(category)}
          >
            <p className="text-gray-600 font-medium text-sm">{category}</p>
            <p className="text-2xl font-bold text-[#6A2A43] mt-1">{items.length}</p>
            <p className="text-xs text-gray-500 mt-1">items</p>
          </div>
        ))}
      </div>

      {/* Categories List */}
      <div className="space-y-4">
        {categories.map(([category, items]) => (
          <div
            key={category}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-[#D2BEB5]"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className="w-full px-6 py-4 bg-gradient-to-r from-[#6A2A43] to-[#C53357] text-white flex items-center justify-between hover:from-[#5B1D35] hover:to-[#B0263F] transition"
            >
              <div className="flex items-center gap-4">
                <Package className="w-5 h-5" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">{category}</h3>
                  <p className="text-sm text-white/80">{items.length} listings</p>
                </div>
              </div>
              {expandedCategories.has(category) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Category Products */}
            {expandedCategories.has(category) && (
              <div className="divide-y divide-gray-200">
                {items.map((product) => (
                  <div key={product.id} className="px-6 py-4 hover:bg-gray-50 transition">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Product Details */}
                      <div>
                        <h4 className="font-semibold text-[#6A2A43] text-lg">{product.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                        <p className="text-[#CF8322] font-bold text-lg mt-2">{product.price}</p>
                      </div>

                      {/* Owner Details */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">Seller:</span> {product.ownerName}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <a
                            href={`mailto:${product.ownerEmail}`}
                            className="text-[#C53357] hover:text-[#6A2A43] underline"
                          >
                            {product.ownerEmail}
                          </a>
                        </p>
                        {product.ownerWhatsapp && (
                          <a
                            href={`https://wa.me/${product.ownerWhatsapp.replace(/[^\d]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm mt-2 bg-green-50 px-3 py-2 rounded-lg"
                          >
                            <Phone className="w-4 h-4" />
                            {product.ownerWhatsapp}
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Created: {product.createdAt instanceof Date
                        ? product.createdAt.toLocaleDateString()
                        : new Date(product.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Package className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-gray-600 text-lg">No products in any category yet</p>
        </div>
      )}
    </AdminWrapper>
  );
}
