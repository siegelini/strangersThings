import { useEffect, useState } from "react";
import { fetchMessages } from "../api";
import AuthProvider from "./AuthProvider";

export default function MyProfile() {
  return (
    <div className="profile-page">
      <div className="personal-post">
        <h1>All Your Posts Here</h1>
        <p>Your posts Here</p>
      </div>
      <div className="my-messages">
        <h1>Messages</h1>
        <p>Your messages here</p>
      </div>
    </div>
  );
}
