export interface FlattenArray {
  <T>(input: Array<Array<T>>): Array<T>;
}

export const splitInParts = <T>(input: Array<T>, partLength: number): Array<Array<T>> => {
  let output: Array<Array<T>> = [];
  for (let i = 0; i <= input.length - partLength; i += partLength) {
    output.push(input.slice(i, i + partLength));
  }
  const leftOversLength = input.length % partLength;
  if (leftOversLength > 0) {
    output.push(input.slice(-leftOversLength));
  }
  return output;
};

export const flattenArray: FlattenArray = (input) => {
  return Array(0).concat(...input);
};