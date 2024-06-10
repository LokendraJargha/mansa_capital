"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AddAccount from "./addaccount";
import ShowAccount from "./showAccount";
import { Plus, CornerDownRight } from "lucide-react";
import useAuthStore from "../../../../config/userStore";

const Accounts = () => {
  const { loggedInUserData } = useAuthStore();
  const [accountData, setAccountData] = useState(null);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showClickedAccount, setShowClickedAccount] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isAddAccountClicked, setIsAddAccountClicked] = useState(false);

  const fetchAccountData = async () => {
    console.log("User data:", loggedInUserData?.email);
    try {
      const response = await fetch("/api/account", {
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
        },
      });
      const data = await response.json();
      setAccountData(data);
      console.log("Account data fetched:", data);
    } catch (error) {
      console.error("Error fetching Account data:", error);
    }
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  useEffect(() => {
    if (accountData && accountData.length > 0) {
      const lastAccount = accountData[accountData.length - 1];
      setSelectedAccount(lastAccount);
      setShowClickedAccount(true);
      setShowAddAccount(false);
    }
  }, [accountData]);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    setShowAddAccount(true);
    setShowClickedAccount(false);
    setSelectedAccount(null);
    setIsAddAccountClicked(true);
  };

  const handleAddAccount = (newAccount) => {
    console.log("New account:", newAccount);
    setAccountData((prevAccountData) => [...prevAccountData, newAccount]);
    setSelectedAccount(newAccount);
    setShowAddAccount(false);
    setShowClickedAccount(true);
    setIsAddAccountClicked(false);
  };

  const handleShowAccount = (account) => {
    setSelectedAccount(account);
    setShowClickedAccount(true);
    setShowAddAccount(false);
    setIsAddAccountClicked(false);
  };

  const handleEditAccount = () => {
    // Logic to handle account edit, e.g., show a form with editable fields
    console.log("Editing account:", selectedAccount);
  };

  return (
    <div className="flex w-full">
      <div className="flex w-2/5">
        <div className="lex w-1/2 m-4 text-lg">ACCOUNTS</div>
        <div className="flex w-1/2">
          <ul className="flex w-full flex-col-reverse text-sm text-muted-foreground items-start justify-end">
            {accountData ? (
              accountData.map((account, index) => (
                <li key={index} className="w-full">
                  {loggedInUserData.email === account.created_by && (
                    <p
                      onClick={() => handleShowAccount(account)}
                      className={`w-full p-4 rounded-lg cursor-pointer hover:underline flex items-center ${
                        selectedAccount === account ? "bg-yellow-50" : ""
                      }`}
                    >
                      Account: {account.account_number}
                      <CornerDownRight className="flex justify-end" size={16} />
                    </p>
                  )}
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
            <li
              className={`flex w-full rounded-lg ${
                isAddAccountClicked ? "bg-yellow-50" : ""
              }`}
            >
              <Button
                className="m-4 bg-[#174894]"
                onClick={handleAddButtonClick}
              >
                <Plus className="mr-2" />
                Add Account
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-3/5">
        {showAddAccount && <AddAccount onAddAccount={handleAddAccount} />}
        {showClickedAccount && selectedAccount && (
          <ShowAccount account={selectedAccount} onEdit={handleEditAccount} />
        )}
      </div>
    </div>
  );
};

export default Accounts;
