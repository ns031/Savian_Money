import './App.css';

import Navbar from './Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import {Home} from './components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import Builderpage from './components/Builderpage';
import Saya from './Allbuilders/Saya';
import SikkaH from './Allbuilders/SikkaH';
import Mahagun from './Allbuilders/Mahagun';
import Bhutani from './Allbuilders/Bhutani';
import Gaurs from './Allbuilders/Gaurs';
import Group108 from './Allbuilders/Group108';
import Advantages from './components/Advantages';


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
        <Route path='/bhutani' element={<Bhutani />}></Route>
        <Route path='/gaurs' element={<Gaurs />}></Route>
        <Route path='/grp108' element={<Group108 />}></Route>
        <Route path='/advantages' element={<Advantages/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
   </>
  );
}

export default App;
