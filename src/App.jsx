import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css'
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='root-container'>
      <Header />
      <main>
        <div className='main-container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App