import React, { useState } from 'react'

export default function SearchComponent({ onSearch }) {
  let [value, setValue] = useState('')

  const setValueFunction = (keyword) => {
    setValue(keyword)
  }

  const search = async(q) => {
    onSearch(q)
  }

  return (
    <div className="w-full mt-2 p-3 flex flex-col gap-y-3 items-center justify-center">
      <input className="bg-neutral-700 border border-white border-dotted p-3 rounded-md text-blue-100 animate-pulse focus:border-white focus:animate-none" type="text" size={30} placeholder="Type your movie title here"
        onChange={({ target }) => {
          search(target.value)
          setValueFunction(target.value)
        }} />
      <p className="font-bold">Search: {" "}
        <span className="text-blue-800">
          {value}
        </span>
      </p>
    </div>
  )
}
