import React from "react"
import { Link } from "react-router-dom"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from "react-pro-sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faHome, faTh, faUser, faHeart, faCube, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import "react-pro-sidebar/dist/scss/styles.scss"
import "./sidenav.scss"
import obLogo from "./oblogo.jpg"
import { useLocation } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    user: state.user.value,
  }
}

const Showable = (props) => {
  if (props.collapsed || !props.children) {
    return null
  } else {
    return props.children
  }
}

const PageLink = (props) => {
  const { to, icon } = props
  const location = useLocation()
  return (
    <MenuItem active={location.pathname === to} icon={<FontAwesomeIcon icon={icon} />}>
      {props.children}
      <Link to={to} />
    </MenuItem>
  )
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
          <div className="text-center title">
            <h2>ICOSA GALLERY</h2>
          </div>
        </Showable>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <PageLink to="/" icon={faHome}>
            Home
          </PageLink>
          <PageLink to="/dashboard" icon={faTh}>
            Dashboard
          </PageLink>
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>ME</h3>
          </Showable>
          <PageLink to="/" icon={faUser}>
            My Profile
          </PageLink>
          <PageLink to="/" icon={faHeart}>
            My Likes
          </PageLink>
          <Showable {...props}>
            <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
              Log Out
              <Link to="/" />
            </MenuItem>
          </Showable>
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>SEARCH</h3>
            <MenuItem>
              <input type="text" className="searchbar" />
            </MenuItem>
          </Showable>
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>EXPLORE</h3>
          </Showable>
          <PageLink to="/" icon={faCube}>
            Google Poly Legacy
          </PageLink>
          <PageLink to="/" icon={faBars}>
            Animals
          </PageLink>
          <PageLink to="/" icon={faBars}>
            History
          </PageLink>
          <PageLink to="/" icon={faBars}>
            Science
          </PageLink>
          <PageLink to="/" icon={faBars}>
            Technology
          </PageLink>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Showable {...props}>
          <div className="socials text-center">
            <h5>Join our Community!</h5>
            <a href="http://twitter.com/icosa-gallery" alt="twitter" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://discord.gg/fS69VdFXpk" alt="discord" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://github.com/icosa-gallery/" alt="github" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="support text-center">
            <a href="https://openbrush.org" rel="noreferrer" target="_blank" alt="OpenBrush">
              <img src={obLogo} alt="OpenBrush Logo" />
            </a>
          </div>
        </Showable>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default connect(mapStateToProps)(SideNav)
