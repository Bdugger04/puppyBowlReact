import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/allpuppies.css";

export default function AllPuppies() {
  const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players";
  const [players, setPlayers] = useState([]);
  // const [imageHeights, setImageHeights] = useState([])

  useEffect(() => {
    async function getAllPlayers() {
      try {
        const { data } = await axios.get(baseUrl);
        const players = data.data.players;
        console.log("players", players);
        setPlayers(players);
      } catch (error) {
        console.error("rendering puppies didnt work bro", error);
      }
    }
    getAllPlayers();
  }, []);

  // const getImageHeight = async (url)  => {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.src = url;
  //     img.onload = () => resolve(img.height);
  //     img.onerror = reject;
  //   });
  // }
  

  return (
    <>
      <h1>Enrolled Puppies</h1>
      <article className="card-container">
        {players.map((player) => {
          // const imageHeight = await getImageHeight(player.imageUrl);
          // const isSmallImage = imageHeight < 200;
        return (
          <div key={player.name} className="puppy-card">
          {/* <div className={`puppy-card ${isSmallImage ? 'small-image' : ''}`}  key={player.name}> */}
              <img className="puppy-img" src={player.imageUrl} />
              <div className="puppy-details">
                <h1>{player.name}</h1>
                <h2>{player.breed}</h2>
              </div>
            </div>
          
        );
        })}
      </article>
    </>
  );
}
