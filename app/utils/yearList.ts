const currentYear = new Date().getFullYear();

export const yearsList = Array.from(
  { length: currentYear - 2014 },
  (_, index) => ({
    value: 2015 + index,
    label: 2015 + index,
  })
);
