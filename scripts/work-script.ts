import { utils } from 'ethers';
import { run, ethers } from 'hardhat';

async function main() {
  run('compile');
  const counter = await ethers.getContractAt('Counter', '0xb00123c78da18a8B7d8bC833db09D3C565225389');
  const staticJob = await counter.STATIC_JOB();
  const tx = await counter.work(await counter.STATIC_JOB(), utils.parseEther('0.01'));
  console.log('remaining', utils.formatEther(await counter.credits(staticJob)));
  console.log('hash', tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
