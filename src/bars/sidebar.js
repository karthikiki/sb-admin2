import React from 'react'
import { Container, NavDropdown, Navbar} from 'react-bootstrap'
import {BsFillEmojiWinkFill,BsSpeedometer, BsTable} from "react-icons/bs"
import { FiSettings,  } from "react-icons/fi";
import { TiChartArea, TiFolder, TiSpanner } from "react-icons/ti";
import { BiTable } from "react-icons/bi";
import{ useHistory} from "react-router-dom"
import { Menu } from 'react-pro-sidebar';
import { MenuItem ,SubMenu,Icon} from 'react-pro-sidebar';
import { AiFillDashboard } from 'react-icons/ai';


export default function Sidebar(){
  const history = useHistory();
  return (
    
    <Navbar expand="lg">
        <Container>
            {/* <Navbar.Toggle aria-controls='basic-navbar-nav'/> */}
            <Navbar.Collapse id='basic-navbar-nav'>
            <Menu>  
            <div className='nav-box'>
              <i className='icon-nav'><BsFillEmojiWinkFill/></i>
              <a className="nav-name" onClick={()=>history.push("/")} >Sb Admin 2</a>
            </div>
            <hr/>
            <div className='nav-box'>
              <i className='icon-nav'><BsSpeedometer/></i>
               <a className='nav-name'  onClick={()=>history.push("/")}>Dashboard</a>
             </div>
             <hr/>
            <div >
                <span className='sub2'>INTERFACE</span>
                <SubMenu label={<span className='sub2'><FiSettings  className='icon-nav'/>  Components</span>}><i><b> Custom Components:</b></i>
                   <MenuItem onClick={()=>history.push("/buttons")}> Buttons</MenuItem>
                    <MenuItem onClick={()=>history.push("/cards")}>Cards</MenuItem>
                </SubMenu>
            </div> 
            <hr/>
            <div>
               <SubMenu label={<span className='sub2'><TiSpanner className='icon-nav'/> Utilities</span>}> <i><b>Custom Utilities</b></i>
                    <MenuItem onClick={()=>history.push("/colors")}> Colors</MenuItem>
                    <MenuItem onClick={()=>history.push("/borders")}>Borders</MenuItem>
                    <MenuItem onClick={()=>history.push("/animations")}> Animation</MenuItem>
                    <MenuItem onClick={()=>history.push("/Others")}>Others</MenuItem>  
                </SubMenu>
            </div>
            <hr/>
            <div>
               <span className='sub2'>ADDONS</span>
                <SubMenu label={<span className='sub2'><TiFolder className='icon-nav'/> Pages</span>}><i><b>Login Screens:</b></i>
                    <MenuItem onClick={()=>history.push("/forget_password")}> ForgetPassword</MenuItem>
                    <MenuItem onClick={()=>history.push("/blank")}>Blank</MenuItem>
                    <MenuItem onClick={()=>history.push("/**")}>404 Page</MenuItem>
                </SubMenu>
            </div>
           <div className='nav-box'>
            <i className='icon-nav'><TiChartArea/></i>
            <a className="nav-name" onClick={()=>history.push("/charts")}>Charts</a>
            </div> 
            <div className='nav-box'>
            <i className='icon-nav'><BiTable/></i>
            <a className="nav-name" onClick={()=>history.push("/tables")}>Tables</a>
            </div>
            </Menu>                
   <hr/>
         </Navbar.Collapse>  
        </Container>
     </Navbar> 
  
  )
}
