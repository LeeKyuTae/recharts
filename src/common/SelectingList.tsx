import React, { useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface SelectProps {
  selectList: string[];
  updateSelected: (data: string) => void;
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
      textAlign: "center",
      margin: theme.spacing(1),
    },
    title: {
      display: "inline",
    },
  })
);

const SelectingList: React.FC<SelectProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelected(Number(event.target.value));
    props.updateSelected(props.selectList[Number(event.target.value)]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    setSelected(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.URL]);

  return (
    <>
      {props.selectList.length !== 0 && (
        <FormControl variant="outlined" className={classes.root}>
          <InputLabel htmlFor="outlined-age-native-simple">
            {props.title}
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={selected}
            onChange={handleChange}
          >
            {props.selectList?.map((value, idx) => {
              return (
                <MenuItem value={idx} key={idx}>
                  <span>{`${t(value)}`}</span>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default SelectingList;
