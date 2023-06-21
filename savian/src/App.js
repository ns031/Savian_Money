import './App.css';

import Navbar from './Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import {Home} from './components/Home'
import {About} from './components/About'
import Builderpage from './components/Builderpage';
import Saya from './Allbuilders/Saya';
import SikkaH from './Allbuilders/SikkaH';
import Mahagun from './Allbuilders/Mahagun';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/builderpage' element={<Builderpage />}></Route>
        <Route path='/saya' element={<Saya />}></Route>
        <Route path='/sikka' element={<SikkaH />}></Route>
        <Route path='/mahagun' element={<Mahagun />}></Route>
  
      </Routes>

   </>
  );
}

export default App;
