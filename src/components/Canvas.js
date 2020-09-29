
import React, { useRef, useEffect, useState} from 'react'
import styled from "styled-components"

const CanvasStyled = styled.div`

canvas{
    vertical-align: bottom;
    }
`


const Canvas = props => {
    
    const [aimX,setAimX] = useState(0)
    const [aimY,setAimY] = useState(0)
  
  const canvasRef = useRef(null)

  const image = document.createElement("img")
  image.src = "https://res.cloudinary.com/dieglitter/image/upload/v1601251294/radio-shows/RT-1_ripjfp.jpg"
  
  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2

    canvas.style.width = window.innerWidth + "px"
    canvas.style.height = window.innerHeight + "px"

    const context = canvas.getContext("2d")
    context.scale(2,2)

    //Our first draw
    //context.fillStyle = '#BADA55'
    //context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  window.addEventListener("mousemove", event => {

    setAimX(event.pageX)
    setAimY(event.pageY)
})


//   useEffect(()=>{
//     const canvas = canvasRef.current  
//     const context = canvas.getContext("2d")

//     image.onload = function(){
//         context.drawImage(image, aimX, aimY, 250, 250)
//     }

//   },[aimX,aimY])
  
  return (
      <CanvasStyled>
          <canvas ref={canvasRef} {...props}/>
      </CanvasStyled>
  )
}

export default Canvas