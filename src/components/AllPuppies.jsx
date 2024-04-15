import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/allpuppies.css";
import {useNavigate} from 'react-router-dom'
import SinglePuppy from "./SinglePuppy";

export default function AllPuppies() {
  const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players";
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate()
  

  useEffect(() => {
    async function getAllPlayers() {
      try {
        const { data } = await axios.get(baseUrl);
        const players = data.data.players;
        console.log("players", players);
        setPlayers(players);
      } catch (error) {
        console.error("getting puppies didnt work bro", error);
      }
    }
    getAllPlayers();
  }, []);

  function handleClick(){
    navigate('/players/:id')
  }
 

  return (
    <>
      <h1>Enrolled Puppies</h1>
      <article className="card-container">
        {players.map((player) => {
        return (
          <div key={player.name} className="puppy-card">
          
              <img className="puppy-img" src={player.imageUrl} />
              <div className="puppy-details">
                <h1>{player.name}</h1>
                <h2>{player.breed}</h2>
                <button onClick={handleClick} className="button"> Details</button>
              </div>
            </div>
          
        );
        })}
      </article>
    </>
  );
}
