import { HashRouter, Routes, Route } from 'react-router-dom';
import { PokemonPage} from './PokemonPage'
import { HomePage } from './HomePage';


// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> Not Found
// /blog, /lalala -> Home

function App() {


  return (
    <>
      <HashRouter>
  


        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:slug" element={<PokemonPage/>} />
            
          <Route path="*" element={<p>Not found</p>} />
        </Routes>


      </HashRouter>
    </>
  );
}

export default App;
