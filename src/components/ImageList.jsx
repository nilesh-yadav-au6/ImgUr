import React from 'react'

function ImageList({image}) {
    return (
                <div style={{width:"200px" ,height:"200px"}}>
                    <img src={image.imageUri} alt={image.title} style={{width:"200px" ,height:"200px"}}/>
                    <p style={{textAlign:"justify"}}>Title: {image.title}</p>
                    <p style={{textAlign:"justify"}}>Description: {image.description}</p>
                </div>
    )
}

export default ImageList
