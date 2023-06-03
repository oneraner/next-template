import React, { useEffect, useMemo, useState } from "react";

interface DoubleSliderProps {
  /**
   * Is this the principal call to action on the page?
   */
  min?: number;
  max?: number;
  defaultValue?: [number, number];
  firstSlider?: string;
  secondSlider?: string;
  trackClass?: string;
  onChange?: (value: [number, number]) => void;
}

const defaultSliderCSS = `
[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white 
[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_1px_#c6c6c6] 
[&-webkit-slider-thumb:hover]:bg-[#f7f7f7] [&::-webkit-slider-thumb:active]:shadow-[0_0_3px_#387bbe]
`;

export const DoubleSlider = ({
  min = 0,
  max = 100,
  defaultValue = [0, 100],
  firstSlider,
  secondSlider,
  trackClass,
  onChange = () => undefined,
  ...props
}: DoubleSliderProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="relative">
      <input
        type="range"
        min={min}
        max={max}
        value={value[0]}
        onChange={e => {
          setValue([Number(e.target.value), value[1]]);
          onChange([Number(e.target.value), value[1]]);
        }}
        className={`absolute appearance-none pointer-events-none w-full 
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer 
        [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:relative 
         ${firstSlider ? firstSlider : defaultSliderCSS} ${
          trackClass ? trackClass : "h-0.5 bg-[#c6c6c6]"
        }`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={e => {
          setValue([value[0], Number(e.target.value)]);
          onChange([value[0], Number(e.target.value)]);
        }}
        className={`absolute appearance-none pointer-events-none w-full 
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer 
        [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:relative 
         ${secondSlider ? secondSlider : defaultSliderCSS} ${
          trackClass ? trackClass : "h-0.5 bg-[#c6c6c6]"
        }`}
      />
    </div>
  );
};
