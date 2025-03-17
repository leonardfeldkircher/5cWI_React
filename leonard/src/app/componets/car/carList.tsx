import React from 'react'
import Card from './card'
import { Car } from '../../../../lib/types'

type Props = { cars: Car[] }

export default function carList({ cars }: Props) {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3  gap-4'>
                {cars.map((car: Car) => (<Card car={car} />))}
            </div>
        </div>
    )
}