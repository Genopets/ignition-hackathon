import sha256 from 'sha256';

export default function hashAnswers(concatenatedAnswers: string): Uint8Array {
  console.log(concatenatedAnswers);

  const result: string = sha256(concatenatedAnswers);

  const hexArray = result?.match(/.{1,2}/g);

  if (hexArray) {
    const arrResult = new Uint8Array(
      hexArray.map((byte) => parseInt(byte, 16) % 3),
    );

    return arrResult.slice(0, 8);
  }

  return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
}
