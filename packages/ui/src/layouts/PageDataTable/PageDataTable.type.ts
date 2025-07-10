import { MantineColor } from "@mantine/core";

export type PropDataTable = {
  tabProps?: {
    keepMounted?: boolean;
    color?: MantineColor;
    loop?: boolean;
  };
  defaultTabActive?: string;
  tabs: {
    label: string;
    value?: string;
    color?: MantineColor;
    rightSection?: React.ReactNode;
    leftSection?: React.ReactNode;
  }[];

  withBack?: boolean;
  onBack?: () => void;
};
