const { expect, assert} = require("chai");
const { ethers } = require("hardhat");

describe("TestCounter", function() {
    it("Should change the value of count", async function () {
        const Counter = await ethers.getContractFactory("Counter");

        const counter = await Counter.deploy();

        await counter.waitForDeployment();

        await counter.inc();

        const count = await counter.get()

        assert.equal(count.toString(), "1")
    })
})