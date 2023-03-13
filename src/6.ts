export const decodeFromBuffer = (buffer: Buffer) => {
  const symbolBuffer = buffer.subarray(0, 4);
  const symbolBufferEnd = symbolBuffer.indexOf(0x00);
  let symbolValue = "";
  if (symbolBufferEnd !== -1) {
    symbolValue = symbolBuffer.subarray(0, symbolBufferEnd).toString();
  } else {
    symbolValue = symbolBuffer.toString();
  }

  const priceBuffer = buffer.subarray(4, 12);
  const priceValue = priceBuffer.readBigInt64BE();

  const quantityBuffer = buffer.subarray(12, 20);
  const quantityValue = quantityBuffer.readBigInt64BE();

  const sideBuffer = buffer.subarray(20, 21);
  const sideValue = sideBuffer.readUInt8();

  const typeBuffer = buffer.subarray(21, 22);
  const typeValue = typeBuffer.readUInt8();

  const data = {
    symbol: symbolValue,
    price: priceValue,
    quantity: quantityValue,
    side: sideValue,
    type: typeValue,
  };

  return data;
};
