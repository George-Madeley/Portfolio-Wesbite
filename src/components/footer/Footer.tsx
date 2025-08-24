import { Copy } from "../copy";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  const contactInfo = [
    {
      icon: <EmailIcon />,
      text: "george.madeley@outlook.com",
      id: "email",
    },
    { icon: <PhoneIcon />, text: "+44 7830 979199", id: "phone" },
  ] as const;

  return (
    <Stack
      alignItems="center"
      component="footer"
      justifyContent="end"
      sx={{ width: "100%" }}
    >
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Grid
            alignItems="center"
            container
            gap={"20%"}
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Grid container direction="column" gap={3}>
              {contactInfo.map((info) => (
                <Grid container gap={1} key={info.id}>
                  <Grid size="auto">{info.icon}</Grid>
                  <Grid size="grow">
                    <Typography>{info.text}</Typography>
                  </Grid>
                  <Grid size="auto">
                    <Copy label={info.id} text={info.text} />
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container direction="column" gap={3}>
              <Grid>
                <Button
                  fullWidth
                  href="https://github.com/George-Madeley"
                  rel="noreferrer"
                  startIcon={<GitHubIcon />}
                  target="_blank"
                >
                  Github
                </Button>
              </Grid>
              <Grid>
                <Button
                  fullWidth
                  href="https://www.linkedin.com/in/georgemadeleybathcompsyseng"
                  rel="noreferrer"
                  startIcon={<LinkedInIcon />}
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
}
