import { useSpring, animated } from "react-spring"
import React from "react"
import "../components/styles.css"

function Card() {
  const props = useSpring({
    to: [
      {
        transform: "translate3d(100px,0,0) scale(1) rotateX(0deg)",
        duration: 3000,

        width: "200px",
      },
    ],
    from: {
      transform: "translate3d(400px,0,0) scale(2) rotateX(90deg)",

      width: "500px",
    },
  })
  return (
    <animated.div class="card" style={props}>
      <img className="cloud" src="/Clouds.png"></img>
    </animated.div>
  )
}

export default Card
