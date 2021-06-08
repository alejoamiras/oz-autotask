import { run, ethers } from 'hardhat';

async function main() {
  run('compile');
  const counterFactory = await ethers.getContractFactory('Counter');
  const counter = await counterFactory.deploy();
  console.log('Counter deployed to:', counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
