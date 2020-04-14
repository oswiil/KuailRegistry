import React, { Component } from "react"
import "../components/styles.css"
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
      mass: 10,
      tension: 120,
      friction: 50,
    },
  }))

  return (
    <div className="background-register">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        <ul>
          <button className="registryButton" onClick={() => Randomise()}>
            Regístrate Gratis
          </button>
        </ul>
      </animated.div>
    </div>
  )
}

export default Random
