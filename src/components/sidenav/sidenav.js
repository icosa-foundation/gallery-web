import React from "react"
import { Link } from "react-router-dom"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter, SubMenu } from "react-pro-sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faHome, faTh, faUser, faHeart, faCube } from "@fortawesome/free-solid-svg-icons"
import "react-pro-sidebar/dist/scss/styles.scss"
import "./sidenav.scss"
import obLogo from "./oblogo.jpg"

const Showable = (props) => {
  if (props.collapsed || !props.children) {
    return null
  } else {
    return props.children
  }
}

const SideNav = (props) => {
  const { collapsed, toggleNav } = props
  return (
    <ProSidebar collapsed={collapsed} className="sidenav">
      <SidebarHeader>
        <div className="toggler">
          <FontAwesomeIcon className="toggleicon" icon={collapsed ? faBars : faTimes} onClick={toggleNav} />
        </div>
        <Showable {...props}>
          <div className="text-center">
            <h2>Icosa Gallery</h2>{" "}
          </div>
        </Showable>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
            Home
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faTh} />}>
            Dashboard
            <Link to="/" />
          </MenuItem>
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>Me</h3>
          </Showable>
          <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
            My Profile
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faHeart} />}>
            My Likes
            <Link to="/" />
          </MenuItem>
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>Explore</h3>
          </Showable>
          <MenuItem icon={<FontAwesomeIcon icon={faCube} />}>
            Poly Legacy
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faBars} />}>
            Animals
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faBars} />}>
            History
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faBars} />}>
            Science
            <Link to="/" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Showable {...props}>
          <div className="text-center">
            <a href="https://openbrush.org" rel="noreferrer" target="_blank" alt="OpenBrush">
              <img src={obLogo} />
            </a>
            <a href="https://github.com/icosa-gallery/" rel="noreferrer" target="_blank">
              Support us on Github!
            </a>
          </div>
        </Showable>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default SideNav
