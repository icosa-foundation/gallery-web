const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class UserAPI {
  static getUserInfo = async () => {
    const placeholder = {
      username: "User",
    }
    return placeholder
  }
}

export default UserAPI
