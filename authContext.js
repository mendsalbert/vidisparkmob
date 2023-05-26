import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import lf from "localforage";
import { isNil } from "ramda";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";
import SDK from "weavedb-sdk";
import { Buffer } from "buffer";
import * as flatted from "flatted";
import { useAccount, useConnect, useDisconnect } from "wagmi";
const contractTxId = "ocK3uzmm47XffsVJ2YnbMKpAR9CzBHf6g9gh4M51xhQ";
import {} from "ethers";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initDB, setInitDB] = useState(false);
  const [db, setdb] = useState(undefined);
  const [userInfo, setUserInfo] = useState("");
  const [updateState, setUpdateState] = useState(false);

  const { address, isConnected } = useAccount();

  const checkUser = async () => {
    const wallet_address = await localStorage.getItem(`temp_address:current`);
    if (!isNil(wallet_address)) {
      const identity = await localStorage.getItem(
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
    getUserInformation(db);
    setInitDB(true);
    localStorage.setItem("initDB", "true");
  };

  const getUserInformation = async (db) => {
    const wallet_address = await localStorage.getItem(`temp_address:current`);
    console.log(wallet_address);
    const res = await db.cget(
      "user",
      ["user_address", "==", wallet_address?.toLowerCase()],
      ["date", "desc"]
    );
    setUserInfo(res);
    console.log(res);

    return res;
  };

  useEffect(() => {
    setupWeaveDB();
    login();
    checkUser();
  }, []);

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
      console.log("wallet_address", wallet_address);
      let identity = JSON.parse(
        localStorage.getItem(`temp_address:${contractTxId}:${wallet_address}`)
      );
      let tx;
      let err;
      if (isNil(identity)) {
        console.log("calling db.createTempAddress");
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    if (confirm("Would you like to sign out?")) {
      await lf.removeItem("temp_address:current");
      setUser(null, "temp_current");
      localStorage.removeItem("user", "temp_current");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("hasSignedUp");
      window.location.replace("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        db,
        initDB,
        login,
        logout,
        checkUser,
        setupWeaveDB,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
