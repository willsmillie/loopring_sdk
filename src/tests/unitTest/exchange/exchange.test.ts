import { DEFAULT_TIMEOUT, LoopringAPI } from "../../MockData";
import * as sdk from "../../../index";
describe("ExchangeAPI test", function () {
  it(
    "getExchangeInfo",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getExchangeInfo();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getWithdrawalAgents",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getWithdrawalAgents({
        tokenId: 1,
        amount: "10000000000",
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getCandlestick",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getCandlestick({
        market: "LRC-ETH",
        interval: sdk.TradingInterval.min15,
        limit: 96,
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getAccountServices",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getAccountServices({});
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getExchangeFeeInfo",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getExchangeFeeInfo<any>();
      console.log(response);
      console.log(
        response.raw_data[sdk.VipCatergory.ORDERBOOK_TRADING_FEES_STABLECOIN]
      );
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getProtocolPortrait",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getProtocolPortrait();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getRecommendedMarkets",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getRecommendedMarkets();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getGasPrice",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getGasPrice();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getGasPriceRange",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getGasPriceRange();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getMarketTrades",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getMarketTrades<any>({
        market: "ETH-USDT",
      });
      console.log(response.raw_data.trades);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getRelayerCurrentTime",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getRelayerCurrentTime();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getFiatPriceUSD",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getFiatPrice({
        legal: "USD",
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getFiatPriceCNY",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getFiatPrice({
        legal: "CNY",
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getMarkets",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getMarkets();
      console.log(response);
      console.log(response.pairs.LRC.tokenList);

      console.log(
        "hasMarket LRC-ETH:",
        sdk.hasMarket(response.marketArr, "LRC-ETH")
      );
      console.log(
        "market 1:",
        sdk.getExistedMarket(response.marketArr, "LRC", "ETH")
      );
      console.log(
        "market 2:",
        sdk.getExistedMarket(response.marketArr, "ETH", "LRC")
      );
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getTokens",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getTokens<any>();
      console.log(response);
      console.log(response.raw_data[0]);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getDepth",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getDepth({
        market: "LRC-ETH",
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getTicker",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getTicker({
        market: "LRC-ETH",
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getMixMarkets",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getMixMarkets();
      console.log(response);
      console.log(response.pairs.LRC.tokenList);
      console.log(
        "hasMarket LRC-ETH:",
        sdk.hasMarket(response.marketArr, "LRC-ETH")
      );
      console.log(
        "market 1:",
        sdk.getExistedMarket(response.marketArr, "LRC", "ETH")
      );
      console.log(
        "market 2:",
        sdk.getExistedMarket(response.marketArr, "ETH", "LRC")
      );
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getMixDepth",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getMixDepth({
        market: "LRC-ETH",
      });
      console.log(response);
      console.log(response.depth.bids);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getMixTicker",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getMixTicker({
        market: ["LRC-ETH", "ETH-USDC", "DAI-USDT"].join(","),
      });
      console.log(response.tickMap["DAI-USDT"]);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getAllMixTickers",
    async () => {
      const response: any = await LoopringAPI.exchangeAPI.getAllMixTickers();
      console.log(response?.tickMap);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getAllTickers",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getAllTickers();
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getMarketTrades_err",
    async () => {
      const req: sdk.GetMarketTradesRequest = {
        market: "LRC-ETH_Not_Existed",
      };
      const response = await LoopringAPI.exchangeAPI.getMarketTrades<any>(req);
      console.log(response);
      console.log(response.raw_data.trades);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "getAllMixTickers0",
    async () => {
      const response: any = await LoopringAPI.exchangeAPI.getAllMixTickers();
      console.log(response?.tickMap);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getAllMixTickers1",
    async () => {
      const response: any = await LoopringAPI.exchangeAPI.getAllMixTickers(
        "AMM-LRC-ETH"
      );
      console.log(response.tickMap);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getMixCandlestickAMM",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getMixCandlestick({
        market: "AMM-LRC-ETH",
        interval: sdk.TradingInterval.min15,
        limit: 96,
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );
});
