"use client";

import { Container, Flex } from "@mantine/core";
//components
import { AdminShellMainnav } from "./components/MainNav";

//type
import { PropAdminShell } from "./AdminShell.type";

export function AdminShell({
  navItems,
  actions,
  logo,
  appTitle,
  children,
}: PropAdminShell) {
  return (
    <>
      <Flex>
        <nav>
          <AdminShellMainnav
            logo={logo}
            navItems={navItems}
            appTitle={appTitle}
          />
        </nav>
        {children}
      </Flex>
    </>
  );
}
