import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navigation from './components/Home/Navigation/Navigation';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/home" element={<Main></Main>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
