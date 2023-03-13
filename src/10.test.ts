import { Employee } from "./10";

test("mocked", async () => {
  jest
    .spyOn(Employee.prototype, "fetchAllRecords")
    .mockImplementation(() => Promise.resolve([1, 2, 3]));

  const employee = new Employee();

  const result = await employee.fetchAllRecords();

  expect(result).toStrictEqual([1, 2, 3]);
});
