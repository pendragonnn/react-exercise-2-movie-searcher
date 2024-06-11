import React from 'react'
import { Search } from 'lucide-react'

export default function HeaderComponent() {
  return (
    <div className="w-full text-center mt-10 flex flex-col items-center justify-center p-3">
      <h1 className="bg-gradient-to-r from-blue-800 to-blue-100 text-transparent bg-clip-text text-5xl font-bold mb-5 tracking wide">Movie Searcher</h1>
      <div className="flex space-x-2 items-center">
        <Search size={24}  />
        <p className="text-xl font-bold tracking-tide">Search your movie here! ✨</p>
      </div>
    </div>
  )
}
