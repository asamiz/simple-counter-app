import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import routes from './routes';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        {routes.map((entry) => {return (<Route {...entry}/>)})}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
