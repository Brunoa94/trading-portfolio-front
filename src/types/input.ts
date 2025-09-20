import type { UseFormRegister } from "react-hook-form";

export type InputT = {
  defaultValue?: string;
  name: string;
  title: string;
  register: UseFormRegister<any>;
};
