import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";

interface GraphicsCardProps extends CardProps {
  overlay?: boolean | string;
  bgImage?: string;
}

export default function GraphicsCard({
  sx,
  children,
  overlay = false,
  bgImage,
  ...cardProps
}: GraphicsCardProps) {
  return (
    <Card
      aria-label="graphics card"
      rel="noopener noreferrer"
      sx={{
        ...(bgImage && {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),

        ...(overlay && {
          position: "relative",
          "&:before": {
            content: `' '`,
            position: "absolute",
            width: 1,
            height: 1,
            top: 0,
            left: 0,
            background:
              typeof overlay === "string"
                ? overlay
                : "var(--mui-palette-text-secondary)",
          },
        }),
        ...sx,
      }}
      {...cardProps}
    >
      {overlay ? (
        <Box sx={{ position: "relative", height: 1 }}>{children}</Box>
      ) : (
        children
      )}
    </Card>
  );
}
