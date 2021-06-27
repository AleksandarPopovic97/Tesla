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
import { ProtectedRoute } from './protected.route';
import { AdminRoute } from './admin.route';
import Register from './components/User/Register/Register';
import EditUser from './components/User/EditUser/EditUser';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Switch>
            {/* <Route path="/reportOutage" component={} />
            <Route path='/forgotPassword' component={} />  */}
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route path="/createAccount" component={Register} />
            <Route path="/editUser" component={EditUser} />
            <AdminRoute path="/new-device" component={NewDevice} />
            <ProtectedRoute path="/incident-browser/new-incident" component={NewIncident} />
            <ProtectedRoute path="/incident-browser/new-incident/basic-info" component={NewBasicInfo} />
            <ProtectedRoute path="/safetyDocs-browser/new-safetyDoc" component={NewSafetyDoc} />
            <ProtectedRoute path="/safetyDocs-browser" component={SafetyDocBrowser} />
            <ProtectedRoute path="/incident-browser" component={IncidentBrowser} />
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
