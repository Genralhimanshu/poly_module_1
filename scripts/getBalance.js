const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/NFTCollection1.sol/MyNFT.json")

const NFtAddress ="0xAe46C4579EfA4A8c0E0781f72e9320e156683A1E";
const ContractABI = NFTJson.abi
const walletAddress="0x8C973cBB7474Fd0E5C88c41Fc3DFC7B5EBFE9438";

async function main(){
    const Contract = await hre.ethers.getContractAt(ContractABI,NFtAddress);
    console.log("You have "+await Contract.balanceOf(walletAddress)+" NFTs")
}
main((error)=>{
    console.log(error);
    process.exitCode=1;
})