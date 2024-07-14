import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header'
import Todo from './components/Todo'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App