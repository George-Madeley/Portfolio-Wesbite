import { Suspense } from "react";
import Repo from "./_components/Repo";
import RadialBackground from "~/components/RadialBackground";

import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export default function Page(props: PageProps<"/projects/[repo]">) {
  return (
    <RadialBackground color="var(--mui-palette-primary-main)">
      <Suspense
        fallback={
          <Grid
            alignItems="center"
            container
            justifyContent="center"
            sx={{ width: "100vw", height: "100vh" }}
          >
            <Grid>
              <CircularProgress />
            </Grid>
          </Grid>
        }
      >
        <Repo {...props} />
      </Suspense>
    </RadialBackground>
  );
}
