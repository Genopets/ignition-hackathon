import { updateMetadata, Data, Creator } from '../metaplex';
import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import fromWallet from './key-pair';

const updateTokenMetadata = async (newMetadata: Data, mintAddress: string) => {
  // Connect to cluster
  const connection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
    'confirmed'
  );

  const mint = new splToken.Token(
    connection,
    new web3.PublicKey(mintAddress),
    splToken.TOKEN_PROGRAM_ID,
    fromWallet
  );

  const transaction = new web3.Transaction();

  await updateMetadata(
    newMetadata,
    undefined,
    true,
    mint.publicKey.toString(),
    fromWallet.publicKey.toString(),
    transaction.instructions
  );

  // Sign transaction, broadcast, and confirm
  const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
    { commitment: 'confirmed' }
  );

  console.log(signature);
};

export default updateTokenMetadata;
