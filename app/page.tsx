import React from "react";
import Image from "next/image";
import fakeData from "./fakeData/fakeData";

export default function Home() {
  return (
    <div className="relative w-full overflow-auto shadow hidden md:block">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-96 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CAR
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NEXT RESERVATION
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              RATING
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fakeData.map((car, index) => (
            <tr key={index} className="hover:bg-gray-50">

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex gap-1 items-center h-16 w-16">
                    <Image src={car.img} alt={`Image of ${car.model}`} width={60} height={46} />
                    <div className="text-sm font-medium text-gray-900">{car.model}</div>
                    <div className="text-sm text-gray-500">{car.year}</div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${car.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {car.status}
                </span>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">⭐️⭐️⭐️⭐️⭐️</td>

              <td className="flex px-6 py-10 whitespace-nowrap text-sm font-medium">
                <button className="text-black hover:text-indigo-900">Reserve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
