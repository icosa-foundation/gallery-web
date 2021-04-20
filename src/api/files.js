const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class FilesAPI {
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

export default FilesAPI
