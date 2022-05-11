import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router';
import { Home } from './components/Pages/Home';
import { Profile } from './components/Profile';
import { Stories } from './components/Stories';
import { Actions } from './components/Actions';

function App() {
    return ( <
        div className = "App" >
        <
        html dir = "rtl" >
        <
        NavBar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/%D7%A4%D7%A2%D7%95%D7%9C%D7%95%D7%AA"
        element = { < Actions / > }
        /> <
        Route path = "/%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C"
        element = { < Profile / > }
        /> <
        Route path = "/%D7%AA%D7%95%D7%9B%D7%9F"
        element = { < Stories / > }
        /> <
        /Routes> <
        /html> <
        /div>
    );
}

export default App;