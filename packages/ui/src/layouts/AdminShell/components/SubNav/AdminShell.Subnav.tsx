"use client";
import { NavItem, PropAdminShellSubnav } from "../../AdminShell.type";
import { usePathname } from "next/navigation";
import { Divider, Box, NavLink, Text, Flex, ScrollArea } from "@mantine/core";
import { CircleIcon } from "@phosphor-icons/react";
import classes from "./AdminShellSubnav.module.css";
import Link from "next/link";
export function AdminShellSubnav({
  navItems,
  appTitle,
  active,
}: PropAdminShellSubnav) {
  const pathname = usePathname();
  const renderNavItem = (link: NavItem, level = 0) => {
    if (link.horizontalLine) {
      return (
        <Divider
          key={`divider-${Math.random()}`}
          my="md"
          mx="md"
          opacity={0.2}
        />
      );
    }

    if (link.label && !link.url && !link.children) {
      return (
        <Text
          key={link.label}
          fz="sm"
          fw={600}
          c="dimmed"
          // mt="md"
          style={{ paddingLeft: level * 16 }}
        >
          {link.label}
        </Text>
      );
    }

    if (link.label && link.children && !link.url) {
      return (
        <Box key={link.label}>
          <NavLink
            classNames={classes}
            label={link.label}
            leftSection={link.icon}
            rightSection={link.customRender}
            variant="filled"
            px="md"
            active={link.url === pathname}
            c={link.url === pathname ? "white" : "dimmed"}
            href={link.url}
            style={{
              paddingLeft: level * 16,
              borderRadius: 0,
              borderLeft: level > 0 ? "1px solid #343434" : undefined,
            }}
          >
            {link.children.map((child) => renderNavItem(child, level + 1))}
          </NavLink>
        </Box>
      );
    }
    return (
      <NavLink
        component={Link}
        classNames={classes}
        key={link.url}
        label={link.label}
        leftSection={link.icon}
        rightSection={
          link.url === pathname ? (
            <CircleIcon weight="fill" size={8} />
          ) : (
            link.customRender
          )
        }
        variant="filled"
        px="md"
        active={link.url === pathname}
        c={link.url === pathname ? "white" : "dimmed"}
        href={link.url ?? ""}
        style={{
          paddingLeft: level * 16,
          borderRadius: 0,
          borderLeft: level > 0 ? "1px solid #343434" : undefined,
        }}
      />
    );
  };

  return (
    <ScrollArea w={300} h="100vh" bg="backgroundDeep">
      <Flex direction="column">
        <Flex
          justify="space-between"
          align="center"
          p="md"
          h={64}
          style={{ borderBottom: "1px solid #343434" }}
        >
          <Text fz="lg" fw={500} c="white">
            {appTitle}
          </Text>
          <Text fz="xs" c="white" opacity={0.5}>
            v0.1.1
          </Text>
        </Flex>

        <Flex direction="column" gap={0} p="md">
          <Text fz="xl" c="white" fw={500}>
            {active.label}
          </Text>
          <Text fz="xs" c="white" opacity={0.5}>
            {active.description}
          </Text>
        </Flex>

        <Flex direction="column">
          {navItems.map((link) => renderNavItem(link))}
        </Flex>
      </Flex>
    </ScrollArea>
  );
}
