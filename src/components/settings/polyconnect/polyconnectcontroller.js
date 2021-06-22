import React from "react"
import PolyConnect from "./polyconnect"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false, page: 0, loading: false, polySketches: []}
  }

  onLogin = (message) => {
    const accessToken = message.accessToken
    const email = message.profileObj.email
    this.setState({ loggedIn: true, accessToken, email})
    this.getUserPolySketches()
  }

  onLogout = (message) => {
    this.setState({ loggedIn: false })
  }

  onError = (message) => {
    this.setState({ loggedIn: false })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false)
  }

  handleScroll = (e) => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if (bottom && !this.state.loading) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.getUserPolySketches()
      })
    }
  }

  getUserPolySketches = async () => {
    var url = "https://poly.googleapis.com/v1/users/me/assets?visibility=PUBLISHED&pageSize=20"
    if (this.state.nextPageToken)
    url += `&pageToken=${this.state.nextPageToken}`

    let sketches = []

    const result = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + this.state.accessToken,
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error || !json.userAssets) {
      this.setState({ error: json.error })
    } else {
      sketches = json.userAssets
      const content = this.state.polySketches
      for (const s of sketches) {
        let isUnique = true
        for (const c of content) {
          if (c.asset.name === s.asset.name) {
            isUnique = false
            break;
          }
        }
        if (isUnique) {
          content.push(s)
        }
      }
      this.setState({ polySketches: content, nextPageToken : json.nextPageToken})
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
