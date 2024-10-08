import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/ManiNavBar';
// import Navbar from './doctor/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h2 style={{textAlign:"center"}}> Online Medical System For Virtual Consultations</h2> */}
        <Router>
            <MainNavBar/>
            {/* <Navbar/> */}

        </Router>

    </div>
  );
}

export default App;
