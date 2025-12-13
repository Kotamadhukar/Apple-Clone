import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './component/Nav'
import Store from './pages/Store'
import Mac from './pages/Mac'
import Ipad from './pages/Ipad'
import Iphone from './pages/Iphone'
import Watch from './pages/Watch'
import Airpods from './pages/Airpods'
import TvHome from './pages/TvHome'
import Entertainment from './pages/Entertainment'
import Accessosries from './pages/Accessosries'
import Support from './pages/Support'
import Defaul_page from './pages/Defaul_page'
import Error_page from './pages/Error_page'

 
function App() {

  return (
    <>
      <BrowserRouter>
       <Nav/>
        <Routes>
          <Route path='/' element={<Defaul_page></Defaul_page>}></Route>
          <Route path='/store' element={<Store></Store>}></Route>
          <Route path='/mac' element={<Mac></Mac>}></Route>
          <Route path='/ipad' element={<Ipad></Ipad>}></Route>
          <Route path='/iphone' element={<Iphone></Iphone>}></Route>
          <Route path='/watch' element={<Watch></Watch>}></Route>
          <Route path='/airpods' element={<Airpods></Airpods>}></Route>
          <Route path='/tvhome' element={<TvHome></TvHome>}></Route>
          <Route path='/entertainment' element={<Entertainment></Entertainment>}></Route>
          <Route path='/accessories' element={<Accessosries></Accessosries>}></Route>
          <Route path='/support' element={<Support></Support>}></Route>
          <Route path='*' element={<Error_page></Error_page>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
