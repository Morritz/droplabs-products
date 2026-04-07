import { Box, keyframes } from "@mui/material";

const rainbowMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

interface RainbowBorderProps {
  children: React.ReactNode;
}

export function RainbowBorder({ children }: RainbowBorderProps) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "12px",
        padding: "4px",
        background: `linear-gradient(
          90deg,
          #000000,
          #ffffff,
          #000000,
          #ffffff,
          #000000,
          #ffffff,
          #000000
        )`,
        backgroundSize: "200% 200%",
        animation: `${rainbowMove} 3s linear infinite`,
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
