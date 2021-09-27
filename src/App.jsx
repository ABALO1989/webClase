
import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import Layout from 'layouts/Layout';
import BorderCollie from 'pages/borderCollie';
import FrenchPoddle from 'pages/frenchPoddle';
import Contacto from 'pages/contacto';




function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path='/rhodesian'>
              <RhodesianInfoPage />
            </Route>
            <Route path='/borderCollie'>
              <BorderCollie />
            </Route>
            <Route path='/frenchPoddle'>
              <FrenchPoddle />
            </Route>
            <Route path='/contacto'>
              <Contacto />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>

  );
}



export default App;
