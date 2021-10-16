import { Keypair } from '@solana/web3.js';

const keyPair = JSON.parse(process?.env?.KEYPAIR || '');

const keyPairUint8 = new Uint8Array(keyPair);

const wallet = Keypair.fromSecretKey(keyPairUint8);

export default wallet;
