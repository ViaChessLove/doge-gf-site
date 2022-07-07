import { ButtonInterface } from "../components/How to buy/HowToBuy";
import { StepCardProps } from "../components/How to buy/StepCard";

export const howToBuyData: StepCardProps[] = [
    {
        id: 1,
        title: 'Create a Metamask Wallet',
        text: "$DOGEGF token is available on the Ethereum blockchain. MetaMask is the market leader in ERC20 (Ethereum) wallets. On Google Chrome, visit metamask.io to download the extension and set up a wallet. On mobile? Get MetaMask's app for iPhone or Android."
    },
    {
        id: 2,
        title: 'Send $ETH to MetaMask',
        text: "Buy Ethereum through MetaMask or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance)."
    },
    {
        id: 3,
        title: 'Visit Uniswap or Sushiswap',
        text: "You can currently buy $DOGEGF on Uniswap or Sushiswap. Be carefull to use only and only this contract address: 0xfb130d93e49dca13264344966a611dc79a456bc5"
    },
    {
        id: 4,
        title: 'Swap $ETH for $DOGEGF',
        text: "Enter the amount of $ETH you would like to swap for $DOGEGF. Click Connect Wallet then Swap."
    },
    {
        id: '*',
        title: 'Recommendation',
        text: 'In order for your transaction to happen quickly and succesfully we recommend you to pay at least the average gas price and set an appropriate slippage tolerance depending on the volatility at the moment of your transaction. Gas prices can be checked on Etherscan.'
    }
]

export const howToBuyLinks: ButtonInterface[] = [
    {
        id: 'uniswap',
        place: 'uniswap',
        href: 'https://app.uniswap.org/#/swap?outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5&chain=mainnet'
    },
    {
        id: 'sushiswap',
        place: 'sushiswap',
        href: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xfb130d93E49DcA13264344966A611dc79a456Bc5'
    }
]