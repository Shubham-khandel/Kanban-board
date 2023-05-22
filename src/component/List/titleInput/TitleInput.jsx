/* eslint-disable react/prop-types */
import styles from "./TitleInput.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core";
import { FormHelperText } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  helperText: {
    color: "red",
    margin: "0px",
    padding: "0px",
    // backgroundColor: "#f1f2f4",
  },
}));

export default function TitleInput({ onChange, onClick, setOpen, listName }) {
  const classes = useStyles();
  return (
    <div className={styles.addCardContainer}>
      <div className={styles.textBox}>
        <TextField
          type="text"
          placeholder="add card"
          onChange={onChange}
          sx={{
            width: "15rem",
            backgroundColor: "white",
            borderRadius: "5px",
            border: "none",
          }}
          size="small"
          multiline
          helperText={
            <FormHelperText className={classes.helperText}>
              {(listName.length < 3 && "List name is too small") ||
                (listName.length > 12 &&
                  "List name should not exceed 12 characters")}
            </FormHelperText>
          }
          InputProps={{
            classes: {
              helperText: classes.helperText,
            },
          }}
        />
      </div>
      <div className={styles.addCardBtn}>
        <span className={styles.btnContainer}>
          <Button
            onClick={onClick}
            variant="contained"
            sx={{
              backgroundColor: "rgb(58, 121, 238)",
              color: "white",
              fontSize: "0.8rem",
              padding: "0.2rem",
              height: "2rem",
            }}
            className={styles.addBtn}
          >
            Add List
          </Button>
          <CloseIcon
            onClick={() => setOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </span>
      </div>
    </div>
  );
}
