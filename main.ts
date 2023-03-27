import {Web3} from "web3";

const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network")

export const ContractAbi = [
  {
    inputs: [],
    name: '_depositFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;


const contract = new web3.eth.Contract(
  ContractAbi,
  "0x9C542e76BcB15240ac66326933b9BC3eAC7Cb331",
);

(async function() {
  console.log(await contract.methods._depositFee().call())
})()