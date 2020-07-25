import React , { Component} from 'react'
import NavBar from "../components/NavBar"
import ImageList from "../components/ImageList"
import Axios from 'axios'

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            imageData:[]
        }
    }
    

  async componentDidMount(){
        const data = await Axios(`https://imgurnilesh.herokuapp.com/public/image`)
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

export default Home
