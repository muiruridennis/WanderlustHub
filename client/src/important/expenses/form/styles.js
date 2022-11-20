import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    paper: {
        width: '50%',
        marginLeft: '20px',
    },
    title:{
       fontSize: "1em" ,
       textAlign: "center",
       marginTop: "20px",
       padding: "20px",
       color: "#fff"
    },
    textField:{
        marginTop: "10px"
    },
    buttonSubmit: {
        margin: 10,
      },
      datePicker:{
          margin: 15,
          padding:20
      },
      label: {
          marginLeft: 15,
      },
      grid: {
          backgroundColor: "seagreen"
      }

}))