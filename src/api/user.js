const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class UserAPI {
  static login = async (username, password) => {
    const result = await fetch(api_root + "login", {
      method: "POST",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username,
        password,
      }),
    })
    const json = await result.json()
    if (json.error) {
      this.setState({ error: json.error })
      return
    } else {
      return json
    }
  }

  static createNewUser = async (name, email, password) => {
    const result = await fetch(api_root + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        displayName: name,
        email,
        password,
      }),
    })
    const json = await result.json()
    if (json.error) {
      this.setState({ error: json.error })
      return
    } else {
      return json
    }
  }

  static getSelf = async (user) => {
    const result = await fetch(api_root + "users/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
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
    const result = await fetch(api_root + "users/me/assets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        Authorization: user.token_type + " " + user.token,
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

  static getUser = async (id) => {
    const result = await fetch(api_root + "users/" + id, {
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

  static getUserAssets = async (id) => {
    const result = await fetch(api_root + "users/" + id + "/assets", {
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
