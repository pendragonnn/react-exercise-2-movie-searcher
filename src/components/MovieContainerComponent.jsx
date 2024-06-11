import React from 'react'

export default function MovieContainerComponent() {
  return (
    <div className="w-full bg-transparent mt-5 p-5 border border-white border-x-transparent border-y-gradient-to-r from-blue-800 to-blue-500">
      {/* example card 1 */}
      <div className="w-[400px] max-h-[500px] border border-white p-4 rounded-xl">
        <div className="flex flex-col p-4 gap-y-3 items-center justify-center">
          <img src="https://placehold.co/300x300" alt="" />
          <div className="flex flex-col gap-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-wide">Title data 1</h1>
            <p className="text-md font-semibold text-neutral-500">release data 1</p>
            <p className="text-xl font-bold text-yellow-500">rate data 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
