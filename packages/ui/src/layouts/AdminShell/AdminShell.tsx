"use client";

import { Container, Flex, Group } from "@mantine/core";
//components
import { AdminShellMainnav } from "./components/MainNav";
import { AdminShellSubnav } from "./components/SubNav";

//type
import { NavItem, PropAdminShell } from "./AdminShell.type";
import { usePathname } from "next/navigation";

export function AdminShell({
  navItems,
  actions,
  logo,
  appTitle,
  children,
}: PropAdminShell) {
  const pathname = usePathname();

  const findActiveParent = (
    links: NavItem[],
    pathname: string
  ): NavItem | undefined => {
    for (const link of links) {
      if (link.url && pathname.startsWith(link.url)) {
        if (link.children) {
          const childMatch = findActiveParent(link.children, pathname);
          if (childMatch) return link;
        }
        return link;
      }
    }
    return undefined;
  };

  const active = findActiveParent(navItems, pathname);
  const subLinks = active?.children || [];
  return (
    <>
      <Flex>
        <nav>
          <Group gap={0} visibleFrom="md">
            <AdminShellMainnav
              logo={logo}
              navItems={navItems}
              appTitle={appTitle}
            />
            <AdminShellSubnav
              navItems={subLinks}
              appTitle={appTitle}
              active={active || ({} as NavItem)}
            />
          </Group>
        </nav>
        {children}
      </Flex>
    </>
  );
}
