import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import ContactForm from './views/Contact';
import injectContext from './store/Context';




function App() {
  return (
    <>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact-list' element={<ContactForm />} />
          </Routes>
        </BrowserRouter>
        
      
  
  </>
  );
}

export default injectContext(App);
