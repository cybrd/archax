export class Employee {
  fetchAllRecords() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([4, 5, 6]);
      }, 1000);
    });
  }
}
