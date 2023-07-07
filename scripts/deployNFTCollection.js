const hre = require("hardhat");

async function main() {
  //   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //   const unlockTime = currentTimestampInSeconds + 60;

  //   const lockedAmount = hre.ethers.parseEther("0.001");

  const CollectionNFTs = await hre.ethers.deployContract("RunnerCollection", [
    "Runner",
    "RUN",
    "https://ipfs.io/ipfs/QmZX7Mi8qFw11qvyb4E2okkEpjPyZoQpmK1AhF37Q4HQzG/",
  ]);

  await CollectionNFTs.waitForDeployment();

  console.log(`deployed to ${CollectionNFTs.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
