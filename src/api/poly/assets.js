const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class PolyAssetsAPI {
  static getAssetList = async (number = 20, page = 0, curated = false) => {
    const result = await fetch(api_root + "poly/assets?results=" + number + "&page=" + page, {
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
      return json.results
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
    return await result.json()
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
    const json = await result.json();
    return json;
  }
}

export default PolyAssetsAPI
