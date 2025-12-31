
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserList from './pages/UserDataList'
import StopWatch from './pages/Stopwatch'
import TodoList from './pages/TodoList'
import Image from './pages/Image'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/watch" element={<StopWatch />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </Router>
  )
}

export default App
