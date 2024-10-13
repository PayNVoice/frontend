import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Wallet } from 'lucide-react';
 const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className='flex bg-gradient-to-r to-[#568ce2] from-[#1f3a63] text-white rounded-md p-2' onClick={openConnectModal} type="button">
                   <Wallet className='mr-2'/> Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button className='flex bg-gradient-to-r to-[#568ce2] from-[#1f3a63] text-white rounded-md p-3' onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div className='flex bg-gradient-to-r to-[#568ce2] from-[#1f3a63] font-semibold text-white rounded-md p-2' style={{ display: 'flex', gap: 12 }}>
                 
                  <button  onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default ConnectWalletButton;