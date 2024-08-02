import Container from "../Container/Container";
import logo from "../../../assets/Byte Bzaar logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdCardGiftcard } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import "./Navbar.css";
import Typography from "@mui/material/Typography";
import { HashLink } from "react-router-hash-link";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Navbar = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    window.location.reset(true);
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

  const menuList = (
    <>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <Typography className="nav-link relative">
          <Link
            onClick={handleClick}
            className={` ${
              pathname === "/"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-200"
            } no-underline font-semibold   lg:hover:bg-none text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
            to={"/"}
          >
            Home
          </Link>
        </Typography>
        <Typography className="nav-link relative">
          <Link
            className={` ${
              pathname === "/laptop"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-200"
            } no-underline font-semibold  text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
            to={"/laptop"}
          >
            Laptop
          </Link>
        </Typography>
        <Typography className="nav-link relative">
          <Link
            className={` ${
              pathname === "/desktop"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-200"
            } no-underline font-semibold  text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
            to={"/desktop"}
          >
            Desktop
          </Link>
        </Typography>
        <Typography className="nav-link relative">
          <Link
            className={` ${
              pathname === "/monitor"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-200"
            } no-underline font-semibold  text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
            to={"/monitor"}
          >
            Monitor
          </Link>
        </Typography>
        <Typography className="nav-link relative">
          <Link
            className={` ${
              pathname === "/blog"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-200"
            } no-underline font-semibold   lg:hover:bg-none text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
            to={"/blog"}
          >
            Blog
          </Link>
        </Typography>
        <Typography className="nav-link relative">
          <Link
            className={` ${
              pathname === "/contactUs"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-200"
            } no-underline font-semibold   lg:hover:bg-none text-gray-800  dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          >
            <HashLink smooth to="/#contactUs">
              Contact Us
            </HashLink>
          </Link>
        </Typography>
      </ul>
    </>
  );
  return (
    <div>
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
                        <Link to="/register" className="hover:text-secondary">
                          Register
                        </Link>
                        <span> or </span>
                        <Link to="/login" className="hover:text-secondary">
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
          <div>{menuList}</div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
