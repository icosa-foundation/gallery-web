const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class AssetsAPI {
  static getAssetList = async (filter, number, page) => {
    const result = await fetch(api_root + "assets?results=" + number + "&page=" + page, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error || !json.assets) {
      return json
    } else {
      if (filter === "featured") {
        return json.assets.slice(0, 4)
      }
      return json.assets
    }
  }

  static getAsset = async (userurl, asseturl) => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    const result = await fetch(api_root + "assets/" + userurl + "/" + asseturl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        "Authorization": loggedInUser ? loggedInUser.token_type + " " + loggedInUser.token : ""
      }
    })
    const json = await result.json()
    return json
  }

  static updateAsset = async (assetid, user, name, url, description, visibility) => {
    const result = await fetch(api_root + "assets/" + assetid, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        url,
        description,
        visibility,
      }),
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    return json
  }

  static deleteAsset = async (assetid, user) => {
    const result = await fetch(api_root + "assets/" + assetid, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    return json
  }

  static uploadFile = async (filecontents, user) => {
    const formData = new FormData()
    formData.append("file", filecontents)
    const result = await fetch(api_root + "assets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
      },
      body: formData,
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

export default AssetsAPI
