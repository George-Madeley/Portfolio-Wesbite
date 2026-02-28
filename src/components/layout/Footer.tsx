import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CopyButton from "../CopyButton";

export default function Footer() {
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
      <Card sx={{ width: "100%", pt: 7, pb: 6 }}>
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
                <Grid alignItems="center" container gap={1} key={info.id}>
                  <Grid size="auto">{info.icon}</Grid>
                  <Grid size="grow">
                    <Typography>{info.text}</Typography>
                  </Grid>
                  <Grid size="auto">
                    <CopyButton label={info.id} text={info.text} />
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
