import React from 'react'
import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import MainFrame from './components/mainframe/MainFrame'
import About from './components/about/About'
import FAQs from './components/faqs/FAQs'
import Products from './components/products/Products';
import { Route, Routes} from 'react-router-dom'

function App() {

  // let component;
  // switch (window.location.pathname)
  // {
  //   case '/':
  //     component = <MainFrame/>
  //     break;

  //   case '/about':
  //     component = <About/>
  //     break;

  //   case '/FAQs':
  //     component = <FAQs/>
  //     break;
  // }

  return (
    <div className='app-main'>
      {/* {component} */}
      <Routes>
        <Route path='/' element={<MainFrame/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/FAQs' element={<FAQs/>}/>
        <Route path='/product' element={<Products/>}/>
        {/* <Route path='/' element={<MainFrame/>}/> */}
      </Routes>

      <Footer/>
      <Nav/>
    </div>
  )
}

export default App