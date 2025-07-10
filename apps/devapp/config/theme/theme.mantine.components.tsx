"use client";

import {
  Button,
  Container,
  MultiSelect,
  NavLink,
  NumberInput,
  PasswordInput,
  PillsInput,
  Select,
  TextInput,
  Textarea,
  Text,
  Menu,
  Modal,
  MantineSize,
} from "@mantine/core";
import { DateInput, YearPickerInput } from "@mantine/dates";

type propDefaults = {
  fontSize: string;
  lineHeight: string;
  inputSize: MantineSize;
  containerSize: number | string;
};

const defaults: propDefaults = {
  fontSize: "var(--mantine-font-size-xs)",
  lineHeight: "",
  // * Inputs
  inputSize: "sm",
  // * Container
  containerSize: 1650,
};

const defaultInputStyleProps = {
  input: {
    fontSize: defaults.fontSize,
  },
  label: {
    fontSize: defaults.fontSize,
  },
  error: {
    fontSize: defaults.fontSize,
  },
};

export const configThemeMantineComponents: any = {
  Container: Container.extend({
    defaultProps: {
      size: defaults?.containerSize || "",
    },
  }),
  Text: Text.extend({
    defaultProps: {
      fw: 500,
    },
  }),
  Button: Button.extend({
    defaultProps: {
      size: defaults.inputSize,
      style: {
        fontSize: defaults.fontSize,
      },
    },
  }),

  TextInput: TextInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        label: {
          fontSize: defaults.fontSize,
        },
        input: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),

  PillsInput: PillsInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        label: {
          fontSize: defaults.fontSize,
        },
        input: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        label: {
          fontSize: defaults.fontSize,
        },
        input: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        label: {
          fontSize: defaults.fontSize,
        },
        input: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  Textarea: Textarea.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        label: {
          fontSize: defaults.fontSize,
        },
        input: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  Select: Select.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        ...defaultInputStyleProps,
        label: {
          fontSize: defaults.fontSize,
        },
        option: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  Pills: PillsInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        input: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  MultiSelect: MultiSelect.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        ...defaultInputStyleProps,
        label: {
          fontSize: defaults.fontSize,
        },
        option: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  DateInput: DateInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  YearPickerInput: YearPickerInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),

  Menu: Menu.extend({
    defaultProps: {
      styles: {
        item: {
          fontSize: defaults.fontSize,
          //fontWeight: 600,
        },
      },
    },
  }),
  Modal: Modal.extend({
    defaultProps: {
      styles: {
        header: {
          background: "var(--mantine-color-gray-1)",
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        },
        body: {
          padding: 0,
        },
      },
    },
  }),
};
