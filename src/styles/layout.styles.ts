import { Theme } from "@mui/material";

export const displayContainer = (theme: Theme) => ({
  minHeight: "40rem",
  minWidth: "60rem",
  backgroundColor: "#f1f2f3",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const root = {
  height: "100%",
  width: "100%",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
};
