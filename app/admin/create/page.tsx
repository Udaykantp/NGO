'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminWrapper from '@/components/admin-wrapper';
import { addProductListingByAdmin } from '@/lib/firestore-products';
import { AlertCircle, CheckCircle2, Loader, PlusCircle } from 'lucide-react';

export default function AdminCreateProduct() {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [ownerUid, setOwnerUid] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerWhatsapp, setOwnerWhatsapp] = useState('');

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    const required = [
      { label: 'Product name', value: name },
      { label: 'Category', value: category },
      { label: 'Price', value: price },
      { label: 'Description', value: description },
      { label: 'Owner UID', value: ownerUid },
      { label: 'Owner name', value: ownerName },
      { label: 'Owner email', value: ownerEmail },
    ];

    const missing = required.find((r) => !r.value.trim());
    if (missing) {
      setError(`Missing required field: ${missing.label}`);
      return;
    }

    try {
      setSubmitting(true);
      const id = await addProductListingByAdmin({
        ownerUid: ownerUid.trim(),
        ownerName: ownerName.trim(),
        ownerEmail: ownerEmail.trim(),
        ownerWhatsapp: ownerWhatsapp.trim() || undefined,
        product: {
          name: name.trim(),
          category: category.trim(),
          price: price.trim(),
          description: description.trim(),
          ownerWhatsapp: ownerWhatsapp.trim() || undefined,
        },
      });

      setSuccess('Product created successfully.');

      // Optionally redirect after short delay
      setTimeout(() => router.push('/admin/listings'), 900);

      // eslint-disable-next-line no-console
      console.log('Created product id:', id);
    } catch (err) {
      setError('Failed to create product. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminWrapper
      title="Create Product"
      description="Manually add a product listing (admin only)."
    >
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start gap-3">
          <PlusCircle className="w-6 h-6 text-[#6A2A43] mt-1" />
          <div>
            <h2 className="text-xl font-bold text-[#6A2A43]">Manual Product Entry</h2>
            <p className="text-gray-600 text-sm mt-1">
              Fill out product details and seller contact info. WhatsApp is optional.
            </p>
          </div>
        </div>
      </div>

      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900">Success</h3>
            <p className="text-green-800 text-sm">{success}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900">Error</h3>
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
              placeholder="e.g., Hand-Stitched Tote Bag"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
              placeholder="e.g., Tailoring"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Price *</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
              placeholder="e.g., ₹699"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Owner UID *</label>
            <input
              value={ownerUid}
              onChange={(e) => setOwnerUid(e.target.value)}
              className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
              placeholder="Firebase Auth UID"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43] min-h-[120px]"
              placeholder="Short description shown in admin listings"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-[#E5D4C1] pt-6">
          <h3 className="text-lg font-bold text-[#6A2A43] mb-4">Seller Contact</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Name *</label>
              <input
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
                placeholder="Seller display name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Email *</label>
              <input
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
                placeholder="Seller email"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Owner WhatsApp (optional)</label>
              <input
                value={ownerWhatsapp}
                onChange={(e) => setOwnerWhatsapp(e.target.value)}
                className="w-full border border-[#D2BEB5] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A2A43]"
                placeholder="e.g., +919810203040"
              />
              <p className="text-xs text-gray-500 mt-2">
                WhatsApp is used to create a wa.me link. Non-digit characters are ignored.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <button
            type="button"
            onClick={() => router.push('/admin/listings')}
            className="px-5 py-2.5 rounded-lg border border-[#D2BEB5] text-[#6A2A43] font-semibold hover:bg-[#F5E6D3] transition"
            disabled={submitting}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2.5 rounded-lg bg-[#6A2A43] hover:bg-[#5B1D35] text-white font-semibold transition flex items-center justify-center gap-2"
          >
            {submitting ? <Loader className="w-4 h-4 animate-spin" /> : null}
            {submitting ? 'Creating...' : 'Create Product'}
          </button>
        </div>
      </form>
    </AdminWrapper>
  );
}

