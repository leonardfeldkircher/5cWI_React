"use client";
import React, { useState } from 'react'
import { Car } from '../../../../lib/types';

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`p-6 rounded-lg shadow-md hover:shadow-xl hover:cursor-pointer transition duration-300
                ${isActive ? 'bg-gray-900 text-white border-2 border-amber-500' : 'bg-blue-900 text-white border-2 border-white'}`}
            onClick={() => {
                setIsActive(!isActive);
        }}>
        
            <h2 className='font-bold text-2xl'>{car.name}</h2>
            <h2 className='text-xl'>{car.type}</h2>
            <h2>Color: {car.color}</h2>
            <h2>Serial Number: {car.motor.serialNumber}</h2>
            <h2>Horsepower: {car.motor.hp}</h2>
            {isActive ? "active" : "inactive"}
        </div>
    )
}