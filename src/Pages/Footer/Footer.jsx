import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import bank from "../../../public/Images/bank.png";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto lg:flex  lg:pt-[50px] lg:px-0 px-5 mt-5">
        <div className="w-full lg:w-[35%] lg:pr-[50px] ">
          <h1 className="text-text-black text-[25px] font-instrument">
            Help Customers
          </h1>
          <p className="my-5 text-text-gray">
            Find a location nearest you to reduce shipping costs and make
            shopping easier. <strong>Show on google maps.</strong>
          </p>
          <p className="text-text-gray">+1 (973) 435-3638 </p>
          <p className="text-text-gray">info@fashionwomen.com</p>

          <div className="flex items-center gap-[15px] mt-5 text-text-gray">
            <div className="h-10 w-10 rounded-full flex items-center justify-center border border-gray-600">
              <FaWhatsapp />
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center border border-gray-600">
              <FaFacebookF />
            </div>

            <div className="h-10 w-10 rounded-full flex items-center justify-center border border-gray-600">
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="w-full flex lg:w-[30%]">
          <div className="w-full lg:w-[50%] mt-[30px] lg:mt-0">
            <h1 className="text-text-black text-[18px] font-semibold mb-[30px] font-instrument">
              Our Company
            </h1>
            <div className="flex flex-col gap-2.5 text-text-gray">
              <p>Terms Of Use</p>
              <p>Privacy Policy</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Store Location</p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] mt-[30px] lg:mt-0">
            <h1 className="text-text-black text-[18px] font-semibold mb-[30px] font-instrument">
              Shop Categories
            </h1>
            <div className="flex flex-col gap-2.5 text-text-gray">
              <p>Hot Deals</p>
              <p>Best Seller</p>
              <p>Sale & Special Offers</p>
              <p>Activewear</p>
              <p>Popular Trends</p>
              <p>Croptop</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[35%] mt-[30px] lg:mt-0">
          <h1 className="text-text-black text-[18px] font-semibold mb-[30px] font-instrument">
            Sign Up to Newsletter
          </h1>

          <p className="text-text-gray">
            Sign up for 10% off your first purchase and free shipping. Updates
            information on Sales and Offers.
          </p>
          <p className="mt-5 text-text-gray">
            ***By entering the e-mail you accept the
            <strong className="text-text-black">
              terms and conditions
            </strong>{" "}
            and the <strong className="text-text-black">privacy policy.</strong>
          </p>
          <img className="mt-10" src={bank} alt="bank" />
        </div>
      </div>
      <p className="border-t  border-gray-200 py-6 mt-[50px] text-center text-text-gray">
        © 2025 T-Shirt. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
