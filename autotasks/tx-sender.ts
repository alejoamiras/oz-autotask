// import 'dotenv/config';
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

const handler: Handler = async (event: AutotaskEvent): Promise<object | undefined> => {
  const relayer = new Relayer(event);
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: 'fast' });
  const info: RelayerModel = await relayer.getRelayer();
  console.log(`Relayer address is ${info.address}`);
  const body: any = event.request!.body;
  const someEvent = body.events[0];
  const contract = new ethers.Contract(someEvent.transaction.to, someEvent.sentinel.abi, signer);
  // await contract.doSomething();
  return;
};

// Sample typescript type definitions
type EnvInfo = {
  OZ_RELAYER_API_KEYAPI_KEY: string;
  OZ_RELAYER_API_KEYAPI_SECRET: string;
};

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  const { OZ_RELAYER_API_KEYAPI_KEY: apiKey, OZ_RELAYER_API_KEYAPI_SECRET: apiSecret } = process.env as EnvInfo;
  handler({ apiKey, apiSecret })
    .then(() => process.exit(0))
    .catch((error: Error) => {
      console.error(error);
      process.exit(1);
    });
}

export { handler };
