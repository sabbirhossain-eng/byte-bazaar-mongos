import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const MenuListItem = () => {
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
            {menuList}
        
        </div>
    );
};

export default MenuListItem;