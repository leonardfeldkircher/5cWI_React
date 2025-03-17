import React from 'react'
import CarList from '../componets/car/carList';
import { Car } from '../../../lib/types';


type Props = {}

const cars: Car[] = [
    {
        name: "Sport Car",
        type: "BMW M3 GTS",
        color: "Orange",
        motor: {
            serialNumber: 42012,
            hp: 520,
        }
    },
    {
        name: "Track Car",
        type: "Supra MK4",
        color: "Blue",
        motor: {
            serialNumber: 8473,
            hp: 800,
        }
    },
    {
        name: "Hyper Car",
        type: "Pagani Huayra",
        color: "White",
        motor: {
            serialNumber: 6918,
            hp: 1200,
        }
    }
];

export default function Cars({ }: Props) {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    )
}