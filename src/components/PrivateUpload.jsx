import React , { Component} from 'react'
import NavBar from "../components/NavBar"
import ImageList from "../components/ImageList"
import axios from 'axios'

class PrivateUpload extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            imageData:[]
        }
    }
    

  async componentDidMount(){
    const data = await axios("https://imgurnilesh.herokuapp.com/private/image", {
        headers: {
          'Authorization': localStorage.getItem("token")
        }
    })
    this.setState({...this.state , imageData:data.data.arr})
   }

   render() {
    
    return (
        <div>
            <NavBar />
            <div  style={{display:"flex" , flexDirection:"row" ,flexWrap:"wrap" ,marginTop:"3rem" , justifyContent:"space-around"}}>
            {
               this.state.imageData.map( image => <ImageList key={image.id} image={image} />)
            }
            </div>
        </div>
    )
   }
}

export default PrivateUpload
