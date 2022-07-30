
import Certificates from './Components/Certificates';
// import Header from './Components/Header';
// import Intro from './Components/Intro';
// import Skills from './Components/Skills';
// import Footer from './Components/Footer';
import Home from './Components/Home';
// import './App.css'
import Projects from './Components/Projects';
import {Route,Routes} from 'react-router-dom';
import Experience from './Components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="certificates" element={<Certificates />} />
      <Route path="experience" element={<Experience />} />
    </Routes>
    </div>

  );
}

export default App;
