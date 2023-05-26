import { BigNumber, ethers } from "ethers";
import { contract } from "./index";
import { toEth } from "./ether-utils";

export async function swap(amount, fromToken, toToken) {
  try {
    let tx = { value: toWei(amount) };
    console.log("@@@@SUPPOSED AMOUNT IN WEI", fromToken, toToken);
    const amountInWei = ethers.utils.parseEther(amount);
    console.log("@@@@SUPPOSED AMOUNT IN WEI", amountInWei);

    const contractObj = await contract();
    const data = await contractObj.swap(fromToken, amountInWei, toToken);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function tip(amount, recipient) {
  try {
    let tx = { value: toWei(amount) };
    const amountInWei = ethers.utils.parseEther(amount);
    const contractObj = await contract();
    const data = await contractObj.transfer(recipient, amountInWei);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getBal(address) {
  try {
    const contractObj = await contract();
    const data = await contractObj.balanceOf(address);
    return data;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString());
  return toWei;
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}
