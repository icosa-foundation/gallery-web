import React from "react"
import { Link, withRouter } from "react-router-dom"
import "./style.scss"

const Device = (props) => {
  if (props.isLoggedIn) {
    const { deviceCode } = props.deviceCode || 'Loading...';
    return (
      <div className="text-center">
        <p className="device-code">{deviceCode ? deviceCode.toUpperCase() : ''}</p>
        <p>Enter this code into Open Brush. This will log you in to your Icosa account.</p>
        <p><em>Only do this if you've downloaded your copy of Open Brush from a reputable source</em></p>
      </div>
    )
  } else {
    const devicePath = '/device';
    const fullUrl = `${window.location.origin}${devicePath}`;
    return (
        <div>
          <p className="text-center">You must <Link to="/login">login</Link> to get a device code</p>
          <p className="text-center">Or if it's easier visit <strong>{fullUrl}</strong> on another device.</p>
        </div>
    )
  }
}

export default Device
