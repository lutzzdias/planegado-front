import { InfoIcon } from "lucide-react";

export function ProfitArea() {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-center gap-1 text-sm font-normal text-gray-600">
        Lucro
        <InfoIcon className="h-3.5 w-3.5 cursor-pointer" />
      </div>
      <div className="flex flex-1 flex-col items-center gap-1 text-lg font-semibold">
        <div className="flex w-full text-xs font-normal text-white">
          {/* TODO: make flex-<value> be dynamic  */}
          <div
            className={`flex flex-1 items-center justify-between rounded-s-md bg-primary px-3 py-2`}
          >
            <span>Investidor</span>
            <span>R$ 21.780,50</span>
            <span>50%</span>
          </div>
          <div
            className={`flex flex-1 items-center justify-between rounded-e-md bg-gray-500 px-3 py-2`}
          >
            <span>50%</span>
            <span>R$ 21.780,50</span>
            <span>Produtor</span>
          </div>
        </div>
        R$ 43.561,00
      </div>
    </div>
  );
}
