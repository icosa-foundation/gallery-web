const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class AssetsAPI {
  static getAssetList = async (number = 20, page = 0, curated = false) => {
    const result = await fetch(api_root + "assets?results=" + number + "&page=" + page + "&curated=" + curated, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if(!result.ok) {
      throw result.statusText
    } else {
      return json
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

  static getAssetId = async (assetid) => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    const result = await fetch(api_root + "assets/id/" + assetid, {
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

  static uploadFile = async (files, user) => {
    const formData = new FormData()
    files.forEach(element => {
      formData.append("files", element)
    })
    const result = await fetch(api_root + "assets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: user.token_type + " " + user.token,
      },
      body: formData,
    })
    const json = await result.json()
    if (!result.ok) {
      throw result.statusText
    } else {
      return json
    }
  }

  static getPreferredFormat = (asset) => {
    let types = {}

    for (const newformat of asset.formats) {
      types[newformat.format] = newformat
    }

    if(types.hasOwnProperty("GLTF2")) {
      return types["GLTF2"]
    }

    if(types.hasOwnProperty("GLTF")) {
      return types["GLTF"]
    }

    if(types.hasOwnProperty("TILT")) {
      return types["TILT"]
    }

    return null
  }
}

export default AssetsAPI
