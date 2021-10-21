const { ethers, upgrades } = require("hardhat");

async function main() {
    const misBlockBaseAddr = "0x89643704ff263AaE520f95c2Bb5e97ae2eAE436a";
    const beneficiaryAddr = "0x390A0815e69F068C7859A9fF07A01aC54A2a9968";

    let amount = 150000000000;
    const manualBurningInstance = await ethers.getContractFactory('ManualBurningContract');
    const manualBurningContract = await manualBurningInstance.deploy(misBlockBaseAddr, amount);
    await manualBurningContract.deployed();
    console.log("Manual Burning address:", manualBurningContract.address);
}

main();