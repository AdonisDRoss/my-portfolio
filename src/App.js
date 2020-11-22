
import './App.css';
import logo from './img/myhead.jpg';
import React, { Component } from "react";
import Card from './Card';
import data from './data';
import cloud1 from './img/cloud1.png';
import cloud2 from './img/cloud2.png';
import cloud3 from './img/cloud3.png';
import cloud4 from './img/cloud4.png';
import cloud5 from './img/cloud5.png';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faHtml5, faCss3Alt, faJs, faTwitter, faLinkedinIn,  faSoundcloud,  faInstagram, faReact } from '@fortawesome/free-brands-svg-icons';


class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      properties: data.properties,
      property: data.properties[0]
    }
  }
  
  nextProperty = () => {const newIndex = this.state.property.index+1;
      this.setState({
          property: data.properties[newIndex]
      })
  }
  prevProperty = () =>{const newIndex = this.state.property.index-1;
      this.setState({
          property: data.properties[newIndex]
  })
}
render() {
  const { property} = this.state;
  return (
    
<div className="App">
  
  <nav className="nav">
    <span className= "title"> 
      <Typing>
        <span>Adonis D. Ross: Web Developement
        </span>
      </Typing>
    </span>
    <div className="wrap"><img  className="logo"  src={logo} alt="mylogo" /></div>
    <div className="logo-wrap">
      <FontAwesomeIcon className="git" icon={faGithub} color="white"  link= "https://github.com/AdonisDRoss"/>
      <FontAwesomeIcon className="twitter" icon={faTwitter} color="blue" />
      <FontAwesomeIcon className="linkedin" icon={faLinkedinIn} color="green"/>
      <FontAwesomeIcon className="soundcloud" icon={faSoundcloud} color="darkred" />
      <FontAwesomeIcon className="gram" icon={faInstagram} color="black" />
    </div>
  </nav>
     <i></i>
     <script type="javascript" src="./clouds.js"></script>
      <span className="clouds">
       <img className='cloud1' src={cloud1} alt='cloud1'/>
       <img className='cloud2' src={cloud2} alt='cloud2'/>
       <img className='cloud3' src={cloud3} alt='cloud3'/>
       <img className='cloud4' src={cloud4} alt='cloud4'/>
       <img className='cloud5' src={cloud5} alt='cloud5'/>
      </span>
    <div className="icons">
    </div>
 
  <div className="buttons">
    <button  className="prev"
    onClick={()=> this.prevProperty()}
    disabled={property.index === 0}>PREV</button>
    
   <button className="next" onClick={() => this.nextProperty()}
    disabled={property.index ===
    data.properties.length-1}>NEXT</button>
  </div>
  <Card property={property} />  
      <FontAwesomeIcon icon={faHtml5} color="red" className="html"/><br></br>
      <FontAwesomeIcon icon={faCss3Alt} color="lightblue" className="css"/><br></br>
      <FontAwesomeIcon icon={faJs} color="yellow" className="js"/><br></br>
      <FontAwesomeIcon icon={faReact} color="blue" className="react"/><br></br>
  <footer className="footer">this is the footer    
  </footer>
</div>
    ); 
}}
export default App;

  