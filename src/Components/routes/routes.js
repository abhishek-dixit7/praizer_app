import { TiHome } from "react-icons/ti";
import { FaQuestion } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { TbAwardFilled, TbDeviceMobile } from "react-icons/tb";
import { MdCelebration } from "react-icons/md";
const NavbarRoutes = {
  label: "Navbar Routes",
  labelDisable: false,
  children: [
    {
      name: "Home",
      keyword: "Home",
      icon: TiHome,
      to: "/home",
      active: true,
    },
    {
      name: "FAQs",
      keyword: "faqs",
      icon: FaQuestion,
      to: "/Faqs",
      active: true,
    },
    {
      name: "Redeem Point",
      keyword: "RedeemPoint",
      icon: GiSevenPointedStar,
      to: "/redeempoint",
      active: true,
    },
    {
      name: "Value Award Winner",
      keyword: "ValueAwardWinner",
      icon: TbAwardFilled,
      to: "/Valueawardwinner",
      active: true,
    },
    {
      name: "Download Mobile",
      keyword: "DownloadMobile",
      icon: TbDeviceMobile,
      to: "/DownloadMobile",
      active: true,
    },
    {
      name: "Celebrations",
      keyword: "Celebrations",
      icon: MdCelebration,
      to: "/celebrations",
      active: true,
    },
  ],
};
export default NavbarRoutes;
