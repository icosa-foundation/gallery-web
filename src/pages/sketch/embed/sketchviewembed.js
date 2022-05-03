import React from "react"
import { withRouter } from "react-router"
import SketchInfo from "../../../components/sketch/sketch-info"
import SketchViewer from "../../../components/sketch/sketch-viewer"
import "./sketchviewembed.scss"
import Loader from "../../../components/ui/loader"
import AssetsAPI from "../../../api/assets"

class SketchViewEmbed extends React.Component {
  constructor(props) {
    const { id, userid } = props.match.params
    super(props)
    const params = this.parseQuery(props.location.search)
    this.state = { loading: true, id, userid, params }
    this.getAsset()
  }

  parseQuery = (queryString) => {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    if (Number(query[decodeURIComponent(pair[0])])) {
      query[decodeURIComponent(pair[0])] = Number(query[decodeURIComponent(pair[0])])
    }
    if (query[decodeURIComponent(pair[0])] == "true") {
      query[decodeURIComponent(pair[0])] = true
    }
    if (query[decodeURIComponent(pair[0])] == "false") {
      query[decodeURIComponent(pair[0])] = false
    }
  }
  return query;
}

  getAsset = async () => {
    const asset = await AssetsAPI.getAsset(this.state.userid, this.state.id)
    this.setState({ asset: asset, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <div className="sketchviewer-embedded" style={{width: "100%", height: "100%"}}>
        <SketchViewer asset={this.state.asset} embedded={true}/>
        {this.state.params.footer === true ? 
          <div className="embedded-footer">
            <SketchInfo id={this.state.id} userid={this.state.userid} />
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default withRouter(SketchViewEmbed)
