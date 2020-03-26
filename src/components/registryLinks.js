import React from "react"

import { useSpring, animated, config } from "react-spring"
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Random() {
  const reflinks = [
    "http://app.kuailiandp.com/auth/register/ref/d70d60e9-7704-46fa-a943-858ff5f63e72",

    "http://app.kuailiandp.com/auth/register/ref/a5a67f20-a8ea-4bbd-9032-e456deafb284",

    "http://app.kuailiandp.com/auth/register/ref/8effea01-dc72-497e-b89a-271c592db093",
  ]
  const Randomise = () => {
    const ranpath = reflinks[Math.floor(Math.random() * reflinks.length)]
    window.location.href = ranpath
    console.log(ranpath)
  }
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],

    config: {
      mass: 1,
      tension: 300,
      friction: 25,
    },
  }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <div className="registryButton">
        <ul>
          <button
            className="registry_button"
            onClick={() => Randomise()}
            style={{
              boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)",
              borderRadius: `10px`,
              color: "white",
              backgroundColor: "transparent",
              margin: "0 auto",
              width: "40%",
              height: "80px",
              display: "flex",
              marginBottom: "10%",
            }}
          >
            Registrarse
          </button>
        </ul>
      </div>
    </animated.div>
  )
}
export default Random
