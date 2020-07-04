import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

interface TitleWithDurationProps {
  title: string;
  startDate: string;
  endDate: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    title: {},
    duration: {
      alignItems: "flex-end",
    },
    paperHeader: {
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexDirection: "row",
    },
  })
);

const TitleWithDuration: React.FC<TitleWithDurationProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {props.startDate && props.endDate && (
        <Grid
          className={classes.paperHeader}
          container
          alignItems={"flex-end"}
          justify="space-between"
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant="h4" component="h4">
              {props.title}
            </Typography>
          </Grid>
          <Grid
            className={classes.duration}
            container
            xs={6}
            justify="flex-end"
            alignItems={"flex-end"}
          >
            <div className={classes.duration}>
              <Typography variant="caption" component="span" display="inline">
                {`start`}
              </Typography>
              <Typography variant="h6" component="pre" display="inline">
                {` ${props.startDate} `}
              </Typography>
              <Typography variant="caption" component="pre" display="inline">
                {" ~ "}
              </Typography>
              <Typography variant="caption" component="span" display="inline">
                {" end"}
              </Typography>
              <Typography variant="h6" component="pre" display="inline">
                {` ${props.endDate} `}
              </Typography>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default TitleWithDuration;
