import React from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: "Hello",
            name: "guest",
            buttonText: "log in",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state: ", prevState);
            console.log("Previous props: ", prevProps);
            return {
                greeting: prevState.greeting === "Hello" ? "Welcome back" : "Hello",
                name: prevState.name === "guest" ? "user" : "guest",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            }
        })
    }

    render() {
        return (
            <div className= {css.NavBar} >
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.greeting}, {this.state.name}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
    
}

export default NavBarSimple;