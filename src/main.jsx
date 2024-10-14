// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
// import Router from "../router/Router";
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { config } from "./config/config";
import React from "react";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);