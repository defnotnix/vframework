import { Indicator } from "@mantine/core";
import {
  HouseIcon,
  CakeIcon,
  ChatCircleDotsIcon,
  UsersIcon,
  UserGearIcon,
  GearIcon,
} from "@phosphor-icons/react";
import { _nav as navMain } from "./nav_main";
import { NavItem } from "../../../../packages/ui/src/layouts/AdminShell/AdminShell.type";

export const navs = {
  navMain,
};

export const navModules = [
  {
    label: "General",
    url: "/",
    subModules: navMain,
  },
];

export const links: NavItem[] = [
  {
    label: "Dashboard",
    description: "Dashboard for admin & users",
    icon: <HouseIcon size={24} />,
    url: "/dashboard",
    roles: ["admin", "guest", "user"],
    children: [
      {
        label: "Dashboards",
        children: [
          {
            label: "User Dashboard",
            url: "/user",
            customRender: <CakeIcon size={24} />,
            roles: ["admin"],
          },
          {
            label: "Settings",
            url: "/settings",
            roles: ["admin"],
          },
          { horizontalLine: true, roles: ["admin"] },
        ],
        roles: ["admin"],
      },
      {
        label: "Reports",
        children: [
          {
            label: "Sale Reports",
            url: "/dashboard/reports/sales",
            roles: ["admin"],
          },
          {
            label: "Invoice Reports",
            url: "/dashboard/reports/invoice",
            roles: ["admin"],
          },
        ],
        roles: ["admin"],
      },
      {
        label: "Messages",
        url: "/messages",
        icon: <ChatCircleDotsIcon size={24} />,
        customRender: (
          <Indicator label="2" color="brand" size="lg" radius="xl" />
        ),
        roles: ["admin"],
      },
    ],
  },
  {
    label: "Users",
    description: "Manage users",
    icon: <UsersIcon size={24} />,
    url: "/users",
    roles: ["admin"],
    children: [
      {
        label: "All Users",
        url: "/users/all",
        icon: <UsersIcon size={24} />,
        roles: ["admin"],
      },
      {
        label: "Admins",
        url: "/users/admin",
        icon: <UserGearIcon size={24} />,
        roles: ["admin"],
      },
    ],
  },
  {
    label: "Settings",
    description: "Settings for admin users",
    icon: <GearIcon size={24} />,
    url: "/settings",
    roles: ["admin"],
  },
];
