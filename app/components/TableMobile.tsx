import React from 'react';
import Image from 'next/image';
import fakeData from '../fakeData/fakeData';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';

function TableMobile() {
    return (
        <div className="grid grid-cols-1 gap-4 md:hidden max-w-fit">
            {fakeData.map((car, index) => (

                <div className="flex items-center gap-4 bg-white rounded-md p-2 shadow-md" key={index}>

                    <div className="relative">
                        <Image src={car.img} alt={car.model} width={85} height={85} />
                        <RiVerifiedBadgeFill size={20} className="text-green-800 absolute top-0 left-0 " />
                    </div>

                    <div className="flex flex-col">
                        <p
                            className="tex-black font-bold">
                            {car.model}
                            <span
                                className="text-black font-bold">
                                {car.year}
                            </span>
                        </p>

                        <p
                            className="text-sm text-gray-500">
                            Next reservation:
                            <span
                                className="text-gray-500">
                                {car.reservation}
                            </span>
                        </p>

                        <p>
                            {car.stars === 5 && (
                                <span className="">★★★★★</span>
                            )}
                        </p>
                    </div>

                    <button className='right-14 mb-10'>
                        <HiDotsVertical
                            size={18}
                            className='text-black'
                        />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TableMobile;