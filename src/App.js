
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import LoginPage from './LoginPage/Login';
import RegisterPage from './LoginPage/Register';
import Recipes from './pages/Recipes';
import Navbar from './components/Navbar';
//import {ToastContainer} from "react-toastify"
import RecipeDetails from './components/RecipeDetails';
// import CartButton from "./CartButton";
import SavedPersonalRecipe from "./pages/SavedRecipes"
import CartButton from './pages/CartButton';
function App() {
  return (

    <>
    <div className="App">
        
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/recipes/:recipeId" element={<RecipeDetails/>}></Route>
        <Route path="/saved-recipes" element={<SavedPersonalRecipe/>} />
        {/* <Route path='/customer' element={<Customer/>}></Route> */}
      </Routes>
      
      </BrowserRouter>
      <CartButton/>
    </div>
    </>

  );
}

export default App;
