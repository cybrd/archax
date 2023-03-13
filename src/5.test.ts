import { encodeToBuffer, Side, Type } from "./5";

test("works", () => {
  encodeToBuffer({
    symbol: "qwe1",
    price: BigInt(123),
    quantity: BigInt(123),
    side: Side.buy,
    type: Type.limit,
  });
});
