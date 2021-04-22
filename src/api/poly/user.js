const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class UserAPI {
  static GetUser = async (id) => {
    const result = await fetch(api_root + "poly/users/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error) {
      this.setState({ error: json.error })
      return
    } else {
      return json
    }
  }
  static GetUserAssets = async (id) => {
    const result = await fetch(api_root + "poly/users/" + id + "/assets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error) {
      this.setState({ error: json.error })
      return
    } else {
      return json
    }
  }
}

export default UserAPI
