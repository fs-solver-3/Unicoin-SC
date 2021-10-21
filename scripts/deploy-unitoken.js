const { ethers, upgrades } = require("hardhat");

async function main() {
    const uniTokenInstance = await ethers.getContractFactory("MisBlockBase");
    const uniTokenContract = await uniTokenInstance.deploy();
    console.log("UniToken Contract is deployed to:", uniTokenContract.address);
}

main();