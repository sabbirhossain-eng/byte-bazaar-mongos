import Container from "../Container/Container";
import logo from "../../../assets/Byte Bzaar logo.png";
import { Link, useLocation} from 'react-router-dom';
import { MdCardGiftcard } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import "./Navbar.css";
import Typography from '@mui/material/Typography';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    
    window.location.reset(true);
  };

  const menuList = (
    <>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
      <Typography className="nav-link relative">
        <Link
         onClick={handleClick}
          className={` ${
            pathname === "/" ? "text-primary" : "text-gray-700 dark:text-gray-200"
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
            pathname === "/contactUs" ? "text-primary" : "text-gray-700 dark:text-gray-200"
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
        <div className="flex p-2 justify-between items-center flex-wrap">
          {/* logo */}
          <div 
          onClick={handleClick}
          className="flex items-center">
            <img src={logo} className="" />
          </div>
          {/* Search */}
          <div className="relative flex items-center md:inline-flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-200 rounded-md py-1 px-2"
            />
            <svg
              className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* nav stat */}
          <div className="flex items-center gap-6">
            {/* Offer */}
          <div className="w-full">
            <div className="flex items-center shadow-sm rounded-md">
                <div className="text-2xl text-secondary">
                    <MdCardGiftcard/>
                </div>

                <div className="mx-3">
                    <h4 className="text-xl font-semibold text-white">Offers</h4>
                    <div className="text-gray-400 text-nowrap">Latest Offers</div>
                </div>
            </div>
        </div>
            {/* Happy hour */}
          <div className="w-full">
            <div className="flex items-center shadow-sm rounded-md">
                <div className="text-2xl text-secondary">
                    <GiElectric/>
                </div>
                <div className="mx-3 text-nowrap">
                    <h4 className="text-xl font-semibold text-white">Happy Hour</h4>
                    <div className="text-gray-400">Special Deals</div>
                </div>
            </div>
        </div>
            {/* Account */}
          <div className="w-full">
            <div className="flex items-center shadow-sm rounded-md">
                <div className="text-2xl text-secondary">
                    <IoPerson/>
                </div>
                <div className="mx-3 text-nowrap">
                    <h4 className="text-xl font-semibold text-white">Account</h4>
                    <div className="text-gray-400">
                      <Link to="/register" className="hover:text-secondary">
                      Register
                      </Link>
                        <span> or  </span>
                       <Link to="/login" className="hover:text-secondary">
                      Login
                      </Link>
                       </div>
                </div>
            </div>
        </div>
        {/* Cart */}
        <div className="w-full">
            <div className="flex items-center shadow-sm rounded-md">
                <div className="text-2xl text-secondary relative">
                    <BsCartCheckFill/>
                    <p className="absolute bottom-3 left-4 bg-primary text-white rounded-full px-1 text-sm">0</p>
                </div>
                <div className="mx-3 text-nowrap">
                    <h4 className="text-xl font-semibold text-white">Cart</h4>
                </div>
            </div>
        </div>
          </div>
        </div>
      </Container>
    </div>

      {/* nav bottom */}
      <div className="bg-slate-50">
        <Container>
        <div>
          {menuList}
        </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
