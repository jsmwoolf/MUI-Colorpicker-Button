import { TextFieldProps } from "@material-ui/core/TextField";
import { converters } from "./transformers";
import { FC } from "react";

type props = {
  onChange: (color: string) => void;
  convert?: keyof converters;
  showPicker?: boolean;
  internalValue?: string;
  setShowPicker?: (open: boolean) => void;
  setValue?: (value: string) => void;
} & Omit<TextFieldProps, "onChange">;

declare const ColorPicker: FC<props>;

export default ColorPicker;
