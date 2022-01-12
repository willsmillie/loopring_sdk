import { ChainId } from "../defs/web3_defs";
import * as contract from "../api/contract_api";

import { DEFAULT_TIMEOUT } from "../defs/loopring_constants";

import { loopring_exported_account, web3 } from "./utils";

import { ExchangeAPI } from "../api/exchange_api";
import { NFTAPI, NFTType } from "../api/nft_api";

let api: ExchangeAPI;
let nft: NFTAPI;
const gasPrice = 30;

const gasLimit = 200000;

//test should change the id number
const nftId =
  "0x000000000000000000000000000000000000000000000000000000000000008c";
describe("nft test", function () {
  beforeEach(() => {
    api = new ExchangeAPI({ chainId: ChainId.GOERLI });
    nft = new NFTAPI({ chainId: ChainId.GOERLI });
  });

  it(
    "approveNFT",
    async () => {
      const nonce = await contract.getNonce(
        web3,
        loopring_exported_account.address
      );
      const response = await nft.approveNFT({
        web3,
        from: loopring_exported_account.address,
        depositAddress: loopring_exported_account.depositAddr,
        tokenAddress: loopring_exported_account.nftTokenAddress,
        tokenId: nftId,
        nftType: NFTType.ERC1155,
        gasPrice,
        gasLimit,
        chainId: ChainId.GOERLI,
        nonce,
        approved: true,
        sendByMetaMask: true,
      });
      console.log(`nonce: ${nonce} approveNFT: ${response?.result}`);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "approveNFT",
    async () => {
      const nonce = await contract.getNonce(
        web3,
        loopring_exported_account.address
      );
      const response = await nft.approveNFT({
        web3,
        from: loopring_exported_account.address,
        depositAddress: loopring_exported_account.depositAddr,
        tokenAddress: loopring_exported_account.nftTokenAddress,
        tokenId: nftId,
        nftType: NFTType.ERC1155,
        gasPrice,
        gasLimit,
        chainId: ChainId.GOERLI,
        nonce,
        sendByMetaMask: true,
      });
      console.log(`nonce: ${nonce} approveNFT: ${response?.result}`);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "notApproveNFT",
    async () => {
      const nonce = await contract.getNonce(
        web3,
        loopring_exported_account.address
      );
      const response = await nft.approveNFT({
        web3,
        from: loopring_exported_account.address,
        depositAddress: loopring_exported_account.depositAddr,
        tokenAddress: loopring_exported_account.nftTokenAddress,
        tokenId: nftId,
        nftType: NFTType.ERC1155,
        gasPrice,
        gasLimit,
        chainId: ChainId.GOERLI,
        nonce,
        approved: false,
        sendByMetaMask: true,
      });
      console.log(`nonce: ${nonce} approveNFT: ${response?.result}`);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getInfoForNFTTokens test",
    async () => {
      const response = await nft.getInfoForNFTTokens({
        nftDatas: [
          "0x1197d20d12bc9f80a4902c04c5a4b88371d32b0c14adce746eeea564850f47a5",
          "0x10e7f3b7ff37e4ebffabedb9fa19c66c63482b4b642d176068517c505edcd123",
        ],
      });
      console.log(`getInfoForNFTTokens: response: `, JSON.stringify(response));
    },
    DEFAULT_TIMEOUT
  );
  it(
    "deposit NFT ERC1155",
    async () => {
      const nonce = await contract.getNonce(
        web3,
        loopring_exported_account.address
      );
      const response = await nft.depositNFT({
        web3,
        from: loopring_exported_account.address,
        exchangeAddress: loopring_exported_account.exchangeAddr,
        nftType: NFTType.ERC1155,
        tokenAddress: loopring_exported_account.nftTokenAddress,
        nftId: loopring_exported_account.nftId,
        amount: 1,
        gasPrice,
        gasLimit,
        chainId: ChainId.GOERLI,
        nonce,
        sendByMetaMask: true,
      });

      console.log(`nonce: ${nonce} deposit NFT ERC1155: `, response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "isApprovedForAll",
    async () => {
      const response = await nft.isApprovedForAll({
        web3,
        from: loopring_exported_account.address,
        exchangeAddress: loopring_exported_account.exchangeAddr,
        nftType: NFTType.ERC1155,
        tokenAddress: loopring_exported_account.nftTokenAddress,
      });
      console.log(`check is approveNFT`, response);
    },
    DEFAULT_TIMEOUT
  );

  it("getNFTBalance", async () => {
    const response = await nft.getNFTBalance({
      web3,
      account: loopring_exported_account.address,
      tokenAddress: loopring_exported_account.nftTokenAddress,
      nftId: loopring_exported_account.nftId,
      nftType: NFTType.ERC1155,
    });
    console.log(response);
  });

  it("computeNFTAddress", async () => {
    const response = nft.computeNFTAddress({
      nftOwner: "0xE20cF871f1646d8651ee9dC95AAB1d93160b3467",
      nftFactory: "0x40F2C1770E11c5bbA3A26aEeF89616D209705C5D",
      chainId: ChainId.GOERLI,
    });
    console.log(
      `computeNFTAddress:`,
      response,
      "0xee354d81778a4c5a08fd9dbeb5cfd01a840a746d"
    );
  });
});
