import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function SocialLinks() {
  return (
    <>
      <Tooltip title="GitHub">
        <IconButton
          href="https://github.com/George-Madeley"
          rel="noreferrer"
          sx={{ color: "text.primary" }}
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          href="https://www.linkedin.com/in/georgemadeleybathcompsyseng"
          rel="noreferrer"
          sx={{ color: "text.primary" }}
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
