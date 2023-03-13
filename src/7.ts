export type Employee = {
  dateHired: Date;
};

export const mergeSort = (employees: Employee[]) => {
  const arrayLength = employees.length;

  if (arrayLength === 1) {
    return employees;
  }

  const array1 = employees.slice(0, Math.ceil(arrayLength / 2));
  const array2 = employees.slice(Math.ceil(arrayLength / 2));

  const mergeSort1 = mergeSort(array1);
  const mergeSort2 = mergeSort(array2);

  return merge(mergeSort1, mergeSort2);
};

const merge = (employees1: Employee[], employees2: Employee[]) => {
  const employees: Employee[] = [];

  while (employees1.length && employees2.length) {
    if (employees1[0].dateHired > employees2[0].dateHired) {
      employees.push(employees2.shift());
    } else {
      employees.push(employees1.shift());
    }
  }

  while (employees1.length) {
    employees.push(employees1.shift());
  }

  while (employees2.length) {
    employees.push(employees2.shift());
  }

  return employees;
};
