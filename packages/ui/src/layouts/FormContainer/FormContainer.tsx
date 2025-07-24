"use client";
import React from "react";
import { PropFormContainer } from "./FormContainer.type";
import {
  Box,
  Button,
  CheckIcon,
  Container,
  Group,
  LoadingOverlay,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { FormWrapper } from "../../../../core/src/wrappers";

export function FormContainer({
  //Mode
  moduleTerm,
  variant = "new",
  size = "lg",
  isLoading = false,
  // Stepper
  withStepper = false,
  steps = [],
  stepperClickable = false,

  // Content
  children,
}: PropFormContainer) {
  const { current, handleStepBack, handleStepNext, handleSubmit, setStep } =
    FormWrapper.useFormProps();
  return (
    <Container size={size}>
      <Paper withBorder mt="xl" p="md" radius={0}>
        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <div>
            <Text size="xl" fw={600}>
              {variant === "edit" ? `Edit ${moduleTerm}` : `New ${moduleTerm}`}
            </Text>
            <Text size="sm" opacity={0.5} tt="capitalize">
              Fill in the fields below to{" "}
              {variant === "edit" ? "update" : "create"} the {moduleTerm}.
            </Text>
          </div>
        </SimpleGrid>
      </Paper>

      {/* Stepper Bar */}
      {withStepper && (
        <Paper
          withBorder
          radius={0}
          // style={{ borderTop: "none", borderBottom: "none" }}
        >
          <SimpleGrid
            spacing={0}
            cols={{ base: 2, sm: Math.max(steps.length, 5) }}
          >
            {steps.map((stepinfo: any, index: number) => (
              <Paper
                p="md"
                key={index}
                radius={0}
                opacity={current >= index ? 1 : 0.5}
                onClick={() => {
                  stepperClickable && setStep(index);
                  console.log(index);
                }}
                style={{
                  background:
                    current === index
                      ? "var(--mantine-color-brand-0)"
                      : current > index
                        ? "var(--mantine-color-teal-0)"
                        : "",
                  borderLeft: "1px solid var(--mantine-color-gray-2)",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  cursor: stepperClickable ? "pointer" : "default",
                }}
              >
                <Stack gap={4}>
                  <Text size="8px" opacity={0.5} fw={600} tt="uppercase">
                    Step {index + 1} of {steps.length}
                  </Text>
                  <Text size="xs">{stepinfo}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Paper>
      )}

      {/* Form Content Area */}
      <Box pos="relative">
        <LoadingOverlay visible={isLoading} />
        {children}
      </Box>

      {/* Navigation Buttons */}
      <Group gap={0} justify="space-between" mt="md">
        {withStepper ? (
          <Button
            onClick={handleStepBack}
            disabled={current === 0}
            leftSection={<ArrowLeftIcon />}
            variant="light"
          >
            Previous Step
          </Button>
        ) : (
          <div />
        )}

        <Group justify="flex-end" gap={4} py="md">
          {withStepper && current < steps.length - 1 && (
            <Button
              size="sm"
              rightSection={<ArrowRightIcon />}
              onClick={handleStepNext}
            >
              Next Step
            </Button>
          )}

          {(!withStepper || current === steps.length - 1) && (
            <Button
              size="sm"
              color="teal"
              leftSection={<CheckIcon />}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </Group>
      </Group>
    </Container>
  );
}
