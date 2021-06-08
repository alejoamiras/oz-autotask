'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handler = exports.id = void 0;
const ethers_1 = require('defender-relay-client/lib/ethers');
const ethers_2 = require('ethers');
const threshold = ethers_2.utils.parseEther('10');
exports.id = 'b5db801e-502d-47ad-98d7-bd757024d330';
const handler = async (event) => {
  const provider = new ethers_1.DefenderRelayProvider(event);
  const signer = new ethers_1.DefenderRelaySigner(event, provider, { speed: 'fast' });
  const body = event.request.body;
  const matches = [];
  for (let i = 0; i < body.events.length; i++) {
    const event = body.events[i];
    // console.log(event);
    // console.log(event.transaction.logs);
    console.log(event.matchReasons);
    const contract = new ethers_2.ethers.Contract(event.transaction.to, event.sentinel.abi, signer);
    if (threshold.gte(await contract.credits(await contract.STATIC_JOB()))) {
      matches.push({
        hash: event.hash,
        metadata: {
          sentinel: event.sentinel.name,
        },
      });
    }
  }
  return { matches };
};
exports.handler = handler;
