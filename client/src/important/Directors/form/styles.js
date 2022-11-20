import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: "100%",
      paddingLeft: 0,
      paddingRight: 0,
      margin: "6px",

    },
  },
  paper: {
    padding: "20px",
    width: "100%",
    // height: "100%",
    // backgroundColor: "#dae5e8"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: "20px",
    color: "#1c035f",
    marginBottom: "5px",
    flexGrow: 1,
    textAlign: "center"
  },
  validationErrors: {
    color: "red",
    fontStyle: "italic",
    marginLeft: "10px",
  },
  disabledButton: {
    marginTop: "20px",
    opacity: .6,
    cursor: "not-allowed !important",
  },
  buttons: {
    marginTop: "20px",
  },
  fileInput: {
    margin:"16px 0 5px 5px",
    display: 'block ',
  }

}));

