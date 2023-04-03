import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Demo from './pages/demo';
import Earth from './pages/earth';
import Room from './pages/machineroom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/room" component={Room} />
          <Route path="/earth" component={Earth} />

          {/* <Route path="/" component={PageLayout} /> */}
        </Switch>
    </BrowserRouter>
  );

}

export default App