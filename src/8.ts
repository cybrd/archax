type Data = {
  symbol: string;
  price: number;
  quantity: number;
  side: number;
  type: number;
};

export const b: Data = {
  symbol: "a",
  price: 0,
  quantity: 0,
  side: 0,
  type: 0,
};

export const a: typeof b = {
  symbol: "a",
  price: 0,
  quantity: 0,
  side: 0,
  type: 0,
};
