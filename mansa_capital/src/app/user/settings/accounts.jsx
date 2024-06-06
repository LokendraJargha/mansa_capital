"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AddAccount from "./addaccount";
import ShowAccount from "./showAccount";
import { Plus } from "lucide-react";
import useAuthStore from "../../../../config/userStore";
import { CornerDownRight } from "lucide-react";

const Accounts = () => {
  const { loggedInUserData } = useAuthStore();
  const [accountData, setAccountData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showClickedAccount, setShowClickedAccount] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

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

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    setShowAddAccount(true);
    setShowClickedAccount(false);
    setSelectedAccount(null);
  };

  const handleAddAccount = (newAccount) => {
    console.log("New account:", newAccount);
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setShowAddAccount(false);
  };

  const handleShowAccount = (account) => {
    setSelectedAccount(account);
    setShowClickedAccount(true);
    setShowAddAccount(false);
  };

  const handleEditAccount = () => {
    // Logic to handle account edit, e.g., show a form with editable fields
    console.log("Editing account:", selectedAccount);
  };

  return (
    <div className="flex w-full ">
      <div className="flex w-2/5">
        <div className="flex w-1/2 m-4 text-lg">ACCOUNTS</div>
        <div className="flex w-1/2 m-4">
          <ul className="text-sm text-muted-foreground">
            <Button className="m-4 bg-[#174894]" onClick={handleAddButtonClick}>
              <Plus className="mr-2" />
              Add Account
            </Button>
            {accountData ? (
              accountData.map((account, index) => (
                <li key={index}>
                  {loggedInUserData.email === account.created_by && (
                    <p
                      onClick={() => handleShowAccount(account)}
                      className="m-4 cursor-pointer hover:underline  flex gap-3 items-center"
                    >
                      Account {account.account_number}
                      <CornerDownRight className="flex justify-end" size={16} />
                    </p>
                  )}
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
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