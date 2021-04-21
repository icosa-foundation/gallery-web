import React from "react"
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from "react-pro-sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faCoffee } from "@fortawesome/free-solid-svg-icons"
import "react-pro-sidebar/dist/scss/styles.scss"
import "./sidenav.scss"

const SideNav = (props) => {
  const { collapsed, toggleNav } = props
  return (
    <ProSidebar collapsed={collapsed} className="sidenav">
      <SidebarHeader>
        <div className="toggler">
          <FontAwesomeIcon className="toggleicon" icon={collapsed ? faBars : faTimes} onClick={toggleNav} />
        </div>
        {!collapsed ? (
          <div className="text-center">
            <h2>Icosa Gallery</h2>{" "}
          </div>
        ) : (
          ""
        )}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faCoffee} />}>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        {!collapsed ? (
          <div className="text-center">
            <a href="https://github.com/icosa-gallery/" target="_blank">
              Support us on Github!
            </a>
          </div>
        ) : (
          ""
        )}
      </SidebarFooter>
    </ProSidebar>
  )
}

export default SideNav
