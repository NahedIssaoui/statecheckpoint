import React, { Component } from 'react'

export class Person extends Component {
    state = {
        person :{
            fullName : "Nahed ISSAOUI",
            bio :"I'm a software developer",
            imgSrc : "https://i.pinimg.com/736x/b4/b4/4d/b4b44d3367a51b5f4cc9d35a6307b594--laptop-mac-computer-laptop.jpg",
            profession : "Software Engineer",
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
        <button onClick={this.showProfile}>Show Profile</button>
        {this.state.show ?  (
            <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc}  alt='Profile'/>
            <p>{profession}</p>
            <p>Time : {this.state.mountingtime}</p>
         </div>): null}
      </div>
    )
  }
}

export default Person