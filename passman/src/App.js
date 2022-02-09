import './App.css';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import NavBar from './components/Navbar/NavBar';

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
            {/* <GlobalStyles> </GlobalStyles> */}
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              {/* <Route path="/getloc" component={GetLocation}></Route>
              <Route path="/mint" component={BasicMintpage}></Route>
              <Route path="/whitelist" component={BasicWhitelistPage}></Route> */}
            </Routes>
          </Router>
          </ThemeProvider>
          </div>
  );
}

export default App;
