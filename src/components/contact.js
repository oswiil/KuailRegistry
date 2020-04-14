import React from "react"

export default class IndexPage extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
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

  constructor() {
    super()
    this.state = {
      showMe: false,
    }
  }
  operation() {
    this.setState({
      showMe: true,
    })
  }
  render() {
    return (
      <div>
        <a
          onClick={() => this.operation()}
          style={{
            position: "absolute",
            right: "70px",
            marginTop: "30px",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Te asesoramos
        </a>
        {this.state.showMe ? (
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
                onClick={!this.setState.showMe}
              >
                Submit
              </button>{" "}
            </form>
          </div>
        ) : null}
      </div>
    )
  }
}
