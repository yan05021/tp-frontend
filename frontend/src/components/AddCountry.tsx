import React, { useState } from "react";
import { useAddCountryMutation } from "@/graphql/generated/schema";

const AddCountry: React.FC = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [addCountry] = useAddCountryMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCountry({
        variables: {
          data: {
            name,
            code,
            emoji,
          },
        },
      });
      setName("");
      setCode("");
      setEmoji("");
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Country Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Country Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Country Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        required
      />
      <button type="submit">Add Country</button>
    </form>
  );
};

export default AddCountry;
