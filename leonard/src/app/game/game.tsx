'use client';

import React, { useState } from 'react'

type PartType = 'wheel' | 'door' | 'engine'

interface CarPart {
  type: PartType
  isAttached: boolean
}

export default function Game() {
  const [rotation, setRotation] = useState(0)
  const [parts, setParts] = useState<CarPart[]>([
    { type: 'wheel', isAttached: false },
    { type: 'door', isAttached: false },
    { type: 'engine', isAttached: false },
  ])

  const handleDrop = (e: React.DragEvent, targetType: PartType) => {
    e.preventDefault()
    const draggedType = e.dataTransfer.getData('partType') as PartType
    if (draggedType === targetType) {
      setParts(parts.map(part => 
        part.type === draggedType ? { ...part, isAttached: true } : part
      ))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex gap-4">
        {/* Linke Seite - Teile */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Verfügbare Teile</h2>
          <div className="space-y-4">
            {parts.filter(part => !part.isAttached).map((part, index) => (
              <div 
                key={index}
                className="p-4 bg-white rounded-lg shadow cursor-pointer border-2 border-gray-300"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('partType', part.type)
                }}
              >
                {part.type === 'wheel' && '🛞 Rad'}
                {part.type === 'door' && '🚪 Tür'}
                {part.type === 'engine' && '⚙️ Motor'}
              </div>
            ))}
          </div>
        </div>

        {/* Mitte - Auto */}
        <div className="w-3/4 bg-gray-50 p-4 rounded-lg">
          <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
            {/* Auto-Chassis */}
            <div className="w-96 h-40 bg-gray-300 mx-auto rounded-lg relative">
              {/* Dropzones */}
              <div 
                className={`absolute left-0 top-1/2 w-20 h-20 -translate-y-1/2 ${parts.find(p => p.type === 'wheel' && p.isAttached) ? 'bg-green-200' : 'bg-gray-200'} rounded-full border-2 border-dashed border-gray-400`}
                onDrop={(e) => handleDrop(e, 'wheel')}
                onDragOver={handleDragOver}
              >
                {parts.find(p => p.type === 'wheel' && p.isAttached) && '🛞'}
              </div>
              <div 
                className={`absolute left-1/2 top-0 w-32 h-full -translate-x-1/2 ${parts.find(p => p.type === 'door' && p.isAttached) ? 'bg-green-200' : 'bg-gray-200'} border-2 border-dashed border-gray-400`}
                onDrop={(e) => handleDrop(e, 'door')}
                onDragOver={handleDragOver}
              >
                {parts.find(p => p.type === 'door' && p.isAttached) && '🚪'}
              </div>
              <div 
                className={`absolute right-4 top-1/2 w-24 h-24 -translate-y-1/2 ${parts.find(p => p.type === 'engine' && p.isAttached) ? 'bg-green-200' : 'bg-gray-200'} rounded border-2 border-dashed border-gray-400`}
                onDrop={(e) => handleDrop(e, 'engine')}
                onDragOver={handleDragOver}
              >
                {parts.find(p => p.type === 'engine' && p.isAttached) && '⚙️'}
              </div>
            </div>
          </div>

          {/* Rotationsregler */}
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
            className="w-full mt-8"
          />
        </div>
      </div>
    </div>
  )
} 