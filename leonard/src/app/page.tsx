import Image from 'next/image'
import Game from './game/game'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-20 z-10">HOME</h1>
      
      <div className="relative w-full max-w-2xl h-[600px] mt-8">
        <Image
          src="/sam.jpg"
          alt="Home Image"
          fill
          className="object-contain rounded-lg shadow-lg"
          priority
          style={{ objectPosition: 'center center' }}
        />
      </div>
    </div>
  )
}

//npm run dev