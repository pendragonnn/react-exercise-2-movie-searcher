import React from 'react'

export default function SearchComponent() {
  return (
    <div className="w-full mt-2 p-3 flex items-center justify-center">
      <input className="bg-neutral-700 border border-white border-dotted p-3 rounded-md text-blue-100 animate-pulse focus:border-white focus:animate-none" type="text" size={30} placeholder="Type your movie title here" />
    </div>
  )
}
