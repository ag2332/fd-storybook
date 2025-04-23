import { cva, VariantProps } from "class-variance-authority";

const variant = {
  primary: [
    "bg-blue-200",
    "border-blue-300",
    "text-primary-900",
    "dark:bg-blue-500",
    "dark:border-blue-600",
    "dark:text-blue-50",
  ],
  information: [
    "bg-yellow-200",
    "border-yellow-300",
    "text-yellow-900",
    "dark:bg-yellow-500",
    "dark:border-yellow-600",
    "dark:text-yellow-50",
  ],
  success: [
    "bg-green-200",
    "border-green-300",
    "text-green-900",
    "dark:bg-green-500",
    "dark:border-green-600",
    "dark:text-green-50",
  ],
  warning: [
    "bg-purple-200",
    "border-purple-300",
    "text-purple-900",
    "dark:bg-purple-500",
    "dark:border-purple-600",
    "dark:text-purple-50",
  ],
  error: [
    "bg-red-200",
    "border-red-300",
    "text-red-900",
    "dark:bg-red-500",
    "dark:border-red-600",
    "dark:text-red-50",
  ],
};

export const variants = cva(
  ["p-4", "rounded-lg", "border", "shadow-md", "space-y-4", "max-w-[18.75rem]"],
  {
    variants: {
      variant,
    },
  }
);

export type CalloutVariants = VariantProps<typeof variants>;
