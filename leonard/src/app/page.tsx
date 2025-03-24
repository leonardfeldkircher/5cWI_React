import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">HOME</h1>
      
      <div className="relative w-full max-w-2xl h-[400px]">
        <Image
          src="/sam.jpg"
          alt="Home Image"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  )
}

//npm run dev