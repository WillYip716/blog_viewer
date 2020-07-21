import React from 'react';
import {Route} from 'react-router-dom';
import Post from './components/post';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar'


function App() {
    return (
        <div>
            <Navbar/>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/post/:id" exact component={Post} />
        </div>
            

    );
}

export default App;
