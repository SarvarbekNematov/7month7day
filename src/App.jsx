import './App.css'
import Navbar from './components/Navbar'
import { Routers } from "./routes"

function App() {

  return (
    <>
      <Navbar/>
      <Routers/>
    </>
  )
}

export default App



//// 
// 1./movie/now_playing?language=en-US&page=1?api_key=${API_KEY} - now playing get all
// 2./movie/popular?language=en-US&page=${page}?api_key=${API_KEY} - popular get all
// 3./movie/top_rated?language=en-US&page=1?api_key=${API_KEY} - top rated get all
// 4./movie/upcoming?language=en-US&page=${page}?api_key=${API_KEY} - up coming get all
// 5./movie/${id}?api_key=${API_KEY} - get by id , single page
// 6./movie/${id}/videos?language=en-US?api_key=${API_KEY} - single page videos
// 7./movie/${id}/credits?language=en-US?api_key=${API_KEY} - single page actors
// 8./search/movie?query=${e.target.value}&include_adult=false&api_key=${API_KEY} - search 
