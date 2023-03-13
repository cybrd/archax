import exp from "constants";
import { encodeToBuffer, Side, Type } from "./5";
import { decodeFromBuffer } from "./6";

test("works", () => {
  const data = {
    symbol: "qb",
    price: BigInt(123),
    quantity: BigInt(123),
    side: Side.buy,
    type: Type.limit,
  };
  console.log(data);

  const buffer = encodeToBuffer(data);

  const decoded = decodeFromBuffer(buffer);
  console.log(decoded);

  expect(decoded).toEqual(data);
});
