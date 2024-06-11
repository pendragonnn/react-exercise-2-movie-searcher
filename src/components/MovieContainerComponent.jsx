import React, { useEffect, useState } from 'react'
import { getMovieList } from '../api/api'

export default function MovieContainerComponent() {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-4 bg-transparent mt-5 p-5 border border-white border-x-transparent border-y">
      {/* example card 1 */}
      {popularMovies.map((movie, index) => (
        <div key={index} className="w-[400px] min-h-[500px] border border-white p-4 rounded-xl">
          <div className="flex flex-col p-4 gap-y-3 items-center justify-center">
            <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" />
            <div className="flex flex-col gap-y-3 text-center">
              <h1 className="text-3xl font-bold tracking-wide min-h-20">{movie.title}</h1>
              <p className="text-md font-semibold text-neutral-500">Release date: {movie.release_date}</p>
              <p className="text-xl font-bold text-yellow-500">Average vote: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
