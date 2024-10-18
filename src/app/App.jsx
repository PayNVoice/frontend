// ROUTER
import Router from "../router/Router";
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { config } from "../config/config";
import { ContractProvider } from '../context/contractContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const queryClient = new QueryClient();
  return (
    <div> 
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <ContractProvider>
              <Router />
              <ToastContainer />
            </ContractProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>

  )
  
  
}

export default App;