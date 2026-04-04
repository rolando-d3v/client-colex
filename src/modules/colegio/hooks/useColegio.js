import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getColegioService } from "../services/colegioService";
import { useSelector, useDispatch } from "react-redux";
import { setColegio } from "../../../Redux/authSlice";

import { useEffect } from "react";

export const useColegio = (host) => {
  const dispatch = useDispatch();

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
