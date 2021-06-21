import React from "react"
import { Link } from "react-router-dom"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from "react-pro-sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "react-pro-sidebar/dist/scss/styles.scss"
import "./sidenav.scss"
import obLogo from "./oblogo.png"
import { useLocation } from "react-router-dom"

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
    <MenuItem className={props.className} active={location.pathname === to} icon={<FontAwesomeIcon icon={icon} />}>
      {props.children}
      <Link to={to} />
    </MenuItem>
  )
}

const LoggedInMenuItems = (props) => {
  const userRoot = "/user/" + props.userUrl
  return (
    <div>
      <PageLink to={userRoot} icon="user">
        My Profile
      </PageLink>
      <PageLink to={userRoot + "/likes"} icon="heart">
        My Likes
      </PageLink>
      <Showable {...props}>
        <MenuItem icon={<FontAwesomeIcon icon="sign-out-alt" />} onClick={props.logout}>
          Log Out
        </MenuItem>
      </Showable>
    </div>
  )
}

const LoggedOutMenuItems = (props) => {
  return (
    <div>
      <Showable {...props}>
        <PageLink to="/login" icon="sign-in-alt">
          Log In
        </PageLink>
      </Showable>
    </div>
  )
}

const SideNav = (props) => {
  const { collapsed, toggleNav, isLoggedIn, categories } = props
  return (
    <ProSidebar collapsed={collapsed} className="sidenav">
      <SidebarHeader>
        <div className="toggler">
          <FontAwesomeIcon className="toggleicon" icon={collapsed ? "bars" : "times"} onClick={toggleNav} />
        </div>
        <Showable {...props}>
          <div className="text-center title">
            <h2>ICOSA GALLERY</h2>
            <OverlayTrigger
              placement="auto"
              overlay={
                <Tooltip>Icosa is currently in Beta, please be aware not all features may be implemented</Tooltip>
              }
            >
              <span className="beta">BETA</span>
            </OverlayTrigger>
            <div>
              <Link to="https://opencollective.com/icosa">
                <h4>Support us!</h4>
              </Link>
            </div>
          </div>
        </Showable>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <PageLink to="/" icon="home">
            Home
          </PageLink>
          {isLoggedIn ? (
            <PageLink to="/dashboard" icon="th">
              Dashboard
            </PageLink>
          ) : (
            ""
          )}
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>ME</h3>
          </Showable>
          {isLoggedIn ? <LoggedInMenuItems {...props} /> : <LoggedOutMenuItems />}
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>SEARCH</h3>
            <span className="comingsoon">[Coming Soon]</span>
            <MenuItem>
              <input type="text" className="searchbar" disabled={true} />
            </MenuItem>
          </Showable>
        </Menu>
        <Menu iconShape="square">
          <Showable {...props}>
            <h3>EXPLORE</h3>
          </Showable>
          <PageLink to="/poly" icon="cube" className="poly-link">
            Google Poly Legacy
          </PageLink>
          <Showable {...props}>
            <span className="comingsoon">[Coming Soon]</span>
          </Showable>
          {categories &&
            categories.map((category, key) => {
              return (
                <div className="disabled" key={key}>
                  <PageLink key={key} to={"/category" + category.url} icon={category.icon}>
                    {category.name}
                  </PageLink>
                </div>
              )
            })}
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Showable {...props}>
          <div className="socials text-center">
            <h5>Join our Community!</h5>
            <a href="http://twitter.com/icosa-gallery" alt="twitter" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="https://discord.gg/fS69VdFXpk" alt="discord" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "discord"]} />
            </a>
            <a href="https://github.com/icosa-gallery/" alt="github" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
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

export default SideNav
