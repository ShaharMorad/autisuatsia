import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import SituationsPage from "./components/SituationsPage/SituationsPage"
import SituationPage from "./components/SituationsPage/SituationPage/SituationPage"
import { Actions } from './components/Actions';

function App() {
  return (
    <div className="App">
      <html dir="rtl" >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/%D7%A4%D7%A2%D7%95%D7%9C%D7%95%D7%AA" element={<Actions />} />
          <Route path="/%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C" element={<Profile />} />
          <Route path="/%D7%AA%D7%95%D7%9B%D7%9F" element={<SituationsPage />} />
          <Route path="/%D7%AA%D7%95%D7%9B%D7%9F/:situationId" element={<SituationPage />} />
          <Route
            path="*"
            element={
              <span >
                <p>אין דבר כזה...</p>
              </span>
            }
          />
        </Routes>
      </html>
    </div>
  );
}

export default App;
