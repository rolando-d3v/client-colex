import { useQuery } from "@tanstack/react-query";
import { getCursoService } from "../services/cursoService";
import { useDispatch } from "react-redux";
import { setColegio } from "../../../Redux/authSlice";

import { useEffect } from "react";

export const useCurso = (id_colegio) => {
  const dispatch = useDispatch();

  //?? obtiene datos del colegio en login con el host o dominio
  const query_curso = useQuery({
    queryKey: ["query_all_curso", id_colegio],
    queryFn: () => getCursoService(id_colegio),
    retry: false,
    staleTime: 1000 * 60 * 10,
  });

  // useEffect(() => {
  //   if (query_curso.data) {
  //     dispatch(setColegio(query_curso.data));
  //   }
  // }, [query_curso.data, dispatch]);

  return { query_curso };
};
