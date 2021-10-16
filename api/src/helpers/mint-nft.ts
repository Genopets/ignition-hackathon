import { createMetadata, Data } from '../metaplex';
import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import fromWallet from './key-pair';

const mintToken = async (metadata: Data) => {
  // Connect to cluster
  const connection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
    'confirmed'
  );

  // Generate a new wallet to receive newly minted token
  // const toWallet = new web3.PublicKey(address);

  console.log('Creating new token mint...');
  // Create new token mint
  const mint = await splToken.Token.createMint(
    connection,
    fromWallet,
    fromWallet.publicKey,
    null,
    0,
    splToken.TOKEN_PROGRAM_ID
  );

  console.log('Token mint created.');

  // Get the token account of the fromWallet Solana address, if it does not exist, create it
  const fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey
  );

  console.log('Minting 1 token...');
  // Minting 1 new token to the "fromTokenAccount" account we just returned/created
  await mint.mintTo(fromTokenAccount.address, fromWallet.publicKey, [], 1);
  console.log('1 token minted.');

  console.log('Adding metadata...');

  const transaction = new web3.Transaction();

  const metadataAccount = await createMetadata(
    metadata,
    fromWallet.publicKey.toString(),
    mint.publicKey.toString(),
    fromWallet.publicKey.toString(),
    transaction.instructions,
    fromWallet.publicKey.toString()
  );

  // Sign transaction, broadcast, and confirm
  const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
    { commitment: 'confirmed' }
  );

  console.log('SIGNATURE', signature);

  console.log(metadataAccount);

  console.log('Freezing mint authority...');

  await mint.setAuthority(
    mint.publicKey,
    null, // close it mint account, or you can pass new pubkey to it
    'MintTokens', // authority type
    fromWallet.publicKey, // current authority
    []
  );

  console.log('Mint authority locked.');

  return mint.publicKey.toString();

  // console.log('Send it out to this wallet');

  // //get the token account of the toWallet Solana address, if it does not exist, create it
  // const toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(toWallet);
};

export default mintToken;
