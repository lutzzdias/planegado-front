import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  content: string;
}

export default function HintPopover(props: Props) {
  const { children, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative">
      <PopoverButton
        as="div"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </PopoverButton>

      {isOpen && (
        <PopoverPanel
          static
          transition
          anchor="top"
          className="absolute z-10 rounded-lg bg-gray-100/50 px-3 py-1.5 shadow-lg transition duration-150 ease-in-out [--anchor-gap:--spacing(2)] data-closed:translate-y-1 data-closed:opacity-0"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {content}
        </PopoverPanel>
      )}
    </Popover>
  );
}
