import Container from "../Container/Container";
import logo from "../../../assets/Byte Bzaar logo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdCardGiftcard } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  const { pathname } = useLocation();
  const menuList = (
    <>
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === "/" ? "text-[#076aa5] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#076aa5] lg:hover:bg-none text-gray-800 hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === "/" ? "text-[#076aa5] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#076aa5] lg:hover:bg-none text-gray-800 hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/laptop"}
        >
          Laptop
        </Link>
      </li>
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === "/" ? "text-[#076aa5] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#076aa5] lg:hover:bg-none text-gray-800 hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/about"}
        >
          About
        </Link>
      </li>
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === "/" ? "text-[#076aa5] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#076aa5] lg:hover:bg-none text-gray-800 hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/contact"}
        >
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className=" border-b border-gray-300 bg-black">
      <Container>
        <div className="flex p-2 justify-between items-center flex-wrap">
          <div className="flex items-center">
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
          <div className="flex items-center gap-2">
            {/* Offer */}
          <div className="w-full">
            <div className="flex items-center shadow-sm rounded-md">
                <div className="text-4xl text-secondary">
                    <MdCardGiftcard/>
                </div>

                <div className="mx-3">
                    <h4 className="text-xl font-semibold text-white">Offers</h4>
                    <div className="text-gray-400">Latest Offers</div>
                </div>
            </div>
        </div>
            {/* Happy hour */}
          <div className="w-full">
            <div className="flex items-center shadow-sm rounded-md">
                <div className="text-4xl text-secondary">
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
                <div className="text-4xl text-secondary">
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
                <div className="text-4xl text-secondary">
                    <BsCartCheckFill/>
                </div>
                <div className="mx-3 text-nowrap">
                    <h4 className="text-xl font-semibold text-white">Cart</h4>
                    <p className="text-white bg-secondary rounded-full w-6 px-2">0</p>
                </div>
            </div>
        </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
