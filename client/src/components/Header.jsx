import React from 'react'
import {AppBar,Toolbar,styled, InputBase,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { gmailLogo } from '../constants/constants';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const  StyledAppBar = styled(AppBar)({
  background:'#F5F5F5',
  boxShadow:'none',
})

const SearchWrapper = styled(Box)({
  background:'#EAF1FB', //light blue hai
  marginLeft:80,
  borderRadius:10,
  minWidth:650,
  maxWidth:700,
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  padding:"0 20px",
  "& > div": 
  {
    width:"100%",
    padding:"0 10px"
  }
})

const IconsWrapper = styled(Box)({
    width:"100%",
    display:"flex",
    justifyContent:"end",
    "& > svg":{
      marginLeft:20
    }
})
const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar position="static">
        <Toolbar>
           <MenuIcon color="action" onClick={toggleDrawer}/>
           <img src = {gmailLogo} alt="logo" style={{width:110,marginLeft:15}}/>
           <SearchWrapper>
              <SearchIcon color="action"/>
              <InputBase placeholder='Search Mail'/>
              <TuneIcon color="action"/>
           </SearchWrapper>
           <IconsWrapper>
            <HelpOutlineOutlinedIcon color="action"/>
            <SettingsOutlinedIcon color="action"/>
            <AppsOutlinedIcon color="action" />
            <AccountCircleOutlinedIcon color="action"/>
           </IconsWrapper>
        </Toolbar>
    </StyledAppBar>
  
  )
}

export default Header
