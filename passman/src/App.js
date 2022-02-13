import './App.css';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

const theme = {
  colors: {
    body: "#fff",
  },
  mobile: "768px",
};

function App() {
  return (
    // <div className="App">
     
    // </div>
  <div><NavBar />
    <ThemeProvider theme={theme}>
      <div className="auth-wrapper">
        <div className="auth-inner">  
        <Router>
            <Routes>
                  <Route path="/" element={<Homepage />}></Route>
                  <Route path="/sign-in" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
              {/* <Route path="/getloc" component={GetLocation}></Route>
              <Route path="/mint" component={BasicMintpage}></Route>
              <Route path="/whitelist" component={BasicWhitelistPage}></Route> */}
            </Routes>
          </Router>
       </div>
      </div>
    </ThemeProvider>
  </div>
  );
}

export default App;
