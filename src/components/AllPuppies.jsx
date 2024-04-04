import {useState, useEffect} from 'react'
import axios from'axios'

export default function AllPuppies(){
  const baseUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players'
  const [players, setPlayers] = useState([])

  useEffect(() => {
    
    async function getAllPlayers(){
      try{
        const {data} = await axios.get(baseUrl);
        const players = data.data.players;
        console.log('players', players);
        setPlayers(players);
      }catch (error){
        console.error('rendering puppies didnt work bro', error)
      }
    }
    getAllPlayers()
  }, [])
  
return(
  <>
  <h1>Enrolled Puppies</h1>
  {players.map((player) => {
    return(
    <>
      
      <div key={player.name} className='puppy-card'>
        <img src={player.imageUrl}/>
        <h1>{player.name}</h1>
        <h2>{player.breed}</h2>
      </div>
    </>
    )
  })}
  
  </>
)
}