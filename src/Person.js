import React, { Component } from 'react'
import './Person.css';

export class Person extends Component {
    state = {
        person :{
            fullName : "Nahed ISSAOUI",
            bio :"I'm a software Engineer",
            imgSrc : "https://cdn.dribbble.com/users/1857592/screenshots/3848396/character-typing.gif",
            profession : "Software Developer",
        },
        show : false,
        mountingtime :false
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({ mountingtime : this.state.mountingtime + 1})} , 1000)}

    showProfile = () => {
        this.setState({show : !this.state.show });
        this.setState({mountingtime : 0})
    }
    
  render() {
     const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div>
        <button className="button-91" onClick={this.showProfile}>Show Profile</button>
        {this.state.show ?  (
         <div>
            <img src={imgSrc}  alt='Profile'/>
            <h1> {fullName}</h1>
            <p>{bio}</p>
            <p> Profession : {profession}</p>
            <p className='time'>Elapsed Time : {this.state.mountingtime}</p>
         </div>): null}
      </div>
    )
  }
}

export default Person

