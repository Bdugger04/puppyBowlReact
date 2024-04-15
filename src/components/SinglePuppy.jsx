import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players";

export default function SinglePuppy({id}){
  
  const [singlePlayer, setSinglePlayer] = useState()
  const navigate = useNavigate()
  


  useEffect(() =>{
    async function fetchSinglePlayer(){
      try{
        const {data} = await axios.get(baseUrl + id);
        setSinglePlayer(data.data.singlePlayer)
      }catch (error){
      console.error('did not fetch singleplayer', error)
      }
    }
    fetchSinglePlayer()
    
  }, []);
  
  function handleClick() {
    navigate('/')
  }
  
  if (!singlePlayer){
    return <div> Loading player {id} ....</div>
  }

  return(
    <>
      <h1> Single Puppy</h1>
      <article className="card-container">
          <div key={singlePlayer.name} className="puppy-card">
              <img className="puppy-img" src={singlePlayer.imageUrl} />
              <div className="puppy-details">
                <h1>{singlePlayer.name}</h1>
                <h2>{singlePlayer.breed}</h2>
                <button onClick={handleClick} className="button"> Return </button>
              </div>
            </div>
      </article>
    </>
  )
}