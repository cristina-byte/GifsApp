import {useEffect,useState} from "react"
import Gif from "./components/Gif"
import style from "./style.css"

function App() {

 const [gifs,setGifs]=useState(null)
 const [offset,setOffset]=useState(0)
 const [type,setType]=useState("trending")

  useEffect(()=>{
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=dgZ6JCXCzE0yXSFXj2gaGCZ9ogxVWhKc&limit=10&offset=${offset}`)
    .then(result=>result.json())
    .then(data=>setGifs(data))
  },[offset])

  function getGifsComponents(){
    return gifs.data.map(gif=><Gif key={gif.id} img={gif.images.original} type={type}/>)
  }
  if(gifs!=null)
  console.log(gifs)

  return (
    <div className="App">
      <h1>Trending gifs</h1>
      <div className="gifs-container">
      {gifs && getGifsComponents()}
      </div>
      <div className="navigation">
        { offset>0 && <button onClick={()=>setOffset(offset=>offset-10)}>Previous Page</button>}
        {gifs && gifs.pagination.total_count-(offset+10)>0 && <button onClick={()=>setOffset(offset=>offset+10)}>Next Page</button>}
      </div>
      
    </div>
  );
}

export default App;
