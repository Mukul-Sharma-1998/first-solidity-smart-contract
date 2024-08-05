const hre = require("hardhat");
const { ethers } = hre;

async function main() {
    const Counter = await hre.ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();

    await counter.waitForDeployment();

    console.log(`Counter deployed to:`, await counter.getAddress());
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});