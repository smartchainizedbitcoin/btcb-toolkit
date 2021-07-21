import Web3 from "web3";
import { Nft, NftUriData } from "../types";
/**
 * Gets the identifier key based on the nft address
 * Helpful for looking up the key when all you have is the address
 */
export declare const getIdentifierKeyFromAddress: (nftAddress: string, chainId: number) => string | null;
/**
 * Some sources like Pancake do not return HTTP tokenURI's
 */
export declare const getTokenUrl: (tokenUri: string) => string;
export declare const getTokenUriData: (nftAddress: string, tokenId: number, web3: Web3) => Promise<NftUriData | null>;
export declare const getNftByTokenId: (nftAddress: string, tokenId: number, web3: Web3, chainId: number) => Promise<Nft | null>;
