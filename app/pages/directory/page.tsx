'use client';

import React, { useEffect, useState } from 'react';
import LibraryCard from '@/app/components/LibraryCard';
import swlsLibraries from '@/swls_libraries.json';

interface Library {
  name: string;
  website: string;
  code?: string;
  county: string;
  phone: string;
  hours: string;
}

export default function Page() {
  const [filtered, setFiltered] = useState<Library[]>(swlsLibraries as Library[]);
  const [activeLetter, setActiveLetter] = useState<string>(''); // show all by default

  useEffect(() => {
    if (activeLetter === '') {
      setFiltered(swlsLibraries as Library[]);
    } else {
      const results = (swlsLibraries as Library[]).filter((library) => {
        const firstLetter = library.name.trim().charAt(0).toUpperCase();
        return firstLetter === activeLetter;
      });
      setFiltered(results);
    }
  }, [activeLetter]);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Library Directory</h1>
      <p className="text-gray-600 mb-6 mr-[30%]">
        The links below connect to each public library’s website, blog, or Facebook page where there are links to the library catalog.
        Public Library hours are subject to change. Contact your public library if you need assistance, have questions about the catalog
        or want to verify posted hours.
      </p>

      <div className="mb-2 text-sm font-medium text-gray-700">City/Library Name:</div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveLetter('')}
          className={`px-3 py-1 rounded text-sm font-medium border cursor-pointer ${
            activeLetter === '' ? 'bg-[#263C85] text-white' : 'text-[#263C85] border-[#263C85]'
          }`}
        >
          All
        </button>
        {letters.map(letter => (
          <button
            key={letter}
            onClick={() => setActiveLetter(letter)}
            className={`px-3 py-1 rounded text-sm font-medium border cursor-pointer ${
              activeLetter === letter ? 'bg-[#263C85] text-white' : 'text-[#263C85] border-[#263C85]'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((lib) => (
          <LibraryCard key={lib.code || lib.name} {...lib} />
        ))}
      </div>
    </main>
  );
}
