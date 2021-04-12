import './App.css';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import { Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Switch>
            {/* <Route path="/reportOutage" component={} />
            <Route path='/forgotPassword' component={} /> */}
            <Route path="/" component={LandingPage} />
          </Switch>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;

// Aleksandar Popovic
// • 2.1, 2.5.1, 2.5.4, 2.6.5.3, 2.6.6, 2.6.7
// Dejan Males
// • 2.2, 2.4, 2.5.2, 2.6.5.1, 2.6.4, 2.6.8
// Ilija Marinovic
// • 2.3, 2.5.3, 2.5.4, 2.6.1, 2.6.2, 2.6.3, 2.6.5.2, 2.6.9
