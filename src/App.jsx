import './App.css';
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Finger from './component/Finger';
import Stomach from './component/Stomach';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Stomach />}></Route>
      <Route path='Finger' element={<Finger />}></Route>
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
