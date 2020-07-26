import React  , {Component} from 'react'
import Navbar from "../components/NavBar"
import { connect } from "react-redux"
import axios from "axios"
import style  from "../styles/Signup.module.css"
import { Redirect  } from "react-router-dom"

  
class NavBar extends Component { 
   
    state = { 
  
      selectedFile: null,
      privacyStatus:"",
      title:"",
      description:""
    }; 
    
    onFileChange = event => { 
    
      this.setState({selectedFile: event.target.files[0]}); 
     
    }; 
    handleChange =  (event) => {
        this.setState({ [event.target.name]: event.target.value }); 
    }
     
    handleSubmit = async (event) => { 
     
      event.preventDefault()
  
      const formData = new FormData(); 

      formData.append( 
        "image", 
        this.state.selectedFile,
      ); 
      formData.append( 
        "title", 
        this.state.title
      );
      formData.append( 
        "description", 
        this.state.description
      );
      formData.append( 
        "privacyStatus", 
        this.state.privacyStatus
      );
     
        const b = localStorage.getItem("token")
        await axios.post("https://imgurnilesh.herokuapp.com/add/image", formData , {
        headers: {
          'Authorization': b
        }
      }); 

        this.props.history.push("/")
    }; 
     
    render() { 
     
      return (
        <div>
          <Navbar />
          {this.props.propsUser.accessToken === localStorage.getItem("token") ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
         <form onSubmit={this.handleSubmit} method="POST" className={style.mainDiv} >
            <label>Title</label>
            <input className={style.inDiv} type="text" name="title" placeholder="Enter Title" onChange={this.handleChange} value={this.state.title} />
            <label>Description</label>
            <input className={style.inDiv}
              type="text"
              name="description"
              placeholder="Enter Description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <label>Public or Private</label>
            <label>
              <select className={style.inDiv} value={this.state.privacyStatus} onChange={this.handleChange} name="privacyStatus" >
                <option value="select">select</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </label>
            <label>Upload Image</label>
            <input className={style.inDiv} type="file" id="image" accept="image/png, image/jpeg"  name="selectedFile" onChange={this.onFileChange} />
            <input className={style.btDiv} type="submit" value="Submit"/>
          </form>
        </div>
      ); 
    } 
  } 
  

const mapStateProp = (state) => {
    return {
        propsUser : state.user.user
    }
}


export default connect(mapStateProp)(NavBar)
