"use client";
import { links, navs } from "@/config/nav/modules";
import { Container } from "@mantine/core";
import { AdminShell } from "@vkit/ui";

export function LayoutAdmin({ children }: any) {
  return (
    <>
      <AdminShell navItems={links} logo="/logo1.png" appTitle="Hami Nepal">
        {children}
      </AdminShell>
    </>
  );
}
