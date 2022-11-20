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
  container: {
    position: "absolute",
    top: "50px",

  },
  paper: {
    padding: "28px",
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
    fontSize: "25px",
    color: "#1c035f",
    marginBottom: "15px",
    flexGrow: 1,
    textAlign:"center"
  },
  // title: {
  //   fontSize: "1em" ,
  //   textAlign: "center",
  //   marginTop: "20px",
  //   padding: "20px",
  //   color: "#fff",
  //   width: "100%",
  // },
  actionButton: {
    marginTop: "20px",
  },
  submitButton: {
    position: "relative",
    left: "20px",
    top: "4px",
  },
  clearButton: {
    position: "relative",
    left: "150px",
    top: "4px"
  },
  datePicker: {
    padding:"20px",
    marginBottom : "10px"

  },
  addClient: {
    position: "relative",
    margin: "10px 0",
    left: "10px"
  },
  tableField: {
    width: "40px",
    margin: "0 10px"
  },
  nameField: {
    width: "70px",
    margin: "0 20px 0 0"

  },
  updateButton : {
    backgroundColor:"blue",
    padding: "3px",
    borderRadius: "25px",
    marginRight: "15px",
  },
  deleteButton : {
    backgroundColor:"red",
    padding: "3px",
    borderRadius: "25px"
  },
  tourType: {
    position: "relative",
    // left: "40px",
    top: "-10px"
  },
  status: {
    fontSize: "14px"
  },
  subTitle: {
    textAlign: "center",
    fontSize: "1rem",
  },
  subTitle1: {
    marginTop:"30px",
    fontSize: "16px",
  },
  validationErrors : {
    color: "red",
    fontStyle: "italic",
    marginLeft: "10px",
  },
 

}));

