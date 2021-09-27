
import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/styles.css';
import Layout from 'layouts/Layout';
import BorderCollie from 'pages/borderCollie';



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
