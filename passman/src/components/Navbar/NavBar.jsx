import React, { Component, useState } from 'react';
import {MenuItems} from './MenuItems'
import './NavBar.css'
import { Navbar, Container } from 'react-bootstrap'
import { Divide as Hamburger } from 'hamburger-react'


function NavBar(){

    // const [count, setCount] = useState(0);
    const [isOpen, setOpen] = useState(false);

    // console.log(React.version);
    console.log(isOpen);
    return (

            <Navbar className='NavBarItems'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Container>
                <Navbar.Brand href="#">Password Manager</Navbar.Brand>
                <div>
                {isOpen ?
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                     {MenuItems.map((item,index)=>{
                        return ( 
                        <li key={index} className='nav-item' role="presentation">
                            {/* <i className={item.cName}> &nbsp;
                            {item.title}
                            </i>  */}
                            <a className={item.cName} href={item.url}> &nbsp;
                            {item.title}
                            </a> 
                        </li>)
                    })}
                   
                </ul>
                : null}
                </div>

                </Container>
            </Navbar>
        
                );

}

export default NavBar;

// class NavBar extends Component {
//     state={ clicked: false }


//     render() { 
//         return (

//             <Navbar className='NavBarItems'>
//                 <Hamburger />
//                 <Container>
//                 <Navbar.Brand href="#">Navbar</Navbar.Brand>
//                 </Container>
//             </Navbar>

//         );
//     }
// }
 
// export default NavBar;




//******************************************************************************************************************** */
//     render() { 
//         return (
//             <nav className='NavBarItems'>
//                 <h1 className="navbar-logo">React</h1>
//                 <div className='menu-icon' onClick={this.handleClick()}>
//                     <i className={this.state.clicked ? 'fas':}></i>

//                 </div>
//                 <ul className="nav nav-tabs" id="myTab" role="tablist">
//                     {MenuItems.map((item,index)=>{
//                         return ( 
//                         <li key={index} className='nav-item' role="presentation">
//                             <a className={item.cName} href={item.url}>
//                             {item.title}
//                             </a> 
//                         </li>)
//                     })}
                   
//                 </ul>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;