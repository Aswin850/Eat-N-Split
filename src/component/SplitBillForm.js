import React, { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({ selectedFriend, submitNewBalance }) {
  const [billValue, SetBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const paidByFriend = billValue ? billValue - yourExpense : "";

  const [whoIsPaying, setWhoIsPaying] = useState("You");

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    submitNewBalance(whoIsPaying === "user" ? paidByFriend : -paidByFriend);
    SetBillValue("");
    setYourExpense("");
    setWhoIsPaying("You");
  }
  return (
    <div>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
        <label htmlFor="value">💰 Bill value</label>
        <input
          type="text"
          id="value"
          value={billValue}
          onChange={(e) => SetBillValue(Number(e.target.value))}
        />
        <label htmlFor="uexp">🧍🏼‍♀️ Your expense</label>
        <input
          type="text"
          id="uexp"
          value={yourExpense}
          onChange={(e) =>
            setYourExpense(
              Number(e.target.value) <= billValue
                ? Number(e.target.value)
                : yourExpense
            )
          }
        />
        <label htmlFor="fndexp">👭 {selectedFriend.name}'s expense</label>
        <input type="text" id="fndexp" disabled value={paidByFriend} />
        <label>🤑 Who is paying the bill?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
      </form>
    </div>
  );
}
