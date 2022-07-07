export interface FaqContent {
    id: number;
    question: string;
    answer: string;
    margin?: boolean;
    isShow: boolean
}
export const faqs: FaqContent[] = [
    {
        id: 1,
        question: "Why doesn’t the MetaMask wallet show the fiat value of my $DOGEGF tokens?",
        answer: "Sometimes errors can occur, and this is a common problem when it comes to MetaMask. There are multiple ways for checking the worth of your $DOGEGF tokens.",
        margin: true,
        isShow: false
    },
    {
        id: 2,
        question: "How to add my $DOGEGF tokens in Metamask?",
        answer: "If your $DOGEGF tokens don’t appear automatically in your wallet you have two options for solving this issue",
        margin: true,
        isShow: false
    },
    {
        id: 3,
        question: "Will there be more burn events over time?",
        answer: "Yes, $DOGEGF will reduce its supply over time meaning that it will burn tokens from circulation. Burned $DOGEGF tokens have already been sent to a Black Hole wallet which nobody has access to.",
        margin: true,
        isShow: false
    },
    {
        id: 4,
        question: 'What is the difference between "Circulating Supply", "Total Supply", and "Max Supply"?',
        answer: "Circulating Supply is the best approximation of the number of coins that are circulating in the market and in the general public's hands.",
        margin: true,
        isShow: false
    },
    {
        id: 5,
        question: "What is the contract address?",
        answer: "The contract address is 0xfb130d93e49dca13264344966a611dc79a456bc5",
        margin: true,
        isShow: false
    },
    {
        id: 6,
        question: "What is slippage?",
        answer: "Slippage tolerance is a setting for the amount of price slippage you are willing to accept for a trade. By setting slippage tolerance, you basically are setting a minimum amount on how many tokens you will accept, in the event that the price increases or decreases.",
        margin: true,
        isShow: false
    },
    {
        id: 7,
        question: "Why do I have to pay fees?",
        answer: "On the Ethereum blockchain, each transaction requires computational resources to execute and gas refers to the cost necessary to perform a transaction on the network. Miners set the price of gas based on supply and demand for the computational power of the network needed to process smart contracts and other transactions.",
        margin: false,
        isShow: false
    }
  ]