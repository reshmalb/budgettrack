import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './Layout/Header';
import MainPage from './Layout/MainPage';
import Dashboard from './Layout/Dashboard';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import Login from './pages/Login';


function App() {
  const isAuth=useSelector(state=>state.author.isAuthenticated)
  console.log("isauth",isAuth);
 
  return (
    <> 
    
 
          <Header/>       
          <main>
          {!isAuth&&<Route path='/'><MainPage/>   </Route>   }  
          {isAuth && <Route path='/dashboard' exact><Dashboard/></Route> }
       
          </main>

    </>
  
  );
}

export default App;
