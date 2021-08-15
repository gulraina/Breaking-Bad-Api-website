import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import CardItem from '../CardItem';
import '../CardItem.css'
import Details from './Details';

function Characters({isLoading, items}) {
    
    return (
        isLoading ? ( <h1>Loading..</h1>) : (<section className='cards'>
            {items.map((item, key) => (
                <Link to={{pathname:'/Details', state: {
                    item: {item}
                }}}>
                <CardItem item={item}></CardItem>
                </Link>
            ))}
        </section>)
        
    );
}

export default Characters

