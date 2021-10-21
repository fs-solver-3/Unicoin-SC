const { ethers, upgrades } = require("hardhat");

let amount;

async function main() {
    const misBlockBaseAddr = "0x78635608942585be5E6F9521ebdc2587c12925Ca";
    const beneficiaryAddr = "0x390A0815e69F068C7859A9fF07A01aC54A2a9968";

    amount = 50000000000;
    const PresaleContract = await ethers.getContractFactory('PresaleContract');
    const presaleContract = await PresaleContract.deploy(misBlockBaseAddr, amount);
    await presaleContract.deployed();
    console.log("Pre-sale address:", presaleContract.address);

    amount = 100000000000;
    const FarmingRewardContract = await ethers.getContractFactory('FarmingRewardContract');
    const farmingRewardContract = await FarmingRewardContract.deploy(misBlockBaseAddr, beneficiaryAddr, amount);
    await farmingRewardContract.deployed();
    console.log("Farming rewards address:", farmingRewardContract.address);
}

main();