import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import Cards from './components/cards/Cards';
import 'materialize-css'
import { useRoutes } from './routes/routes';


function App() {
   
  const routes = useRoutes(false)
    

  return (
    <BrowserRouter>
      <div className="container">
        {routes}
        <Cards />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
