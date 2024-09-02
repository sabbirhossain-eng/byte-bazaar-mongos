import Container from "../Container/Container";
import logo from "../../../assets/Byte Bzaar logo.png";
import { Link, } from "react-router-dom";
import { MdCardGiftcard } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuListItem from "./MenuListItem";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  const handleClick = () => {
    window.location.reset(true);
  };
  
  // nav Small drawer
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }));

  // nav small
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  }));

  

  // nav small drawer
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <MenuListItem/>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="hidden lg:block">
      {/* nav top */}
      <div className=" border-b border-gray-300 bg-black">
        <Container>
          <div className=" flex justify-between py-2 items-center flex-wrap gap-40 mx-auto">
            <div className="flex flex-1 mr-4">
              {/* Logo */}
            <img src={logo} 
            className="w-full h-full" 
            onClick={handleClick}/>
             {/* Search */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            </div>
            {/* nav stat */}
            <div className="flex-1 ">
              <div className="flex items-center gap-4 justify-around">
                {/* Offer */}
                <div className="w-full">
                  <div className="flex items-center shadow-sm rounded-md">
                    <div className="text-2xl text-secondary">
                      <MdCardGiftcard />
                    </div>

                    <div className="mx-3">
                      <h4 className="text-sm font-semibold text-white">
                        Offers
                      </h4>
                      <p className="text-gray-400 text-nowrap">
                        Latest Offers
                      </p>
                    </div>
                  </div>
                </div>
                {/* Happy hour */}
                <div className="w-full">
                  <div className="flex items-center shadow-sm rounded-md">
                    <div className="text-2xl text-secondary">
                      <GiElectric />
                    </div>
                    <div className="mx-3 text-nowrap">
                      <h4 className="text-sm font-semibold text-white">
                        Happy Hour
                      </h4>
                      <p className="text-gray-400">Special Deals</p>
                    </div>
                  </div>
                </div>
                {/* Account */}
                <div className="w-full">
                  <div className="flex items-center shadow-sm rounded-md">
                    <div className="text-2xl text-secondary">
                      <IoPerson />
                    </div>
                    <div className="mx-3 text-nowrap">
                      <h4 className="text-sm font-semibold text-white">
                        Account
                      </h4>
                      <p className="text-gray-400">
                        <Link to="/signUp" className="hover:text-secondary">
                          Register
                        </Link>
                        <span> or </span>
                        <Link to="/signIn" className="hover:text-secondary">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Cart */}
                <div className="w-full">
                  <div className="flex items-center shadow-sm rounded-md">
                    <div className="text-2xl text-secondary relative">
                      <BsCartCheckFill />
                      <p className="absolute bottom-3 left-4 bg-primary text-white rounded-full px-1 text-sm">
                        0
                      </p>
                    </div>
                    <div className="mx-3 text-nowrap">
                      <h4 className="text-sm font-semibold text-white">Cart</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* nav bottom */}
      <div className="bg-slate-50 w-full">
        <Container>
          <div>
          <MenuListItem/>
          </div>
        </Container>
      </div>
    </div>
    {/* nav Small */}
    <div className="block lg:hidden">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar className="flex justify-between items-center bg-black">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)}/>
          </IconButton>
          <IconButton>
            <img src={logo} alt="" />
          </IconButton>
          <div>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <ShoppingBasketIcon />
          </IconButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </Box>
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    </div>
  );
};

export default Navbar;
