import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Details from './components/pages/Details'
import Characters from './components/pages/Characters';
import CardItem from './components/CardItem'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [items, setItems]= useState([])
  const [isLoading, setIsLoading]=useState(true)

  useEffect(() => {
    const fetchItems= async() => {
      const result= await axios(
        'https://www.breakingbadapi.com/api/characters'
      )

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/details/:id'><Details /></Route>
          <Route path='/Characters' render= {(props) => (
    <Characters {...props} isLoading={isLoading} items={items} />
          )}
          />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;