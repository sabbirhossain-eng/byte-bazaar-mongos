import { IoIosLaptop } from "react-icons/io";
import CategoryStat from "./CategoryStat";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";

const FeaturedCategory = () => {
  return (
    <div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Featured Category</h3>
          <p>Get Your Desired Product from Featured Category!</p>
        </div>
       <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-6">
         {/* category 1 */}
         <CategoryStat 
        icon={IoIosLaptop}
        name={"Laptop"}
        />
        {/* category 2 */}
        <CategoryStat 
        icon={HiOutlineComputerDesktop}
        name={"Computer"}
        />
        {/* category 3 */}
        <CategoryStat 
        icon={FaMobileAlt}
        name={"Mobile"}
        />
        {/* category 4
        <CategoryStat 
        icon={IoIosLaptop}
        name={"Laptop"}
        />
         category 5 
        <CategoryStat 
        icon={IoIosLaptop}
        name={"Laptop"}
        />
         category 6 
        <CategoryStat 
        icon={IoIosLaptop}
        name={"Laptop"}
        />
         category 7 
        <CategoryStat 
        icon={IoIosLaptop}
        name={"Laptop"}
        />
        category 8 
        <CategoryStat 
        icon={IoIosLaptop}
        name={"Laptop"}
        /> */}
       </div>
    </div>
  );
};

export default FeaturedCategory;
