import './App.css'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'

function App() {


  return (
    <div>
      <div className='scroll-smooth'>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      </div>
      
    </div>
  )
}

export default App
