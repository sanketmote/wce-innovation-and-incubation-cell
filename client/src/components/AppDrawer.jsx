import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../utils';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function AppDrawer({ drawerWidth, open, DrawerHeader, handleDrawerClose, theme }) {

  const navigate = useNavigate();

  if (isLoggedIn()) {
    return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> */}
        </DrawerHeader>
        <Divider />

        <List>
        <ListItem disablePadding>
            <ListItemButton onClick={() => {
              navigate("/admin")
            }}>
              <ListItemIcon>
                {/* <LogoutIcon /> */}
              </ListItemIcon>
              <ListItemText primary={"Admin"} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton onClick={() => {
              logoutUser();
              navigate("/")
            }}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
          
        </List>
        <Divider />
      </Drawer>
    )
  }

  return (
    <></>
    // <Drawer
    //   sx={{
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     '& .MuiDrawer-paper': {
    //       width: drawerWidth,
    //       boxSizing: 'border-box',
    //     },
    //   }}
    //   variant="persistent"
    //   anchor="left"
    //   open={open}
    // >
    //   <DrawerHeader>
    //     {/* <IconButton onClick={handleDrawerClose}>
    //               {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    //             </IconButton> */}
    //   </DrawerHeader>
    //   <Divider />
    //   <List>
    //     <ListItem disablePadding>
    //       <ListItemButton onClick={() => {
    //         navigate("/login")
    //       }}>
    //         <ListItemIcon>
    //           <LoginIcon />
    //         </ListItemIcon>
    //         <ListItemText primary={"Login"} />
    //       </ListItemButton>
    //     </ListItem>
    //     <ListItem disablePadding>
    //       <ListItemButton onClick={() => {
    //         navigate("/register")
    //       }}>
    //         <ListItemIcon>
    //           <ExitToAppIcon />
    //         </ListItemIcon>
    //         <ListItemText primary={"Sign Up"} />
    //       </ListItemButton>
    //     </ListItem>
    //   </List>
    //   <Divider />
    // </Drawer>
  )


}



export function LoginHelper({ drawerWidth, open, DrawerHeader, handleDrawerClose, theme }) {

  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser'))
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedInUser === "{}") {
      navigate('/login');
    }
    setLoggedInUser(JSON.parse(loggedInUser));
  }, []);


  if (isLoggedIn()) {
    return (
      <>Hi, {loggedInUser['name']==""?localStorage.getItem('loggedInUser')['name']:loggedInUser['name']}</>
    )
  }

  return (
    <>
      <a onClick={() => {
        navigate("/login")
      }} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Login</a>
      <a onClick={() => {
        navigate("/register")
      }} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register</a>
    </>
  )
}
