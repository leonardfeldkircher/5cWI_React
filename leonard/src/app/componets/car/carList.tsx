import React from 'react'
import Image from 'next/image';
import { Car } from '../../../../lib/types';


type Props = {
    cars: Car[];
}

export default function CarList({ cars }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.map((car) => (
                <div key={`${car.name}-${car.motor.serialNumber}`} className="border rounded-lg p-4 shadow-md">
                    <Image
                        src={car.image}
                        alt={`${car.name} ${car.type}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold">{car.name}</h2>
                    <p className="text-gray-600">{car.type}</p>
                    <p className="text-gray-500">Farbe: {car.color}</p>
                    <div className="mt-2">
                        <p className="text-sm">Motor: {car.motor.hp} PS</p>
                        <p className="text-sm">Seriennummer: {car.motor.serialNumber}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}