import { ReactNode } from "react";
import { RadioSection } from "./RadioGroup";
import { SectionInfo } from "./SectionInfo";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  options?: {
    label: string;
    values: string[];
  };
}

export function Section(props: Props) {
  const { children, title, description, options } = props;

  return (
    <div className="flex gap-2">
      <div className="flex flex-1 flex-col gap-2">
        <SectionInfo title={title} description={description} />
        {options && (
          <RadioSection label={options.label} options={options.values} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">{children}</div>
    </div>
  );
}
