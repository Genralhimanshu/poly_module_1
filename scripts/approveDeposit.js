
const hre = require("hardhat");
require("dotenv").config();
const fxRootContractABI = require("../fxRootContractABI.json")
const NFTContractABI = require("../artifacts/contracts/NFTCollection1.sol/MyNFT.json")

const FxERC721RootAddress= "0xF9bc4a80464E48369303196645e876c8C7D972de";
const NFTAddress = process.env.CONTRACT_ADDRESS;

const NFTABI= NFTContractABI.abi;
const walletAddress ="0x8C973cBB7474Fd0E5C88c41Fc3DFC7B5EBFE9438";

async function main (){

const contract = await hre.ethers.getContractAt(NFTABI,NFTAddress);
const fxContract = await hre.ethers.getContractAt(fxRootContractABI,FxERC721RootAddress);

for (let i=1;i<=5;i++){
    try{
        //approve transaction
       const approveTx = await contract.approve(FxERC721RootAddress,i);
       await approveTx.wait();
       console.log(`Approved NFT ${i} for the transfer.`);

       //deposit transaction
       const depositTx = await fxContract.deposit(NFTAddress,walletAddress,i,"0x6556");
       await depositTx.wait();
       console.log(`Deposited token ${i} to fxProtal Bridge`);
}  
    catch(e){
         console.log(e.message)
}
}
}
main().catch((error)=>{
    console.log(error);
   process.exitCode=1;
});