"use client";

import { Button, Center, Container, Paper } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function () {
  const Router = useRouter();

  return (
    <>
      <Container size="xs">
        <Center h="90vh">
          <Paper p="xl" withBorder>
            <Button
              onClick={() => {
                Router.push("/admin");
              }}
            >
              Go to Admin
            </Button>
          </Paper>
        </Center>
      </Container>
    </>
  );
}
