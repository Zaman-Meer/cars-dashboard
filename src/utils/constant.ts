import {
  CalenderIcon,
  CarIcon,
  DashboardIcon,
  DoughnutIcon,
  FencingIcon,
  MessageIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@/icons";
import { NavLinkType } from "@/types";

export const SideBarLinks: NavLinkType[] = [
  {
    icon: DashboardIcon,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: DoughnutIcon,
    label: "Assets",
    href: "/assets",
  },
  {
    icon: CarIcon,
    label: "Booking",
    href: "/booking",
  },
  {
    icon: ShoppingBagIcon,
    label: "Sell Cars",
    href: "/sell-cars",
  },
  {
    icon: ShoppingCartIcon,
    label: "Buy Cars",
    href: "/buy-cars",
  },
  {
    icon: FencingIcon,
    label: "Services",
    href: "/services",
  },
  {
    icon: CalenderIcon,
    label: "Calender",
    href: "/calender",
  },
  {
    icon: MessageIcon,
    label: "Messages",
    href: "/messages",
  },
];
