import { TokenEVM } from "./types";
import env from "@config/env";

export const areEqualTokens = (a: TokenEVM, b: TokenEVM) => {
  return a.token === b.token && a.tokenId === b.tokenId;
};

export const formatEVMAddress = (
  address: string | undefined,
): string | undefined => {
  if (address === undefined) return undefined;
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4,
  )}`;
};

export const getAlchemyApiKey = (chainId: number) => {
  return env.REACT_APP_ALCHEMY_API_KEYS[chainId];
};
