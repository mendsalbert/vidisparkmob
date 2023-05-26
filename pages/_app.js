import Head from "next/head";
import { useEffect, useContext } from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { countdown } from "../src/utils";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { merge } from "lodash";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MoralisProvider } from "react-moralis";

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
  ApolloProvider,
} from "@apollo/client";
import { ComposeClient } from "@composedb/client";
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import { DIDSession } from "did-session";
import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { AuthProvider } from "../authContext";

// import { AuthProvider } from "./authContext";
// AuthProvider/
const xdcApothem = {
  id: 365,
  name: "Theta",
  network: "Theta Network (TestNet)",
  nativeCurrency: {
    decimals: 18,
    name: "Theta-Network",
    symbol: "TFUEL",
  },
  rpcUrls: {
    default: {
      http: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Apothem Explorer",
      url: "https://testnet-explorer.thetatoken.org/",
    },
  },
  testnet: true,
};

const networks = {
  theta: {
    chainId: `0x${Number(365).toString(16)}`,
    chainName: "Theta Testnet",
    nativeCurrency: {
      name: "Theta Testnet",
      symbol: "TFUEL",
      decimals: 18,
    },
    rpcUrls: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
    blockExplorerUrls: ["https://testnet-explorer.thetatoken.org/"],
  },
};

const changeNetwork = async () => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks["theta"],
        },
      ],
    });
  } catch (err) {
    alert(err.message);
  }
};

const { provider, chains } = configureChains(
  [xdcApothem],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Sustain",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    countdown();
  }, []);

  const { address, isConnected } = useAccount();

  // const { setupWeaveDB } = authenticationContext;

  useEffect(async () => {
    changeNetwork();
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/svg/logo.svg" />

        <title>Vidispark</title>
      </Head>
      {/* <MoralisProvider
        appId="bce381b4-7402-46e9-818d-f050e9e590dd"
        serverUrl="https://jtog9qjv1t2r.usemoralis.com:2053/server"
      > */}
      <AuthProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={myTheme}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </AuthProvider>
      {/* </MoralisProvider> */}
    </Provider>
  );
}

export default MyApp;
