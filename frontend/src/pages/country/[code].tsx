// src/pages/country/[code].tsx

import React from "react";
import { useRouter } from "next/router";
import { useGetCountryQuery } from "@/graphql/generated/schema";

const CountryDetails: React.FC = () => {
  const router = useRouter();
  const { code } = router.query; // Capturez le code du pays depuis l'URL

  if (typeof code !== "string") {
    return <p>Invalid country code.</p>;
  }

  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code as string }, // Assurez-vous que code est une chaîne
    skip: !code, // Évitez d'exécuter la requête tant que code n'est pas défini
  });

  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>Error loading country details: {error.message}</p>;

  if (!data || !data.country) {
    return <p>No data available for this country.</p>;
  }

  const { name, code: countryCode, emoji, continent } = data.country;

  return (
    <div>
      <h1>{name}</h1>
      <p>Code: {countryCode}</p>
      <p>Emoji: {emoji}</p>
      {continent && <p>Continent: {continent.name}</p>}
    </div>
  );
};

export default CountryDetails;
