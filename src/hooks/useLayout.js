import { useDispatch, useSelector } from "react-redux";
import { setOpenToggleSidebar } from "../Redux/layoutSlice";
import { useCallback } from "react";

export const useLayout = () => {
  const { estado_sidebar } = useSelector((state) => state.Layout);

  const dispatch = useDispatch();

  // ─── cambiar estado del sidebar ────────────────────────────────
  const handleOpenToggleSidebar = useCallback(
    (toggle) => {
      dispatch(setOpenToggleSidebar(toggle));
    },
    [dispatch],
  );

  return {
    // estados
    estado_sidebar,

    // acciones
    handleOpenToggleSidebar,
  };
};
