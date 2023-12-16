import React from "react";
import ListOfFriendsItem from "./ListOfFriendsItem";

export default function ListOfFriends({
  friendsList,
  submitShowSplitBill,
  onSelection,
  selectedFriend,
}) {
  const friends = friendsList;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <ListOfFriendsItem
            friend={friend}
            key={friend.id}
            submitShowSplitBill={submitShowSplitBill}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
