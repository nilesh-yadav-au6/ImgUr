import React, { Component } from 'react'
import { connect } from "react-redux"
import { userCreate } from "../redux/action/userAction"
import NavBar from "../components/NavBar"
import style  from "../styles/Signup.module.css"

class SignUp extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            name:"",
            password:""
        }
    }
    

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { 
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        this.props.userCreate(newUser)
        this.props.history.push("/login")
    }

    render() {
        return (
            <div>
                <NavBar user={0}/>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit} className={style.mainDiv} >
                    <input className={style.inDiv} type="text" name="name" value={this.state.name} placeholder="   Enter Name" onChange={this.handleChange}  />
                    <input className={style.inDiv} type="email" name="email" value={this.state.email} placeholder="   Enter Email" onChange={this.handleChange} />
                    <input className={style.inDiv} type="password" name="password" value={this.state.password} placeholder="   Enter Password" onChange={this.handleChange} />
                    <input className={style.btDiv} type="submit" value="Sing Up"/>
                </form>
            </div>
        )
    }
}

// const matDispatchProp = (dispatch) => {
//     return {
//         propCreateUser : () => dispatch(userCreate(user))
//     }
// }



export default connect(null,{ userCreate })(SignUp)
