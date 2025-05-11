import { Route, Routes } from 'react-router-dom'

import NavBar from './components/Nav/NavBar'
import Landing from './pages/Landing/Landing'
import Advice from './pages/Advice/Advice'
import Trivia from './pages/Trivia/Trivia'
import Jokes from './pages/Jokes/Jokes'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/advice' element={<Advice />} />
          <Route path='/trivia' element={<Trivia />} />
          <Route path='/jokes' element={<Jokes />} />
        </Routes>
      </main>
    </>
  )
}

export default App
