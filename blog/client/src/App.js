import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/layouts/Header"
import Navbar from "./components/layouts/Navbar"
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';

function App() {
  const [posts, setPosts] = useState([])
  useEffect( () => {
    axios.get("http://localhost:8080/articles")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
  })
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Route exact path="/" render={() => <Articles posts={posts}></Articles>}></Route>
      <Route path="/article/:id" 
        render={props => <Article {...props} posts={posts}/>}/>
      <Route path="/update/:id" render={props => <EditArticle {...props} posts={posts}/>}/>
      <Route path="/add-article" component={AddArticle}></Route>
      <Footer></Footer>
    </div>
  );
}

export default App;

