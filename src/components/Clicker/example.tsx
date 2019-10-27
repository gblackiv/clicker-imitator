import React from 'react';
// import { NumericInput } from "@blueprintjs/core/lib/cjs";

type MaybeNumber = number | undefined;

export interface IExampleCompProps {
  defaultValue?: number; // That question mark means "optional" and it make the type be `number | undefined` (which is the same as MaybeNumber)
  onChange(newVal: MaybeNumber, oldVal: MaybeNumber): void;
}

const ExampleComp: React.SFC<IExampleCompProps> = (props: IExampleCompProps) => {
  const [val, setVal] = React.useState<MaybeNumber>(toMaybeNumber(props.defaultValue));

  function valueChanged(_num: number, txt: string): void {
    let parsed: MaybeNumber = toMaybeNumber(parseFloat(txt));
    props.onChange(val, parsed);
    setVal(parsed);
  }

  return (
    <div>
      {/* <NumericInput onValueChange={valueChanged} /> */}
    </div>
  );
};

export default ExampleComp;

// Null/undefined guard.
export function isNullOrUndef(arg: any): arg is null | undefined {
  return arg !== null && arg !== undefined;
}

// Removes NaNness. Return undefined if it's NaN or undefined.
export function toMaybeNumber(num: number | undefined): number | undefined {
  return isNullOrUndef(num) || isNaN(num) ? undefined : num;
}