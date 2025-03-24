'use client';

import React, { useState } from 'react'
import CarList from '../componets/car/carList';
import { Car } from '../../../lib/types';

const cars: Car[] = [
    {
        name: "BMW",
        type: "F80",
        color: "White",
        image: "/BMW.jpg",
        motor: {
            serialNumber: 42012,
            hp: 520,
        }
    },
    {
        name: "Toyota",
        type: "Supra MK4",
        color: "Blue",
        image: "/SUPRA.jpg",
        motor: {
            serialNumber: 8473,
            hp: 800,
        }
    },
    {
        name: "Audi",
        type: "A5",
        color: "White",
        image: "/AUDI.jpg",
        motor: {
            serialNumber: 6918,
            hp: 220,
        }
    }
];

export default function CarsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCars = cars.filter(car => 
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen p-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Suche nach Name oder Typ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid black',
                        borderRadius: '0.25rem',
                        color: 'black'
                    }}
                />
            </div>
            <CarList cars={filteredCars} />
        </div>
    )
}