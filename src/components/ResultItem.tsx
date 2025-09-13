import { InfoIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  hint?: string;
}

export function ResultItem(props: Props) {
  const { title, hint, value } = props;

  return (
    <div className="flex w-full flex-col text-lg font-semibold">
      <div className="flex items-center gap-1 text-sm font-normal text-gray-600">
        {title}
        {hint && <InfoIcon className="h-3.5 w-3.5 cursor-pointer" />}
      </div>
      {value}
    </div>
  );
}
