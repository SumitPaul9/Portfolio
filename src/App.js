import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './containers/About';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Navbar>
              <Route exact path="/" component={About}/>
            <Footer/></Navbar>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
