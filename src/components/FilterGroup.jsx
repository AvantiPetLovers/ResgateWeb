import { translate } from "../utils/EnumTranslator";

export default function FilterGroup({ label, options, selectedOptions, onChange }) {
    return (
      <div className="flex flex-col gap-2 my-4 pb-2 border-b-2">
        <span className="font-bold text-lg text-sky-950">{label}:</span>
        <div className="flex flex-col gap-1">
          {options.map((value) => (
            <div key={value} className="text-xs text-sky-950 font-semibold flex items-center">
              <input
                type="checkbox"
                value={value}
                checked={selectedOptions.includes(value)}
                onChange={(e) => onChange(e)}
                className="mr-2"
              />
              <span className="text-sm">{translate(value)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  