import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SiderbarOption"
import { Twitter, Home, Search, NotificationsNone, MailOutline, 
  BookmarkBorder, ListAlt, PermIdentity, MoreHoriz } from '@material-ui/icons';
import { Button } from '@material-ui/core';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar_twitterIcon" />

       <SidebarOption active text="Home" Icon={ Home } />
       <SidebarOption text="Search" Icon={ Search } />
       <SidebarOption text="Notifications" Icon={ NotificationsNone } />
       <SidebarOption text="Mail" Icon={ MailOutline } />
       <SidebarOption text="Bookmark" Icon={ BookmarkBorder } />
       <SidebarOption text="List" Icon={ ListAlt } />
       <SidebarOption text="Identity" Icon={ PermIdentity } />
       <SidebarOption text="More" Icon={ MoreHoriz } />
       
       {/*  Button -> Tweeet */}
       <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
    </div>
  )
}
