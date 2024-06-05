"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AddAccount from "./addaccount";
import { Plus } from "lucide-react";
import useAuthStore from "../../../../config/userStore";

const Accounts = () => {
  const { loggedInUserData } = useAuthStore();
  const [accountData, setAccountData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [showAddAccount, setShowAddAccount] = useState(false);

  const fetchAccountData = async () => {
    console.log("User data:", loggedInUserData.email);
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
    setShowAddAccount((prevState) => !prevState);
  };

  const handleAddAccount = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
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
                  {loggedInUserData.email === account.created_by ? (
                    <Button>{account.account_number}</Button>
                  ) : (
                    <Button>hello</Button>
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
      </div>
    </div>
  );
};

export default Accounts;
