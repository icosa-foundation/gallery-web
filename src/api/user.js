const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class UserAPI {
  static Login = async (username, password) => {
    const result = await fetch(api_root + "login", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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

  static CreateNewUser = async (name, email, password) => {
    const result = await fetch(api_root + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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

  static GetSelf = async () => {
    const result = await fetch(api_root + "users/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
  static GetSelfAssets = async () => {
    const result = await fetch(api_root + "users/me/assets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
  static GetUser = async (id) => {
    const result = await fetch(api_root + "users" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    const result = await fetch(api_root + "users/" + id + "/assets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
