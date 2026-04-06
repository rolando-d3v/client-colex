import { useQuery } from "@tanstack/react-query";
import { getColegioService } from "../services/colegioService";
import { useDispatch } from "react-redux";
import { setColegio } from "../../../Redux/authSlice";

import { useEffect } from "react";

export const useColegio = (host) => {
  const dispatch = useDispatch();

  //?? obtiene datos del colegio en login con el host o dominio
  const query_colegio = useQuery({
    queryKey: ["query_colegio", host],
    queryFn: () => getColegioService(host),
    retry: false,
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (query_colegio.data) {
      dispatch(setColegio(query_colegio.data));
    }
  }, [query_colegio.data, dispatch]);

  return { query_colegio };
};
