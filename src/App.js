import './App.css';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import IncidentBrowser from './containers/IncidentBrowser/IncidentBrowser';
import NewIncident from './containers/IncidentBrowser/NewIncident/NewIncident';
import NewBasicInfo from './containers/IncidentBrowser/NewIncident/NewBasicInfo/NewBasicInfo';
import SafetyDocBrowser from './containers/SafetyDocBrowser/SafetyDocBrowser';
import NewSafetyDoc from './containers/SafetyDocBrowser/NewSafetyDoc/NewSafetyDoc';
import NewDevice from './containers/NewDevice/NewDevice';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Switch>
            {/* <Route path="/reportOutage" component={} />
            <Route path='/forgotPassword' component={} />  */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new-device" component={NewDevice} />
            <Route path="/incident-browser/new-incident" component={NewIncident} />
            <Route path="/incident-browser/new-incident/basic-info" component={NewBasicInfo} />
            <Route path="/safetyDocs-browser/new-safetyDoc" component={NewSafetyDoc} />
            <Route path="/safetyDocs-browser" component={SafetyDocBrowser} />
            <Route path="/incident-browser" component={IncidentBrowser} />


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
