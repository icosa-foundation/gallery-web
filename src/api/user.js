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
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static createNewUser = async (username, displayname, email, password) => {
    const result = await fetch(api_root + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        displayName: displayname,
        url: username ?? null,
        email,
        password,
      }),
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static getDeviceCode = async (user) => {
    const result = await fetch(api_root + "users/me/devicecode", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
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
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static updateUser = async (user, url, displayName, description) => {
    const result = await fetch(api_root + "users/me", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        "url" : url,
        "displayname" : displayName,
        "description" : description,
      }),
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static updatePassword = async (user, oldPassword, newPassword) => {
    const result = await fetch(api_root + "users/me/password", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static passwordResetRequest = async (email) => {
    const result = await fetch(api_root + "users/password/reset", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        "email": email,
      }),
    })
    const response = await result
    if (response.status !== 202) {
      this.setState({ error: response.json().error })
      return response.json()
    } else {
      return false
    }
  }

  static passwordResetToken = async (token, newPassword) => {
    const result = await fetch(api_root + "users/password", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        token,
        newPassword,
      }),
    })
    const response = await result
    if (response.status !== 200) {
      this.setState({ error: response.json().error })
      return response.json()
    } else {
      return false
    }
  }

  static updateEmail = async (user, newEmail, currentPassword) => {
    const result = await fetch(api_root + "users/me/email", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        newEmail,
        currentPassword,
      }),
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static getSelfAssets = async (user) => {
    const result = await fetch(api_root + "users/me/assets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        Authorization: user.token_type + " " + user.token,
      },
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
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
    if (!result.ok) {
      throw result.statusText
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
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }
}

export default UserAPI
