import React from 'react'
import Image from 'next/image';

type Truck = {
    name: string;
    type: string;
    color: string;
    image: string;
    motor: {
        hp: number;
        serialNumber: string;
    };
}

type Props = {
    trucks: Truck[];
}

export default function TruckList({ trucks }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trucks.map((truck) => (
                <div key={`${truck.name}-${truck.motor.serialNumber}`} className="border rounded-lg p-4 shadow-md">
                    <Image
                        src={truck.image}
                        alt={`${truck.name} ${truck.type}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold">{truck.name}</h2>
                    <p className="text-gray-600">{truck.type}</p>
                    <p className="text-gray-500">Farbe: {truck.color}</p>
                    <div className="mt-2">
                        <p className="text-sm">Motor: {truck.motor.hp} PS</p>
                        <p className="text-sm">Seriennummer: {truck.motor.serialNumber}</p>
                    </div>
                </div>
            ))}
        </div>
    );
} 