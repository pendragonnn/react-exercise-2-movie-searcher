import { useState, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'
import SearchComponent from './components/SearchComponent'
import MovieContainerComponent from './components/MovieContainerComponent'
import { getMovieList, searchMovie } from './api/api'

function App() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setMovieData(result)
    })
  }, [])

  const handleSearch = async(query) => {
    if(!query) {
      getMovieList().then((result) => {
        setMovieData(result)
      })
    } else {
      const results = await searchMovie(query)
      setMovieData(results.results)
    }
  } 

  return (
    <>
    <div className="w-full flex flex-col items-center px-20 ">
      <HeaderComponent />
      <SearchComponent onSearch={handleSearch}/>
      <MovieContainerComponent data={movieData}/>
    </div>
    </>
  )
}

export default App
