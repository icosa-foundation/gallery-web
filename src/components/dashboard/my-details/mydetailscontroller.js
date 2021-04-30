import React from "react"
import MyDetails from "./mydetails"
import UserAPI from "../../../api/user"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}
class Controller extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MyDetails />
  }
}
export default connect(mapStateToProps)(Controller)
