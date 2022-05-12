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
          <Route path="/%d7%94%d7%95%d7%a1%d7%a4%d7%aa%20%d7%aa%d7%95%d7%9b%d7%9f" element={<Actions />} />
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
