const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class PolyAssetsAPI {
  static getAssetList = async (filter, number, page) => {
    const result = await fetch(api_root + "poly/assets?results=" + number + "&page=" + page, {
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

  static getAsset = async (id) => {
    const result = await fetch(api_root + "poly/assets/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    return json
  }

  static importAssets = async (id_list, user) => {
    const result = await fetch(api_root + "poly/import", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        "Authorization": user.token_type + " " + user.token
      },
      body: JSON.stringify(id_list)
    })
    const json = await result.json()
    return json
  }

  static getPreferredFormat = (asset) => {
    let types = {}

    for (const newformat of asset.formats) {
      types[newformat.formatType] = newformat
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

export default PolyAssetsAPI
