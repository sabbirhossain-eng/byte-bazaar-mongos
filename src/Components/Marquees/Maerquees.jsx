import Marquee from "react-fast-marquee";

const Maerquees = () => {
    return (
        <div className="flex bg-slate-50 mt-4 mb-4 py-1 rounded-xl">
      <Marquee pauseOnHover={true} speed={60}>
      Don not Miss Out! Exclusive Discounts on Top Product. Shop Now!
      </Marquee>
    </div>
    );
};

export default Maerquees;