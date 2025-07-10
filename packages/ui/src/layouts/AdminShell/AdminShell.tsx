"use client";

import { Container } from "@mantine/core";
//components

import { AdminShellTopnav } from "./components/Topnav/index";
//type
import { PropAdminShell } from "./AdminShell.type";

export function AdminShell({
  navItems,
  classNames,

  children,
}: PropAdminShell) {
  return (
    <>
      <AdminShellTopnav navItems={navItems} />
      {children}
    </>
  );
}
