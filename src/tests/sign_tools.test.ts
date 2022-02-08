import { ChainId, ConnectorNames, ExchangeAPI, generateKeyPair } from "..";

import { loopring_exported_account, web3 as web3_1 } from "./utils";

import Web3 from "web3";
import { BaseAPI } from "../api/base_api";

const PrivateKeyProvider = require("truffle-privatekey-provider");

const TIMEOUT = 30000;
let api: TextMocAPI;
export class TextMocAPI extends BaseAPI {
  public testGenErr(err: any) {
    this.genErr(err);
  }
}
describe("sign_tools", function () {
  beforeEach(async () => {
    api = new TextMocAPI({ chainId: ChainId.GOERLI });
    return;
  }, TIMEOUT);

  it(
    "gen_Err",
    async () => {
      const err = new Error("err: Not supported on this device");
      console.log("genErr:", api.testGenErr(err));
    },
    TIMEOUT
  );

  it(
    "gen_Err2",
    async () => {
      const err = new Error("err: User denied message signature");
      console.log("genErr:", api.testGenErr(err));
    },
    TIMEOUT
  );

  it(
    "gen_Err3",
    async () => {
      const err = new Error("err: User  message signature");
      console.log("genErr:", api.testGenErr(err));
    },
    TIMEOUT
  );

  it(
    "personalSign1",
    async () => {
      const exchangeApi = new ExchangeAPI({ chainId: ChainId.GOERLI });

      const addr = loopring_exported_account.address;

      const { accInfo } = await exchangeApi.getAccount({ owner: addr });

      console.log("loopring_exported_account:", accInfo);

      const eddsaKey = await generateKeyPair({
        web3: web3_1,
        address: addr,
        keySeed: BaseAPI.KEY_MESSAGE.replace(
          "${exchangeAddress}",
          loopring_exported_account.exchangeAddr
        ).replace("${nonce}", (accInfo.nonce - 1).toString()),
        walletType: ConnectorNames.MetaMask,
        chainId: ChainId.GOERLI,
      });

      console.log("eddsaKey:", eddsaKey);
    },
    TIMEOUT
  );

  it(
    "personalSign2",
    async () => {
      const exchangeApi = new ExchangeAPI({ chainId: ChainId.GOERLI });

      const addr = "0xb6d8c39D5528357dBCe6BEd82aC71c74e9D19079";

      const provider = new PrivateKeyProvider(
        "e020ed769032ba95d9a5207687a663d6198fe2f5cedf28a250f7cbd8c81a5263",
        "https://goerli.infura.io/v3/a06ed9c6b5424b61beafff27ecc3abf3"
      );
      const web3 = new Web3(provider);

      const { accInfo } = await exchangeApi.getAccount({ owner: addr });

      console.log("loopring_exported_account:", accInfo);

      const eddsaKey = await generateKeyPair({
        web3,
        address: addr,
        keySeed: BaseAPI.KEY_MESSAGE.replace(
          "${exchangeAddress}",
          loopring_exported_account.exchangeAddr
        ).replace("${nonce}", (accInfo.nonce - 1).toString()),
        walletType: ConnectorNames.MetaMask,
        chainId: ChainId.GOERLI,
      });

      console.log("eddsaKey:", eddsaKey);
    },
    TIMEOUT
  );

  it(
    "personalSign3",
    async () => {
      const exchangeApi = new ExchangeAPI({ chainId: ChainId.GOERLI });

      const addr = "0x8cdc4B6C1FA234AE54c53e56376359bFC497f2e6";

      const provider = new PrivateKeyProvider(
        "c065fd2e8249f3e1bb89f1b642790798279182b46545a4b15498bfde08489882",
        "https://goerli.infura.io/v3/a06ed9c6b5424b61beafff27ecc3abf3"
      );
      const web3 = new Web3(provider);

      const { accInfo } = await exchangeApi.getAccount({ owner: addr });

      console.log("loopring_exported_account:", accInfo);

      const eddsaKey = await generateKeyPair({
        web3,
        address: addr,
        keySeed: BaseAPI.KEY_MESSAGE.replace(
          "${exchangeAddress}",
          loopring_exported_account.exchangeAddr
        ).replace("${nonce}", (accInfo.nonce - 1).toString()),
        walletType: ConnectorNames.MetaMask,
        chainId: ChainId.GOERLI,
      });

      console.log("eddsaKey:", eddsaKey);
    },
    TIMEOUT
  );
});

export default {};
