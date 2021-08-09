import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 380,
    marginTop: "10rem",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    //justifyContent: "center",
    alignItems: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonFetch: {
    marginBottom: 10,
    marginTop: "2rem",
    fontSize: "0.7rem",
    width: 200,
    //marginRight: "4rem",
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: "2rem",
    marginLeft: "4.5rem",
  },
  addressLabel: {
    marginLeft: 0,
  },
  addressEntry: {
    width: 300,
    marginLeft: 50,
  },
}));
