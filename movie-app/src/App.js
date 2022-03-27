
import { AnimatePresence } from "framer-motion";
import { Route,Routes } from "react-router-dom";



import './index.css'
import Homepage from "./pages/HomePage";
import Moviepage from "./pages/MoviePage";
import Tvpage from "./pages/TVpage";

function App() {


  return (

    <div className="App">
      <AnimatePresence>
<Routes>
  
    <Route path="/" element={<Homepage/>}/>
    <Route path='/movie/:movieId' element={<Moviepage/>}/>
    <Route path='TV/:TVId' element={<Tvpage/>}/>
</Routes>
</AnimatePresence>
</div>



  );
}

export default App;
