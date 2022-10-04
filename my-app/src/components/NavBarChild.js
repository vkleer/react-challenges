import React from "react";

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
        <button onClick={props.handleClick}>Login</button>
        :
        <form>
            <label htmlFor="username">Username:</label>
            <input id="username" placeholder="username"/>
        
            <label htmlFor="password">Password:</label>
            <input id="password" placeholder="password"/>
            <button onClick={props.handleClick}>Submit</button>
        </form>
    )
}

export default NavBarChild