import logo from './logo.svg';
import './App.css';
import ItemList from "./components/ItemsList/ItemList";
import Navbar from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Jobs from './components/Jobs/Jobs'
import CourseDetails from './components/CourseDetails/CourseDetails'

function App() {
  return (
    <div className="App">
      
          <Navbar />
          <Routes >
              <Route exact path='/home' element={<ItemList/>} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/courses' element={<ItemList/>} />
              <Route exact path='/jobs' element={<Jobs/>} />
              <Route exact path='/courses/:id' element={<CourseDetails />} />
              <Route exact path='/blog' element={<Blog />} />
              <Route path="/" element={<Navigate to="/home" />} />
          

          </Routes>
          
    </div>
  );
}

export default App;
