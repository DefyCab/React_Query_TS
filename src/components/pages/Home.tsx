import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import nobelPrizeList from "../../fixtures/prizes.json";

export const Home = () => {
  const [winners, setWinners] = useState();
  const prizes = nobelPrizeList.prizes;

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const prizeQuery = useQuery({
    queryKey: ["prizes"],
    queryFn: () => wait(1000).then(() => [...prizes]),
  });

  if (prizeQuery.isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul>
        {prizes.map((prize: any) => (
          <li key={prize.id}>
            <h3>
              {prize.category.toUpperCase()} - {prize.year}
            </h3>
            <ul>
              {prize.laureates.map((laureate: any) => (
                <li
                  style={{ fontSize: "large", fontStyle: "italic" }}
                  key={laureate.id}
                >
                  {laureate.firstname} {laureate.surname} -{" "}
                  {laureate.motivation}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
