// components/Kontak.js
'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Kontak() {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Mengirim...');

    // Pastikan Anda sudah membuat tabel 'kontak' di Supabase dengan kolom: nama, email, pesan
    const { error } = await supabase
      .from('kontak')
      .insert([{ nama: formData.nama, email: formData.email, pesan: formData.pesan }]);

    if (error) {
      setStatus('Gagal mengirim pesan.');
      console.error(error);
    } else {
      setStatus('Pesan berhasil terkirim!');
      setFormData({ nama: '', email: '', pesan: '' });
    }
  };

  return (
    <section className="py-12 bg-blue-50" id="kontak">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hubungi Jieun.Keun</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama</label>
            <input 
              type="text" 
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border p-2 rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pesan</label>
            <textarea 
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              className="w-full border p-2 rounded h-32" 
              required 
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            Kirim Pesan
          </button>
          {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
