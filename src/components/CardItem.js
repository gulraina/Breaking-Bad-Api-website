import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css'
function CardItem({item}) {
  
  return (

    <div className='card'>
      <Link to={`/details/${item.char_id}`}>
        <div className='card-name'>
          <h1>{item.name}</h1>
        </div>
        </Link>
        <div className='card-inner'>
          <ul>
            <li className="occ">
              <strong>Occupation: </strong> {item.occupation.join(", ")}
            </li>
            <li>
              <strong>Birthday: </strong> {item.birthday}
            </li>
            <li>
              <strong>Status: </strong> {item.status}
            </li>
          </ul>
          </div>
        
    </div>
    
  );
}

export default CardItem;