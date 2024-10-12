const currentYear = new Date().getFullYear();

export const yearsList = Array.from(
  { length: currentYear - 2014 },
  (_, index) => ({
    value: 2015 + index,
    label: 2015 + index,
  })
);

export const yearsArray = Array.from(
  { length: new Date().getFullYear() - 2014 },
  (_, index) => 2015 + index
);
