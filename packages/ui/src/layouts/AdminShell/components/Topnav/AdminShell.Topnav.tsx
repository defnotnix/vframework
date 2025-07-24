"use client";

//nextjs

//mantine
import {
  Anchor,
  Box,
  Breadcrumbs,
  Burger,
  Drawer,
  Flex,
  Group,
  Text,
} from "@mantine/core";

import { AdminShellMainnav } from "../MainNav";
import { AdminShellSubnav } from "../SubNav";

//styles
//type
import { PropAdminShellTopnav } from "../../AdminShell.type";
import { useDisclosure } from "@mantine/hooks";
import { useBreadcrumbContext } from "../../../../context/BreadcrumbContext";
import { useBreadcrumbs } from "../../../../hooks/useBreadcrumbs";

export function AdminShellTopnav({
  actions,
  active,
  logo,
  appTitle,
  navItems,
  moduleName,
}: PropAdminShellTopnav) {
  const { breadcrumbs: customCrumbs } = useBreadcrumbContext();
  const defaultBreadcrumbs = useBreadcrumbs(navItems);
  const breadcrumbs = customCrumbs ?? defaultBreadcrumbs;
  const [opened, { toggle, close }] = useDisclosure(false);

  const subLinks = active?.children || [];

  return (
    <>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        style={{
          borderBottom: "1px solid #c7c7c7",
        }}
        h={64}
      >
        <Group p="md" gap="sm">
          <Burger size="sm" hiddenFrom="md" onClick={toggle} opened={opened} />
          <Text fz="lg" fw={500}>
            {moduleName}
          </Text>
          <Breadcrumbs separatorMargin={0}>
            {breadcrumbs.map((crumb, index) => (
              <Anchor
                key={crumb.label}
                href={crumb.href}
                size="xs"
                c={index === breadcrumbs.length - 1 ? "dimmed" : "blue"}
                underline="hover"
              >
                {crumb.label}
              </Anchor>
            ))}
          </Breadcrumbs>
        </Group>
        <Box p="md">{actions}</Box>
      </Flex>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={370}
        h="100vh"
        overlayProps={{ blur: 2 }}
        hiddenFrom="md"
        styles={{
          content: {
            padding: 0,
            margin: 0,
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Group align="start" gap={0} wrap="nowrap">
          <AdminShellMainnav
            logo={logo}
            navItems={navItems}
            appTitle={appTitle}
          />
          <AdminShellSubnav
            navItems={subLinks}
            active={active}
            appTitle={appTitle}
          />
        </Group>
      </Drawer>
    </>
  );
}
