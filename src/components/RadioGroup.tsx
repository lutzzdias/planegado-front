import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

interface Props {
  label: string;
  options: string[];
}

export function RadioSection(props: Props) {
  const { label, options } = props;
  let [selected, setSelected] = useState(options[0]);

  return (
    <div className="flex flex-col gap-2 text-sm font-normal">
      <div className="text-md font-medium">{label}</div>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="flex flex-col gap-2"
      >
        {options.map((option) => (
          <Field key={option} className="flex items-center gap-2">
            <Radio
              value={option}
              className="group flex size-4.5 items-center justify-center rounded-full border border-gray-300 outline-none"
            >
              <span className="invisible size-2 rounded-full bg-primary group-data-checked:visible" />
            </Radio>
            <Label>{option}</Label>
          </Field>
        ))}
      </RadioGroup>
    </div>
  );
}
