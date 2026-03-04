import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface SelectItemProps {
  title: string;
  content?: string;
  tag?: string;
  link?: string;
}

export default function SelectItem({
  title,
  content,
  tag,
  link,
}: SelectItemProps) {
  const isExternalLink =
    !!link && !link.startsWith("/") && !link.startsWith("#");

  const linkProps = link
    ? {
        href: link,
        ...(isExternalLink && {
          target: "_blank",
          rel: "noopener noreferrer",
        }),
      }
    : {};

  return (
    <ListItemButton
      TouchRippleProps={{
        style: {
          color: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
        },
      }}
      {...linkProps}
      disableTouchRipple={!link}
      sx={{
        py: 0.5,
        px: 1.25,
        my: 0.25,
        borderRadius: 2,
        cursor: link ? "pointer" : "default",
        "&:hover": {
          bgcolor: link ? undefined : "transparent",
        },
      }}
      tabIndex={link ? 1 : -1}
    >
      <Grid alignItems="center" container spacing={0.5} sx={{ width: "100%" }}>
        <Grid size="grow">
          <ListItemText
            primary={title}
            secondary={content}
            slotProps={{
              primary: {
                variant: "body1",
                sx: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  mr: 0.5,
                  color: "text.primary",
                },
              },
            }}
          />
        </Grid>
        {tag && (
          <Grid size="auto">
            <Chip
              label={<Typography variant="caption">{tag}</Typography>}
              size="small"
              sx={{
                bgcolor: "rgba(var(--mui-palette-primary-mainChannel) / 0.2)",
                color: "primary.main",
                "& .MuiChip-label": {
                  px: 1,
                  py: 0.25,
                  minWidth: 20,
                },
              }}
            />
          </Grid>
        )}
      </Grid>
      {link && (
        <Grid size="auto">
          <Stack alignItems="center" justifyContent="center">
            <ArrowForwardIcon sx={{ color: "text.primary" }} />
          </Stack>
        </Grid>
      )}
    </ListItemButton>
  );
}
