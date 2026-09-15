import React from 'react';
import { GetAllSubCategorey } from '../AllApi/GetAllSubCategorey';
import Link from 'next/link';

export default async function SubAllCategorey() {
  const data = await GetAllSubCategorey();
  console.log(data, '101010');

  return (
    <div className="grid grid-cols-1 h-screen mt-[100px] md:grid-cols-3 gap-4 p-4">

      {data?.map((sub: any) => (
        <Link href={`/subcategoryDetails/${sub._id}`}>
          <div key={sub._id || sub.id} className="px-6 py-5 border bg-green-400 flex justify-center text-white items-center font-bold italic text-2xl rounded-md shadow-sm">
            <h3>{sub.name}</h3>
          </div>

        </Link>

      ))}
    </div>
  );
}

