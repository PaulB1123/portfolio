import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="fixed w-[95%] h-[80px] flex justify-between items-center px-4 m-[1rem] text-[2rem] font-oggRegular">
        <div className="">Logo</div>
        <ul className=" flex space-x-4 ">
          <li>Projects</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}
