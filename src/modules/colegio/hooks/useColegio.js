import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getColegioService } from "../services/colegioService";
import { useSelector, useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const data_colegio = useQuery({
    queryKey: ["data_colegio"],
    queryFn: getColegioService,
    retry: false,
    staleTime: 1000 * 60 * 10,
  });

  return {
    data_colegio,
  };
};
