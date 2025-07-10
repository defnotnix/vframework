"use client";

import React from "react";
//next
import { useRouter } from "next/navigation";
//mantine
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Tabs,
  Text,
  TextInput,
} from "@mantine/core";
import { ArrowLeft, CaretDown, Plus, Sliders } from "@phosphor-icons/react";
//mantine

//icons

//styles
import classes from "./PageDataTable.module.css";
//Prop
import { PropDataTable } from "./PageDataTable.type";

//components

export function PageDataTable({
  tabProps,
  defaultTabActive,
  tabs = [],

  withBack = true,
  onBack,
}: PropDataTable) {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  const RenderTabs = () => {
    if (tabs.length <= 0) {
      return <div />;
    }

    return (
      <Tabs.List justify="center">
        {tabs.map(({ value, label, ...props }, index) => (
          <Tabs.Tab key={index} value={value || String(index)} {...props}>
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    );
  };

  // * ANIMATIONS

  return (
    <>
      <Container>
        <Tabs
          classNames={classes}
          defaultValue={defaultTabActive}
          {...tabProps}
        >
          <Paper
            bg="none"
            px="lg"
            style={{
              borderBottom: "1px solid var(--mantine-color-gray-3)",
            }}
          >
            <SimpleGrid cols={3}>
              <Group gap="xs">
                {withBack && (
                  <ActionIcon
                    size="md"
                    onClick={onBack || (() => Router.back())}
                  >
                    <ArrowLeft />
                  </ActionIcon>
                )}

                <Text size="md" fw={700}>
                  Managed Sustained Module
                </Text>
              </Group>

              <RenderTabs />

              <Group gap={4} justify="flex-end">
                <Button size="xs" variant="light" rightSection={<CaretDown />}>
                  Actions
                </Button>

                <Button size="xs" leftSection={<Plus />}>
                  Create New
                </Button>
              </Group>
            </SimpleGrid>
          </Paper>

          <Box mx="lg" my="sm">
            <Group grow gap="xs">
              <TextInput size="xs" placeholder="Search" />

              <Group gap="xs">
                <Button size="xs">Filters</Button>
                <Button size="xs">Group By</Button>
              </Group>
            </Group>
          </Box>

          <Paper mx="lg" my="sm" withBorder>
            asdf
          </Paper>
        </Tabs>
      </Container>
    </>
  );
}
