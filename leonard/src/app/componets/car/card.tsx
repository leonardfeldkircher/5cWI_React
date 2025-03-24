"use client";
import { useState } from 'react'
interface Car {
    name: string;
    type: string;
    color: string;
    motor: {
        serialNumber: string;
        hp: number;
    }
}

interface CardProps {
    car: Car;
}

export default function Card({ car }: CardProps) {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <div
            style={{
                padding: '1.5rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                backgroundColor: isActive ? 'rgba(0, 0, 0, 0.1)' : 'white',
                color: 'black',
                transition: 'all 0.3s ease'
            }}
            onClick={() => setIsActive(!isActive)}
        >
            <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'black' }}>{car.name}</h2>
            <h2 style={{ fontSize: '1.25rem', color: 'black' }}>{car.type}</h2>
            <h2 style={{ color: 'black' }}>Color: {car.color}</h2>
            <h2 style={{ color: 'black' }}>Serial Number: {car.motor.serialNumber}</h2>
            <h2 style={{ color: 'black' }}>Horsepower: {car.motor.hp}</h2>
        </div>
    )
}