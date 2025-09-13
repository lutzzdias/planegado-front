import { Field, Label, Input } from "@headlessui/react";
import { CircleQuestionMarkIcon } from "lucide-react";
import HintPopover from "./HintPopover";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  hint?: string;
}

// TODO: implement prefix / suffix
export function TextField(props: Props) {
  const { name, label, placeholder, hint } = props;

  return (
    <Field className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <Label className="text-sm font-medium data-disabled:opacity-50">
          {label}
        </Label>
        {hint && (
          <HintPopover content={hint}>
            <CircleQuestionMarkIcon className="h-3.5 w-3.5 cursor-pointer text-gray-600" />
          </HintPopover>
        )}
      </div>
      <Input
        name={name}
        placeholder={placeholder}
        className="block w-full rounded-lg px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-900/40 data-disabled:bg-gray-100 data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
      />
    </Field>
  );
}
