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
    
        <Router>
            <Routes>
                  <Route path="/" element={<Homepage />}></Route>
                  <Route path="/sign-in" element={<Login />}> </Route>
                  <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </Router>
    </ThemeProvider>
  </div>
  );
}

export default App;
