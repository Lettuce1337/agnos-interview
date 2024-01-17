import './App.css';
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Finger from './components/Finger';
import Stomach from './components/Stomach';
import { partsContext } from './context/partsContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Stomach />}></Route>
      <Route path='Finger' element={<Finger />}></Route>
    </Route>
  )
  );
  
function App() {
  const parts = ['stomach','finger'];
    
  return (
    <partsContext.Provider value={ {parts} }>
      <RouterProvider router={router} />
    </partsContext.Provider>
  )
}

export default App
