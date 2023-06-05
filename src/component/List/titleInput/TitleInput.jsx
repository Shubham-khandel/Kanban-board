/* eslint-disable react/prop-types */
import styles from "./TitleInput.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core";
import { FormHelperText } from "@mui/material";
import React, { useState, useEffect } from "react";

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

  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (listName.length < 3 && listName.length > 0) {
      setErrorText("Card content is too small");
    }
    if (listName.length > 12) {
      setErrorText("Card content should not exceed 25 characters");
    }
  }, [listName]);

  return (
    <div className={styles.addCardContainer}>
      <div className={styles.textBox}>
        <TextField
          type="text"
          placeholder="add title"
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
              {(listName.length < 3 && errorText) ||
                (listName.length > 12 && errorText)}
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
