import React from "react";
import Image from "next/image";
import fakeData from "./fakeData/fakeData";
import { HiDotsVertical } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";



export default function Home() {
  return (

    <div className="p-5 h-screen bg-gray-100">
      <div className="relative w-full overflow-auto shadow hidden md:block">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-80 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      <Image src={car.img} alt={`Image of ${car.model}`} width={48} height={46} />
                      <div className="text-sm font-medium text-gray-900">{car.model}</div>
                      <div className="text-sm text-gray-500">{car.year}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-gray-500">{car.reservation}</p>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${car.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {car.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-lg">
                  {car.stars === 5 && (
                    <span>★★★★★</span>
                  )}
                </td>

                <td className="flex items-center px-6 py-10 whitespace-nowrap text-sm font-medium">
                  <button className="items-center text-black hover:text-indigo-900"><HiDotsVertical /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">
            {fakeData.map((car, index) => (
              <div className="flex items-center gap-4 bg-white rounded-md p-2 shadow-md" key={index}>
                <div className="relative">
                  <Image src={car.img} alt={car.model} width={85} height={85}/>
                  <RiVerifiedBadgeFill size={20} className="text-green-800 absolute top-0 left-0 "/>
                </div>
                <div className="flex flex-col">
                  <p className="tex-black font-bold">{car.model} <span className="text-black font-bold">{car.year}</span></p>
                  <p className="text-sm text-gray-500">Next reservation: <span className="text-gray-500">{car.reservation}</span></p>
                  <p>
                    {car.stars === 5 && (
                      <span className="">★★★★★</span>
                    )}
                  </p>
                </div>

                <a href="#"><HiDotsVertical /></a>
              </div>
            ))}
      </div>
    </div>
  );
}
