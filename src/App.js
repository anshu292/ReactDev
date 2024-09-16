import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const routerConfig= createBrowserRouter([
    
    {"path":"/home", element:<Home/>},
    {"path":"/about", element:<About/>},
    {"path":"/contact", element:<Contact/>}

])

function App() {
  return (
    <div>
     <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;
