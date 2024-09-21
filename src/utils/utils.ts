const range = (start: number, end: number, step = 1): number[] => {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const getTotalCharCode = (phrase: string): number => {
  return phrase.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
};

export { range };
