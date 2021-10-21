const { ethers } = require("hardhat");

async function main() {
    const misBlockBaseAddr = "0x89643704ff263AaE520f95c2Bb5e97ae2eAE436a";
    const beneficiaryAddr = "0x390A0815e69F068C7859A9fF07A01aC54A2a9968";

    let amount = 100000000000;
    const TeamVestingContract = await ethers.getContractFactory('TeamVestingContract');
    const teamVestingContract = await TeamVestingContract.deploy(misBlockBaseAddr, amount);
    await teamVestingContract.deployed();
    console.log("Team Vesting address:", teamVestingContract.address);

    amount = 100000000000;
    const StakingContract = await ethers.getContractFactory('StakingContract');
    const stakingContract = await StakingContract.deploy(misBlockBaseAddr, beneficiaryAddr, new Date(2022, 3, 15).getTime() / 1000, amount);
    await stakingContract.deployed();
    console.log("In-App Staking address:", stakingContract.address);
    console.log("new Date(2022, 3, 15) is ", new Date(2022, 3, 15).getTime() / 1000);

    amount = 50000000000;
    const MarketingContract = await ethers.getContractFactory('MarketingContract');
    const marketingContract = await MarketingContract.deploy(misBlockBaseAddr, amount);
    await marketingContract.deployed();
    console.log("Marketing address:", marketingContract.address);

    amount = 50000000000;
    const InfluencerContract = await ethers.getContractFactory('InfluencerContract');
    const influencerContract = await InfluencerContract.deploy(misBlockBaseAddr, beneficiaryAddr, new Date(2021, 10, 17).getTime() / 1000, amount);
    await influencerContract.deployed();
    console.log("Influencers address:", influencerContract.address);
    console.log("new Date(2021, 10, 17) is ", new Date(2021, 10, 17).getTime() / 1000);

    amount = 50000000000;
    const PresaleContract = await ethers.getContractFactory('PresaleContract');
    const presaleContract = await PresaleContract.deploy(misBlockBaseAddr, amount);
    await influencerContract.deployed();
    console.log("Pre-sale address:", presaleContract.address);

    amount = 150000000000;
    const manualBurningInstance = await ethers.getContractFactory('ManualBurningContract');
    const manualBurningContract = await manualBurningInstance.deploy(misBlockBaseAddr, amount);
    await manualBurningContract.deployed();
    console.log("Manual Burning address:", manualBurningContract.address);

    amount = 150000000000;
    const DevelopmentFundContract = await ethers.getContractFactory('DevelopmentFundContract');
    const developmentFundContract = await DevelopmentFundContract.deploy(misBlockBaseAddr, amount);
    await influencerContract.deployed();
    console.log("Development Fund address:", developmentFundContract.address);
}

main();