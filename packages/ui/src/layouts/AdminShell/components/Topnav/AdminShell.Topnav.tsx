"use client";

//nextjs

//mantine
import {
  ActionIcon,
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Menu,
  Paper,
  Space,
  Text,
  ThemeIcon,
} from "@mantine/core";
//icons
import {
  BellIcon,
  CaretDownIcon,
  CheeseIcon,
  CircleIcon,
  DotsThreeVerticalIcon,
  MagnifyingGlassIcon,
  PawPrintIcon,
  QuestionIcon,
  SkullIcon,
  SlidersHorizontalIcon,
  XIcon,
  YarnIcon,
} from "@phosphor-icons/react";

//styles
import classes from "./AdminShell.module.css";
//type
import { PropAdminShellTopnav } from "../../AdminShell.type";
import { usePathname, useRouter } from "next/navigation";

export function AdminShellTopnav({}: PropAdminShellTopnav) {
  // * DEFINITIONS

  const Pathname = usePathname();
  const Router = useRouter();

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <header className={classes.root}>
        <Paper bg="none" radius={0}>
          <Container>
            <Group justify="space-between">
              <Group gap="xl" py={4}>
                <Group py="xs" gap="4px">
                  <PawPrintIcon
                    size={12}
                    weight="duotone"
                    color="var(--mantine-color-brand-6)"
                  />
                  <Text size="sm">
                    <b>lagom</b> airbnb.
                  </Text>
                </Group>

                <Paper p="xs" withBorder>
                  <Group gap="xs">
                    <Avatar size="xs" radius="xs">
                      M
                    </Avatar>
                    <Text size="xs">General Admin</Text>
                    <CaretDownIcon />
                  </Group>
                </Paper>
              </Group>

              <Group gap="xs">
                <Paper>
                  <Group gap={0}>
                    <Avatar />
                    <ActionIcon size="xs">
                      <CaretDownIcon />
                    </ActionIcon>
                  </Group>
                </Paper>
              </Group>
            </Group>
          </Container>
        </Paper>
      </header>
    </>
  );
}
