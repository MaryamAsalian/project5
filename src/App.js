import LoginPage from "./components/LoginPage";
import{Switch , Route} from 'react-router-dom';
import AuthContextProvider  from "./context/AuthContextProvider";
import Chats from './components/Chats';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
     <Switch>
     
     <Route path="/" component={LoginPage} />
     <Route path="/Chats" compnent={Chats} /> 
      
     </Switch>
     </AuthContextProvider>
    </div>
  );
}

export default App;
