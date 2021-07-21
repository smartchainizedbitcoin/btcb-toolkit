import Web3 from "web3";
import { Contract } from "web3-eth-contract";
export declare const getErc721Contract: (address: string, web3?: Web3) => Contract;
export declare const getProfileContract: (web3: Web3, chainId: number) => Contract;
