import React, {useState, useEffect} from 'react'
import '../../App.css'
import './Details.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Details () {
    const {id}=useParams()
     const url= `https://www.breakingbadapi.com/api/characters/${id}`
     const [character, setcharacter]= useState(null)  
     let content=null 
     useEffect(() => {
        const fetchItems= async() => {
            const result= await axios(url)
      
            console.log(result.data)
            setcharacter(result.data)
            
          }
          fetchItems()

     },[url])
     if(character){
         {character.map((character)=> (
        content=
        <div className='details-page'>

            <div className='card__details'>
                <div className='head'>
                    <h1>{character.name}</h1>
                </div>
                <div className='char-details'>
                    <div className='char__img'>
                    <img src={character.img} alt=" "></img>
                    </div>
                    <div className='details__char'>
                        <ul>
                            <li>
                                <strong>Birthday: </strong> {character['birthday']}
                            </li>
                            <li className="occ">
                                <strong>Occupation: </strong> {character.occupation.join(", ")}
                            </li>
                            <li>
                                <strong>Status: </strong> {character.status}
                            </li>
                            <li>
                                <strong>Nickname: </strong> {character.nickname}
                            </li>
                            <li>
                                <strong>Actor: </strong> {character.portrayed}
                            </li>
                            <li>
                                <strong>Season Appearance: </strong> {character.appearance.join(", ")}
                            </li>
                        </ul>
                </div>
                </div>
            </div>
        </div>
         ))}
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Details
