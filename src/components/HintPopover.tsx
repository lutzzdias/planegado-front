import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: string;
}

export default function HintPopover(props: Props) {
  const { children, content } = props;

  return (
    <Popover className="relative">
      <PopoverButton as="div">{children}</PopoverButton>

      <PopoverPanel
        transition
        anchor="top"
        className="w-xs rounded-lg border-1 border-gray-900/10 bg-white px-3 py-1.5 shadow-lg transition duration-150 ease-in-out [--anchor-gap:--spacing(2)] data-closed:translate-y-1 data-closed:opacity-0"
      >
        {content}
      </PopoverPanel>
    </Popover>
  );
}
