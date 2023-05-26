import { useState } from "react";
import lf from "localforage";
import { isNil } from "ramda";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";
import SDK from "weavedb-sdk";
import { Buffer } from "buffer";
// import flatted from "flatted";
import * as flatted from "flatted";
export const contractTxId = "tqRK32rdpnBNQ3rGTwfGZVAYBSgKCVkfYh9JTmd9v_c";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [initDB, setInitDB] = useState(false);
  const [db, setdb] = useState("");

  const checkUser = async () => {
    const wallet_address = await lf.getItem(`temp_address:current`);
    if (!isNil(wallet_address)) {
      const identity = await lf.getItem(
        `temp_address:${contractTxId}:${wallet_address}`
      );
      if (!isNil(identity))
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
      localStorage.setItem(
        "user",
        JSON.stringify({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        })
      );
    }
  };

  const setupWeaveDB = async () => {
    window.Buffer = Buffer;
    let db = new SDK({
      contractTxId,
    });
    setdb(db);
    await db.initializeWithoutWallet();
    setInitDB(true);
    localStorage.setItem("initDB", "true");
  };

  const login = async () => {
    try {
      const providerOptions = {};
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      const web3Provider = new Web3Provider(provider);
      const accounts = await web3Provider.listAccounts();
      const wallet_address = accounts[0];
      let identity = JSON.parse(
        localStorage.getItem(`temp_address:${contractTxId}:${wallet_address}`)
      );
      let tx;
      let err;
      if (isNil(identity)) {
        ({ tx, identity, err } = await db.createTempAddress(wallet_address));
        const linked = await db.getAddressLink(identity.address);
        console.log(linked);
        if (isNil(linked)) {
          alert("something went wrong");
          return;
        }
      } else {
        localStorage.setItem("temp_address:current", wallet_address);
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            wallet: wallet_address,
            privateKey: identity.privateKey,
          })
        );
        return;
      }
      if (!isNil(tx) && isNil(tx.err)) {
        identity.tx = tx;
        identity.linked_address = wallet_address;
        localStorage.setItem("temp_address:current", wallet_address);
        localStorage.setItem(
          `temp_address:${contractTxId}:${wallet_address}`,
          JSON.stringify(identity)
        );
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            wallet: wallet_address,
            privateKey: identity.privateKey,
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    if (confirm("Would you like to sign out?")) {
      await lf.removeItem("temp_address:current");
      setUser(null, "temp_current");
      localStorage.setItem("user", "temp_current");
    }
  };

  return { user, initDB, login, logout, checkUser, setupWeaveDB };
};
