const { expect } = require("chai");
const { ethers } = require("hardhat");

//TODO add all the tests for ETH Pool
describe("ETHPool deposits", function () {

  let ETHPool;
  let ethPool;
  let owner;
  let alice;
  let bob;

  beforeEach(async function () {
    ETHPool = await ethers.getContractFactory("ETHPool");
    [owner, alice, bob] = await ethers.getSigners();
    ethPool = await ETHPool.connect(owner).deploy();
    await ethPool.deployed();
  });

  it("Should allow a user to deposit an amount", async function () {
    await ethPool.connect(alice).deposit({ value: ethers.utils.parseEther("0.0005") });

    expect(await ethPool.balanceOf(alice.address)).to.equal(500000000000000);
  });
});
