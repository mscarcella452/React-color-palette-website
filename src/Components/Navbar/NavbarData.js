import { LiaSwatchbookSolid } from "react-icons/lia";
import { MdOutlineCreate } from "react-icons/md";
import { IoHomeOutline, IoBookmarksOutline } from "react-icons/io5";

export const hamburgerNavLinksData = [
  {
    text: "Home",
    to: "/",
    icon: <IoHomeOutline className='navbar_icon' />,
  },
  {
    text: "Create",
    to: "/createPalette",
    icon: <MdOutlineCreate className='navbar_icon' />,
  },
  {
    text: "Your Palettes",
    to: "/userPalettes",
    icon: <IoBookmarksOutline className='navbar_icon' />,
  },
  {
    text: "Templates",
    to: "/templatePalettes",
    icon: <LiaSwatchbookSolid className='navbar_icon' />,
  },
];

export const navLinksData = [
  { text: "Create", to: "/createPalette" },
  { text: "Your Palettes", to: "/userPalettes" },
  { text: "Templates", to: "/templatePalettes" },
];
