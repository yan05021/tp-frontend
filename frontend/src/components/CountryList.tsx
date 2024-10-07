import React from "react";
import { useGetCountriesQuery } from "../graphql/generated/schema";
import Link from "next/link";

const CountriesList: React.FC = () => {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error loading countries: {error.message}</p>;

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {data?.countries.map((country) => (
          <li key={country.id}>
            <Link href={`/country/${country.code}`}>
              {country.name} {country.emoji}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
