import React, { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ submitNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleFormAddFrind(e) {
    e.preventDefault();
    if (name.length !== 0 && image.length !== 0) {
      const id = crypto.randomUUID();
      const newFriend = {
        id,
        name,
        image: `${image}?=${id}`,
        balance: 0,
      };
      submitNewFriend(newFriend);
      setName("");
      setImage("https://i.pravatar.cc/48");
    } else alert("Please enter value in all fields");
  }

  return (
    <form className="form-add-friend">
      <label htmlFor="name">👭 Friend name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">🌄 Image URL</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleFormAddFrind}>Add</Button>
    </form>
  );
}
