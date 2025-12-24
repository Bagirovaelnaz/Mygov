"use client";
import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#0F7EF5",
          light: "#F2F9FF",
          dark: "#186CC7",
        },
        secondary: {
          main: "#99968D",
          light: "#F7F7F7",
        },
        error: {
          main: "#D21A0E",
          light: "#FAE8E7",
          dark: "#A6150B",
        },
        text: {
          primary: "#000000",
          secondary: "#3B474D",
          disabled: "#ADB2B8",
        }
      },
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          backgroundColor: "#FFF",
          color: "#000000",

          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #E6EAF2",
            "&:active": {
              border:"1px solid #C9E2FF"
            },
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9E2FF",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
          },
          "& .MuiOutlinedInput-input::placeholder": {
            color: "#7988A6",
            opacity: 1,
            fontWeight: "400",
          },
          "&.Mui-disabled": {
            backgroundColor: "#F5F8FA",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E6EAF2",
            },

            "& .MuiOutlinedInput-input": {
              color: "#9AA1B2",
              WebkitTextFillColor: "#9AA1B2",
            },

            "& .MuiOutlinedInput-input::placeholder": {
              color: "#C0C4CC",
              opacity: 1,
            },
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          borderRadius: "16px",
          "& .MuiChip-filled":{
          backgroundColor:"#EDF6FF",
          padding: "4px 12px",

          },
        },
        filled: {
          backgroundColor:"#EDF6FF"
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          display: "inline-flex",
          height: "56px",
          padding: "16px 24px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "200px",
          minWidth: "151px",
          fontSize: "16px",
        },
        contained: {
          color: "#FFFFFF",
        },
      },

      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: " 200px",
            border: " 1px solid #0F7EF5",
            display: "inline-flex",
            height: "56px",
            padding: "12px 20px",
            justifyContent: "center",
            alignItems: "center",
            color: "#0F7EF5",
            gap: "8px",
            "&:hover": {
              border: " 1px solid #186CC7",
              color: "#186CC7",
            },
          },
        },
      ],
    },
  },
});
