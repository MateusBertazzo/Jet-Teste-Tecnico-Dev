import Image from 'next/image';
import fakeData from '../fakeData/fakeData';
import { HiDotsVertical } from 'react-icons/hi';


export default function TableDesktop() {
    return (
        <div className="relative w-full overflow-auto shadow hidden md:block">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-80 px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
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
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {fakeData.map((car, index) => (
              <tr key={index} className="hover:bg-gray-50">

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="relative flex gap-1 items-center h-16 w-16">
                      <Image src={car.img} alt={`Image of ${car.model}`} width={85} height={85} />
                      <p className="text-sm font-medium text-black">{car.model}</p>
                      <p className="text-sm font-medium text-black">{car.year}</p>
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

                <td className="flex justify-center items-center px-6 py-10 whitespace-nowrap text-sm font-medium">
                  <button className="flex text-black hover:text-indigo-900">
                    <HiDotsVertical size={24} className='self-center'/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
