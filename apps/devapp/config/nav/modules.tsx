import { Indicator } from "@mantine/core";
import {
  HouseIcon,
  CakeIcon,
  ChatCircleDotsIcon,
  UsersIcon,
  UserGearIcon,
  GearIcon,
  ShieldCheckIcon,
  FileTextIcon,
  NoteBlankIcon,
  ImageIcon,
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
        roles: ["admin"],
        children: [
          {
            label: "User Dashboard",
            url: "/dashboard/user",
            customRender: <CakeIcon size={24} />,
            roles: ["admin"],
          },
          {
            label: "Settings",
            url: "/settings",
            roles: ["admin"],
          },
          {
            label: "Admin Dashboard",
            roles: ["admin"],
            children: [
              {
                label: "Admin Dashboard",
                url: "/admin",
                roles: ["admin"],
              },
              {
                label: "Admin Settings",
                url: "/admin/settings",
                roles: ["admin"],
              },
              {
                label: "Advanced",
                roles: ["admin"],
                children: [
                  {
                    label: "System Logs",
                    url: "/admin/system/logs",
                    roles: ["admin"],
                  },
                  {
                    label: "Audit Trail",
                    url: "/admin/system/audit",
                    roles: ["admin"],
                  },
                  {
                    label: "Security",
                    roles: ["admin"],
                    children: [
                      {
                        label: "Firewall Settings",
                        url: "/admin/security/firewall",
                        roles: ["admin"],
                      },
                      {
                        label: "IP Whitelist",
                        url: "/admin/security/ip",
                        roles: ["admin"],
                      },
                      {
                        label: "Session Management",
                        url: "/admin/security/session",
                        roles: ["admin"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { horizontalLine: true, roles: ["admin"] },
      {
        label: "Reports",
        roles: ["admin"],
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
          {
            label: "Analytics",
            roles: ["admin"],
            children: [
              {
                label: "Traffic",
                url: "/dashboard/reports/analytics/traffic",
                roles: ["admin"],
              },
              {
                label: "Engagement",
                url: "/dashboard/reports/analytics/engagement",
                roles: ["admin"],
              },
              {
                label: "Conversions",
                roles: ["admin"],
                children: [
                  {
                    label: "By Product",
                    url: "/dashboard/reports/analytics/conversions/product",
                    roles: ["admin"],
                  },
                  {
                    label: "By Region",
                    url: "/dashboard/reports/analytics/conversions/region",
                    roles: ["admin"],
                  },
                ],
              },
            ],
          },
        ],
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
];
