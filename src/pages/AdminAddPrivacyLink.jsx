import React, { useState } from "react";
import { db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

const AdminAddPrivacyLink = () => {
  const [PrivacyLink, setPrivacyLink] = useState("");

  const handleAddPrivacyLink = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "settings", "privacy-policy");

      await setDoc(docRef, { link: PrivacyLink });
      alert("Privacy Policy link added successfully!");
      setPrivacyLink("");
    } catch (error) {
      console.error("Error adding Privacy link:", error);
      alert("Failed to add Privacy link.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Privacy Link</h1>
      <form onSubmit={handleAddPrivacyLink} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="url"
          placeholder="Privacy Link"
          value={PrivacyLink}
          onChange={(e) => setPrivacyLink(e.target.value)}
          required
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        >
          Add Link
        </button>
      </form>
    </div>
  );
};

export default AdminAddPrivacyLink;
