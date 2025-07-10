"use client";

import React, { useEffect } from "react";
//next

//mantine
import {
  Badge,
  Card,
  Center,
  Loader,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";

//mantine

//icons

//styles

//components

//vstax
import { DataTableWrapper } from "@vkit/core";
import { apiModule } from "../../module.api";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

function UsersTableInner() {
  const { data, isLoading, isError } = DataTableWrapper.useDataTableContext();

  // * STORES
  const setSearch = DataTableWrapper.useDataTableWrapperStore(
    (state) => state.setSearch
  );

  if (isLoading) {
    return (
      <Center py={100}>
        <Loader />
      </Center>
    );
  }

  if (isError) {
    return <Text c="red">Failed to load users.</Text>;
  }

  return (
    <Stack py="xl">
      <TextInput
        radius="md"
        rightSection={<MagnifyingGlassIcon />}
        placeholder="Search ..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <SimpleGrid cols={4} spacing={2}>
        {data?.map((item: any, index: number) => {
          return (
            <Card h={200} key={index} shadow="md" radius="md" withBorder>
              <Stack gap="xs">
                <Text size="xs">{item.price}</Text>
                <Badge size="xs">{item.category}</Badge>
                <Text size="sm">{item.title}</Text>

                <Text size="xs" opacity={0.5}>
                  {item.description.substring(0, 100)} ...
                </Text>
              </Stack>
            </Card>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}

export function _List() {
  // * DEFINITIONS

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <DataTableWrapper
        queryKey="users.list"
        queryGetFn={apiModule.getAll}
        dataKey="products"
        paginationDataKey="pagination"
        enableServerQuery={false}
        testMode={true}
      >
        <UsersTableInner />
      </DataTableWrapper>
    </>
  );
}
