export type PropFormContainer = {
  //Mode
  moduleTerm: string;
  variant?: "new" | "edit";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  // Stepper
  withStepper?: boolean;
  steps?: string[];
  stepperClickable?: boolean;

  // Content
  children?: React.ReactNode;
};
