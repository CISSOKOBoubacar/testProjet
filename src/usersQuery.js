import { useQuery } from "react-query";

export const useUsersQuery = () => {
  const results = useQuery(["Users"], () => {
    return fetch("https://gorest.co.in/public/v2/users").then((res) =>
      res.json()
    );
  });
  return results;
};