import React from "react"
import PolyAssetsAPI from "../../../api/poly/assets"
import PolyConnect from "./polyconnect"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false }
  }

  onLogin = (message) => {
    const accessToken = message.accessToken
    const email = message.profileObj.email
    this.getUserPolySketches(accessToken)
    this.setState({ loggedIn: true, accessToken, email })
  }

  onLogout = (message) => {
    this.setState({ loggedIn: false })
  }

  onError = (message) => {
    this.setState({ loggedIn: false })
  }

  getUserPolySketches = async (accessToken) => {
    const url = "https://poly.googleapis.com/v1/users/me/assets"
    const result = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error || !json.userAssets) {
      this.setState({ error: json.error })
    } else {
      this.setState({ polySketches: json.userAssets })
    }
  }

  render() {
    return (
      <PolyConnect
        loggedIn={this.state.loggedIn}
        onLogin={this.onLogin}
        onLogout={this.onLogout}
        onError={this.onError}
        email={this.state.email}
        polySketches={this.state.polySketches}
        importPolySketch={this.importPolySketch}
      />
    )
  }
}
export default Controller
