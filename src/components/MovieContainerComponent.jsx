
export default function MovieContainerComponent({ data }) {
  return (
    // add loading animation while data still fatching, also search result status when not found
    <div className="w-full flex flex-wrap items-center justify-center gap-4 bg-transparent mt-5 p-5 border border-white border-x-transparent border-y">
      {data.map((movie, index) => (
        <div key={index} className="w-[400px] min-h-[500px] border border-white p-4 rounded-xl">
          <div className="flex flex-col p-4 gap-y-3 items-center justify-center">
            {/* add condition where the image is loading and iff the movie poster is unavailable */}
            <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="movie poster" />
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
