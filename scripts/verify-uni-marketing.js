const { ethers } = require("hardhat");

async function main() {
    await run("verify:verify", {
        constructor: ["0x89643704ff263AaE520f95c2Bb5e97ae2eAE436a",
            50000000000
        ],
        contract: "contracts/MarketingContract.sol:MarketingContract"
    });
}

main();