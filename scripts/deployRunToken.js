const main = async () => {
  const RunToken = await hre.ethers.getContractFactory("RunToken");
  const runTokens = await RunToken.deploy();

  await runTokens.deployed();

  console.log(`Transactions deployed to: ${transactions.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
