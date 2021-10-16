import express from 'express';
import mintNFT from '../helpers/mint-nft';
import updateTokenMetadata from '../helpers/update-metadata';
import { Data, Creator } from '../metaplex';
import wallet from '../helpers/key-pair';
import { publicKey } from '../metaplex/utils/layout';

const router = express.Router();

router.post('/mint-nft', async function (req, res, next) {
  try {
    const { name, symbol, uri } = req.body;
    const metadata = new Data({
      name,
      symbol,
      uri,
      sellerFeeBasisPoints: 500,
      creators: [
        new Creator({
          address: wallet.publicKey.toString(),
          verified: true,
          share: 100,
        }),
      ],
    });

    const mint = await mintNFT(metadata);

    res.status(200).send(mint);
  } catch (err) {
    next(err);
  }
});

router.post('/mutate-nft', async function (req, res, next) {
  try {
    const { name, symbol, uri, mintAddress } = req.body;
    const metadata = new Data({
      name,
      symbol,
      uri,
      sellerFeeBasisPoints: 500,
      creators: [
        new Creator({
          address: wallet.publicKey.toString(),
          verified: true,
          share: 100,
        }),
      ],
    });

    await updateTokenMetadata(metadata, mintAddress);

    res.status(200).send('ok');
  } catch (err) {
    next(err);
  }
});

export default router;
