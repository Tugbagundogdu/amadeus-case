import Link from "next/link";

const HeaderNav: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-2 bg-slate-600 ">
    <div className="flex justify-center col-span-1 p-5 items-center">
    <Link href={"./"}>
      <div>
        <p className=" text-3xl font-bold text-white">Flyinn</p>
        <p className="text-sm text-white text-center">AMADEUS</p>
      </div>
      </Link>
    </div>
    <div className="col-span-3 p-5 flex justify-center items-center">
      <Link href={"./"}>
        <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
          <p className="text-white">HOME</p>
        </div>
      </Link>
      <Link href="./aboutus" className="ml-5">
        <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
          <p className=" hidden md:block text-white">ABOUT US</p>
        </div>
      </Link>
      <Link href="./bookingterms" className="ml-5">
        <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
          <p className=" hidden sm:block text-white">BOOKING TERMS</p>
        </div>
      </Link>
      <Link href="./flight" className="ml-5">
        <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
          <p className="hidden md:block text-white">FLIGHT</p>
        </div>
      </Link>
      <Link href="./getintouch" className="ml-5">
        <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
          <p className=" hidden md:block text-white">GET IN TOUCH</p>
        </div>
      </Link>
      <Link href={"./FindFlight"} className="ml-5 hover:bg-yellow-400 ">
        <div className="py-2 px-5 border-white border-[2px]">
          <p className="text-white">FIND FLIGHT</p>
        </div>
      </Link>
    </div>
  </div>
  );
};

export default HeaderNav;
