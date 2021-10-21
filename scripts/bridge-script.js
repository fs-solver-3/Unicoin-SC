const { ethers, upgrades } = require("hardhat");
// const fetch = require("node-fetch");
const axios = require('axios').default;
// const uniERCTokenContract = "0x78635608942585be5E6F9521ebdc2587c12925Ca";
// const uniBSCTokenContract = "0x89643704ff263AaE520f95c2Bb5e97ae2eAE436a";

const senderAddress = "0xB987f95fF3058E95fD897f8F9dBD2Fdc1968E8Db";
const receiverAddress = "0x390A0815e69F068C7859A9fF07A01aC54A2a9968";

async function main() {
    // const uniERCInstance = await ethers.getContractFactory("MisBlockBase");
    // const uniERCContract = await uniERCInstance.deploy();
    // await uniERCContract.deployed();

    // uniERCContract.mint(senderAddress, ethers.utils.parseEther("100"));

    // console.log("UniToken Contract is deployed to:", uniERCContract.address);

    // await axios.get('https://bridgeapi.anyswap.exchange/v2/serverInfo/56')
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     });
    await axios.get('https://bridgeapi.anyswap.exchange/v2/register/' + receiverAddress + '/1/BSC')
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    // txERC = await uniERCContract.transfer(receiverAddress, ethers.utils.parseEther("10"));
    // console.log(txERC);

    // await axios.get('https://bridgeapi.anyswap.exchange/v2/getHashStatus/' + receiverAddress + '/' + txERC.hash + '/97/magicv5/42161')
    //     .then((response) => {
    //         // Code for handling the response
    //         // const data = response.json();
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         // Code for handling the error
    //         console.log(error.message);
    //     });

}

main();