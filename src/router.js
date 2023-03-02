import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Contact from './compontents/contact';
import Home from './compontents/home';
import Posts from './compontents/posts';

function Router() {
  return (
     <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='posts/:id' element={<Posts/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default Router;
