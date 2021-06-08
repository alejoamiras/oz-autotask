'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handler = void 0;
// import 'dotenv/config';
const defender_relay_client_1 = require('defender-relay-client');
const ethers_1 = require('defender-relay-client/lib/ethers');
const ethers_2 = require('ethers');
const handler = async (event) => {
  const relayer = new defender_relay_client_1.Relayer(event);
  const provider = new ethers_1.DefenderRelayProvider(event);
  const signer = new ethers_1.DefenderRelaySigner(event, provider, { speed: 'fast' });
  const info = await relayer.getRelayer();
  console.log(`Relayer address is ${info.address}`);
  const body = event.request.body;
  const someEvent = body.events[0];
  const contract = new ethers_2.ethers.Contract(someEvent.transaction.to, someEvent.sentinel.abi, signer);
  // await contract.doSomething();
  return;
};
exports.handler = handler;
// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  const { OZ_RELAYER_API_KEYAPI_KEY: apiKey, OZ_RELAYER_API_KEYAPI_SECRET: apiSecret } = process.env;
  handler({ apiKey, apiSecret })
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
