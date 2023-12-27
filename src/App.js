
import {Routes, Route} from 'react-router-dom';
import Singers from "./Singers";
import FirstSinger from "./FirstSinger";
import SecondSinger from "./SecondSinger";
import ThirdSinger from './ThirdSinger';
import FourthSinger from './FourthSinger';
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Singers/>}/>
        <Route path='/' element={<Singers/>}>
          <Route path='/singer/first' element={<FirstSinger/>}/>
          <Route path='/singer/second' element={<SecondSinger/>}/>
          <Route path='/singer/third' element={<ThirdSinger/>}/>
          <Route path='/singer/fourth' element={<FourthSinger/>}/>  
        </Route>
        <Route path="*" element="Page Not Found" />
      </Routes>
    </>  
  );
}

export default App;
