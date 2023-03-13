import { mergeSort, type Employee } from "./7";

test.only("works", () => {
  const data: Employee[] = [];

  data.push({ dateHired: new Date("2023-03-13") });
  data.push({ dateHired: new Date("2023-03-09") });
  data.push({ dateHired: new Date("2023-03-08") });
  data.push({ dateHired: new Date("2023-03-12") });
  data.push({ dateHired: new Date("2023-03-11") });

  const sorted = mergeSort(data);
  expect(sorted[0].dateHired).toStrictEqual(new Date("2023-03-08"));
});
