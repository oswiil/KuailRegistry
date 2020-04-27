import React from "react"
import { useSpring, animated } from "react-spring"

export default class IndexPage extends React.Component {
  state = {
    content: true,
    name: "",
    email: "",
    phone: "",
    message: "",
  }
  displayContent = e => {
    e.preventDefault()
    this.setState({ content: !this.state.content })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name} ${this.state.message}!`)
  }

  render() {
    return (
      <div>
        <a
          onClick={this.displayContent}
          style={{
            position: "absolute",
            right: "70px",
            marginTop: "30px",
            color: "inherit",
            cursor: "pointer",
            backgroundColor: "black",
          }}
        >
          Te asesoramos
        </a>
        {!this.state.content ? (
          <animated.div
            from={{ opacity: 0, marginTop: -1000 }}
            to={{ opacity: 1, marginTop: 0 }}
          >
            <div className="Contact__form">
              <form method="post" action="#">
                <label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <label>
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="example@mail.com"
                    required
                  />
                </label>
                <label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    cols="33"
                    placeholder="message"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="buttonsubmit"
                  onClick={!this.state.content}
                >
                  Submit
                </button>{" "}
              </form>
            </div>
          </animated.div>
        ) : null}
      </div>
    )
  }
}
