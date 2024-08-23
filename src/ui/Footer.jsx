import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex justify-center items-center px-4 py-2 bg-red-700">
      <div className="flex justify-between gap-4">
        <FaFacebook className="text-slate-50 hover:text-slate-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-red-600" />
        <FaInstagram className="text-slate-50 hover:text-slate-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-red-600" />
        <FaXTwitter className="text-slate-50 hover:text-slate-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-red-600" />
      </div>
    </div>
  );
}

export default Footer;
