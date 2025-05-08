import { ApolloClient, InMemoryCache } from "@apollo/client";

import { HttpLink } from "@apollo/client/link/http";
import { useMemo } from "react";

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://3.13.23.243/graphql",
      credentials: "include",
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: "cache-and-network" },
    },
  });
}
export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  return client;
}
