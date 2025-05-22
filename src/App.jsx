import './App.css'
// Route
import { Routes, Route, } from 'react-router-dom'
// Pages
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import Posts from './pages/posts/Posts'
import Users from './pages/users/Users'
import SignIn from './pages/signin/SignIn'

// Layout 
import Layout from './pages/layout/Layout'
import NotFound from './components/notFound/NotFound'

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
