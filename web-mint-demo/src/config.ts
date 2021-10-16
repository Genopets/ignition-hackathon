type NetworkVersion = 'mainnet-beta' | 'devnet';

export const NETWORK_VERSION: NetworkVersion =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === `main`
    ? `mainnet-beta`
    : `devnet`;
