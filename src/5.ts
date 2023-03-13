import { z } from "zod";

export enum Side {
  buy,
  sell,
}

export enum Type {
  limit,
  market,
}

const validator = z.object({
  symbol: z.string().min(1).max(4),
  price: z.bigint().nonnegative(),
  quantity: z.bigint().nonnegative(),
  side: z.nativeEnum(Side),
  type: z.nativeEnum(Type),
});

type Data = z.infer<typeof validator>;

export const encodeToBuffer = (input: Data) => {
  validator.parse(input);

  const symbolBuffer = Buffer.alloc(4, 0, "utf-8");
  symbolBuffer.write(input.symbol);

  const priceBuffer = Buffer.alloc(8);
  priceBuffer.writeBigUInt64BE(input.price);

  const quantityBuffer = Buffer.alloc(8);
  quantityBuffer.writeBigUInt64BE(input.quantity);

  const sideBuffer = Buffer.alloc(1);
  sideBuffer.writeUInt8(input.side);

  const typeBuffer = Buffer.alloc(1);
  typeBuffer.writeUInt8(input.type);

  return Buffer.concat([
    symbolBuffer,
    priceBuffer,
    quantityBuffer,
    sideBuffer,
    typeBuffer,
  ]);
};
