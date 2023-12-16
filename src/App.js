import React, { useState } from "react";

import ListOfFriends from "./component/ListOfFriends";
import AddFriendForm from "./component/AddFriendForm";
import SplitBillForm from "./component/SplitBillForm";

import "./index.css";
import Button from "./component/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Ashok",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Appa",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Amma",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setfriendsList] = useState(initialFriends);
  const [showAddFried, setShowAddFried] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriends(newFriend) {
    setfriendsList([...friendsList, newFriend]);
    setShowAddFried(!showAddFried);
  }
  function handleShowAddFrieds() {
    setShowAddFried(!showAddFried);
  }
  function handleSelection(friend) {
    setSelectedFriend((selectedFnd) =>
      selectedFnd?.id === friend?.id ? null : friend
    );
    setShowAddFried(false);
  }

  function handleUpdatedBalance(updatedBalance) {
    setfriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + updatedBalance }
          : friend
      )
    );
    setSelectedFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends
          friendsList={friendsList}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFried && <AddFriendForm submitNewFriend={handleAddFriends} />}

        <Button onClick={handleShowAddFrieds}>
          {!showAddFried ? "Add Friends" : "Close"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          submitNewBalance={handleUpdatedBalance}
        />
      )}
    </div>
  );
}
