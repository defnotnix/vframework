import { navs } from "@/config/nav/modules";
import { Container } from "@mantine/core";
import { AdminShell } from "@vkit/ui";

export function LayoutAdmin({ children }: any) {
  return (
    <>
      <AdminShell navItems={navs}>{children}</AdminShell>
    </>
  );
}
