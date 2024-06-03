"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AddAccount from "./addaccount";
import { Plus } from "lucide-react";

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    "Account[1]",
    "Account[2]",
    "Account[3]",
    "Account[4]",
    "Account[5]",
  ]);

  const [showAddAccount, setShowAddAccount] = useState(false);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    setShowAddAccount((prevState) => !prevState);
  };

  const handleAddAccount = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
  };

  return (
    <form className="flex flex-row p-4">
      <div className="flex w-full">
        <div className="flex w-2/5">
          <div className="flex w-1/2 m-4 text-lg">ACCOUNTS</div>
          <div className="flex w-1/2 m-4">
            <ul className="text-sm text-muted-foreground">
              <Button
                className="m-4 bg-[#174894]"
                onClick={handleAddButtonClick}
              >
                <Plus className="mr-2" />
                Add Account
              </Button>
              {accounts.map((account, index) => (
                <li key={index} className="m-4">
                  <button>{account}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-3/5">
          {showAddAccount && <AddAccount onAddAccount={handleAddAccount} />}
        </div>
      </div>
    </form>
  );
};

export default Accounts;
