import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: "example.com",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
  thirdwebAuthOptions: {
    secretKey:
      "Po2m6tBP1eEOld-ZLNrtitkOXGQWBknwOBPFtrTaArM1-lW6lzKLohaoNaHozT7T-MQq_JItWNgn4eUCzvDQPg",
  },
});

export default ThirdwebAuthHandler();
