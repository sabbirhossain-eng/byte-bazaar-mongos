import Container from "../Shear/Container/Container";
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-black py-4 text-gray-500">
        <Container>
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              {/* section 1 */}
              <div className="px-4 my-4 w-full xl:w-1/5">
                <div>
                  <h2 className="inline-block text-lg pb-4 mb-4 text-gray-100 uppercase">
                    Support
                  </h2>
                </div>
                {/* stat 1 */}
                <div>
                  <div className="flex items-center p-4 bg-transparent border border-gray-500 hover:border-secondary rounded-full">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <IoIosCall className="text-white text-3xl" />
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                      <span className="text-gray-500 text-xs">10AM - 7PM</span>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-secondary">
                          000000000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* stat 2 */}
                <div className="mt-4">
                  <div className="flex items-center p-4 bg-transparent border border-gray-500 hover:border-secondary rounded-full">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <FaLocationDot className="text-white text-2xl" />
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                      <span className="text-gray-500 text-xs">
                        Store Locator
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-secondary">
                          Find Our Store
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* section 2 */}
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-lg pb-4 mb-4 text-gray-100 uppercase">
                    About us
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-secondary">
                    EMI Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Star Point Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* section 3 */}
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-lg pb-4 mb-4 text-gray-100 uppercase">
                    
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-secondary">
                    About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Career
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Brands
                    </a>
                  </li>
                </ul>
              </div>
              {/* section 4 */}
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-lg pb-4 mb-4 text-gray-100 uppercase">
                    
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Online Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Refund and Return Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                    Blog
                    </a>
                  </li>
                </ul>
              </div>
              {/* Section 5 */}
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-lg pb-4 mb-4 text-gray-100 uppercase">
                  Stay Connected
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a className=" text-white">
                    Byte Bazaar
                    </a>
                  </li>
                  <li>
                    <a  className="">
                    Head Office: humayun read, mohammadpur, Dhaka 1000
                    </a>
                  </li>
                  <li>
                    <a className="">
                    Email:
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary hover:underline">
                    support@bytebazaar.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* social link */}
          <hr />
          <div className=" py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-around items-center">
            <p className="text-sm text-gray-500">
            Experience Byte Bazaar :
            </p>
            <p className="bg-gray-600 rounded-full p-2">
            <FaYoutube className=" text-white text-xl hover:text-secondary"/>
            </p>
            <p className="bg-gray-600 rounded-full p-2">
            <FaFacebook className=" text-white text-xl hover:text-secondary"/>
            </p>
            <p className="bg-gray-600 rounded-full p-2">
            <FaInstagram className=" text-white text-xl hover:text-secondary"/>
            </p>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <hr />
      <div className=" py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 text-sm text-gray-500 w-full text-center sm:w-auto sm:text-left">
            © 2024 Byte Bazaar | All rights reserved
            </div>
            <div className="px-4 w-full text-sm text-gray-500 text-center sm:w-auto sm:text-left">
            Powered By: Byte Bazaar
            </div>
          </div>
        </div>
      </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
