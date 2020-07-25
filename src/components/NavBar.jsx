import React  , {Component} from 'react'
import style from "../styles/Navbar.module.css"
import { Link  } from "react-router-dom"
import { connect } from "react-redux"
import  { logoutUser } from "../redux/action/userAction"
import  {  withRouter } from "react-router-dom"


class NavBar extends Component {

    logout = () => {
        this.props.logoutUser(localStorage.getItem("token"))
        this.props.history.push("/")
    }

    render(){

        return (
            <div className={style.navBar}>
                { this.props.propsUser.accessToken === localStorage.getItem("token") ? <div className={style.mainHeader}>
                <Link><b>Welcome</b> {this.props.propsUser.loggedUser.name}</Link>
                <Link to="/">Public Post</Link> 
                <Link to="/private">Private Post</Link>
                <Link to="/dashboard">Upload</Link>
                <button onClick={this.logout}>Logout</button></div>
                :
                <div className={style.mainHeader}>
                <Link to="/"><div>ImgUr</div></Link>
                <Link to="/login">Sign In</Link>
                <Link to="/register">Sign Up</Link>
                </div>}
            </div>
        )
    }
}

const mapStateProp = (state) => {
    return {
        propsUser : state.user.user
    }
}


export default withRouter(connect(mapStateProp , {logoutUser})(NavBar))
