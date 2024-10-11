import '@rainbow-me/rainbowkit/styles.css';
import { createConfig, http } from 'wagmi'
import { injected, metaMask, safe  } from 'wagmi/connectors'
import {
    mainnet,
    lisk,
    liskSepolia,
  } from 'wagmi/chains';
  
export const config = createConfig({
    chains: [liskSepolia, lisk,mainnet],
    connectors: [injected(), metaMask(), safe()],
    transports: {
      [lisk.id]: http(),
      [mainnet.id]: http(),
      [liskSepolia.id]: http(),
    },
    ssr : true
});