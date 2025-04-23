import { cva, VariantProps } from "class-variance-authority";

const variant = {
  primary: [
    "bg-red-500",
    "text-white",
  ],
  small: [
    "px-4",
    "py-2",
    "text-[0.75rem]",
    "rounded-sm",
  ],
  medium: [
    "px-5",
    "py-3",
    "text-[0.875rem]",
  ],
  large: [
    "px-6",
    "py-4",
    "text-[1rem]",
  ],
  transparent: [
    "bg-transparent",
    "text-white",
    "",
  ]
};

export const variants = cva(
  ["inline-block", "cursor-pointer", "rounded-[2em]", "font-bold", "leading-none", "p-4", "rounded-xl", "border"]
  ,{
    variants: {
      variant,
    },
  }
);

export type ButtonVariants = VariantProps<typeof variants>;