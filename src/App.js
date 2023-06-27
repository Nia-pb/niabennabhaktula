import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
