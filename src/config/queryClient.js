import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
  
    queries: {
      refetchOnWindowFocus: false,
      retry: 1, // cuando falle vuelve intentar
      refetchOnReconnect: true,  //cuando se reconecte a internet hace fetch
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
});
