"use client";

import {
  Flex,
  Tooltip,
  UnstyledButton,
  Avatar,
  Drawer,
  SimpleGrid,
  Paper,
  Stack,
  Text,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowSquareInIcon,
  PlaceholderIcon,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropAdminShellMainnav } from "../../AdminShell.type";

export function AdminShellMainnav({
  logo,
  navItems,
  appTitle,
}: PropAdminShellMainnav) {
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Flex
      w={70}
      h="100vh"
      bg="backgroundPrimary"
      direction="column"
      justify="space-between"
      align="center"
      p={0}
    >
      <Flex direction="column" p={0} w="100%">
        <Flex
          w="100%"
          justify="center"
          align="center"
          h={64}
          style={{ borderBottom: "1px solid #343434" }}
        >
          <Link href="/">
            <Tooltip label={appTitle} withArrow color="brand" position="right">
              <Image src={logo} alt={appTitle} width={32} height={32} />
            </Tooltip>
          </Link>
        </Flex>

        <Flex direction="column" align="center" gap="lg" p="md">
          {navItems.map((link) => (
            <Tooltip
              key={link.label}
              label={link.label}
              withArrow
              position="right"
              color="brand"
            >
              <Link
                href={link.url || "#"}
                passHref
                style={{
                  color: `${
                    pathname.includes(link.url ?? "") ? "white" : "gray"
                  }`,
                }}
              >
                <UnstyledButton>
                  {React.isValidElement(link.icon) ? (
                    React.cloneElement(link.icon)
                  ) : (
                    <PlaceholderIcon size={24} />
                  )}
                </UnstyledButton>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>

      <Flex direction="column" align="center" gap="lg" p="md">
        <Tooltip label="Modules" withArrow color="brand" onClick={toggle}>
          <UnstyledButton>
            <ArrowSquareInIcon size={24} color="white" />
          </UnstyledButton>
        </Tooltip>
        <Menu>
          <Menu.Target>
            <UnstyledButton>
              <Avatar radius="xl" variant="filled" color="brand">
                AM
              </Avatar>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<UserIcon />}>Profile</Menu.Item>
            <Menu.Item leftSection={<SignOutIcon color="red" />}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
      {opened && (
        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          // offset={16}
          title="Modules"
          position="bottom"
          transitionProps={{
            transition: "rotate-left",
            duration: 150,
            timingFunction: "linear",
          }}
        >
          <Flex direction="row" align="center" justify="center" p="md">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              {navItems.map((link) => (
                <Paper
                  key={link.label}
                  radius="md"
                  shadow="md"
                  p="md"
                  withBorder
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Link
                    href={link.url || "#"}
                    passHref
                    onClick={toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <Stack gap="md" align="center">
                      {React.isValidElement(link.icon) ? (
                        React.cloneElement(link.icon)
                      ) : (
                        <PlaceholderIcon size={24} />
                      )}
                      <Text fz="sm" fw={600} c="brand">
                        {link.label}
                      </Text>
                      <Text fz="xs" c="dimmed">
                        {link.description}
                      </Text>
                    </Stack>
                  </Link>
                </Paper>
              ))}
            </SimpleGrid>
          </Flex>
        </Drawer>
      )}
    </Flex>
  );
}
