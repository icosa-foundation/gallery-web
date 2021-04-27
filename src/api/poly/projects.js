const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class PolyProjectsAPI {
  static getProjectList = async (filter, number, page) => {
    const result = await fetch(api_root + "poly/assets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error || !json.assets) {
      return json
      return
    } else {
      if (filter === "featured") {
        return json.assets.slice(0, 4)
      }
      return json.assets
    }
  }

  static getProject = async (id) => {
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
}

export default PolyProjectsAPI
