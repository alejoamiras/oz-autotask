import { Relayer } from 'defender-relay-client';
import { RelayerModel, RelayerParams } from 'defender-relay-client/lib/relayer';
import { DefenderRelaySigner, DefenderRelayProvider } from 'defender-relay-client/lib/ethers';
import { ethers, utils } from 'ethers';

type WebhookRequest = {
  body?: object;
  queryParameters?: { [name: string]: string };
  headers?: { [name: string]: string };
};

// Secret key/value pairs
type Secrets = {
  [name: string]: string;
};

type AutotaskEvent = RelayerParams & {
  secrets?: Secrets;
  request?: WebhookRequest;
};

type Handler = (event: AutotaskEvent) => Promise<object | undefined>;

const threshold = utils.parseEther('10');

export const id = 'b5db801e-502d-47ad-98d7-bd757024d330';

const handler: Handler = async (event: AutotaskEvent): Promise<object | undefined> => {
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: 'fast' });
  const body: any = event.request!.body;
  const matches = [];
  for (let i = 0; i < body.events.length; i++) {
    const event = body.events[i];
    console.log(event.matchReasons);
    const contract = new ethers.Contract(event.transaction.to, event.sentinel.abi, signer);
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

export { handler };
