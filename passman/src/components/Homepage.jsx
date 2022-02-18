import React,{Component} from "react";
import './Homepage.css'
import Login from "./Login/Login";

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
        <div>
            <h1 className="boxHomePage">HomePage</h1>
            <div className="boxLogin">
                <Login />
            </div>
        </div>

        );
    }
}
 

export default Homepage;