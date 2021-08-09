import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
/*import { useDispatch, useSelector } from "react-redux";*/
import useStyles from "./styles";
import Select from "react-select";
import db from "./Firebase";
import "./Form.css";
import Web3 from "web3";

const contractAddress = "0x6CCb6031402c83B4E6542Be79168D2d0C2dbcdB3";
const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "below20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "below30",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "below40",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "below50",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "below60",
    type: "event",
  },
  {
    inputs: [],
    name: "getThePrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateThePrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const Form = () => {
  const [postData, setPostData] = useState({ address: "", range: "" });
  /*const dispatch = useDispatch();*/
  const classes = useStyles();
  const options = [
    { value: "20", label: "less than 20 GWEI" },
    { value: "30", label: "less than 30 GWEI" },
    { value: "40", label: "less than 40 GWEI" },
  ];
  const onChangeInput = (values) => {
    setPostData({ ...postData, range: values.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Your data has been submitted.Wait for the update :)");
    db.collection("notify").doc(postData.range).set({
      name: postData.address,
    });
  };

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
  }
  async function load() {
    await loadWeb3();
    window.contract = await loadContract();
  }
  load();
  async function loadContract() {
    return await new window.web3.eth.Contract(ABI, contractAddress);
  }
  async function gasprice() {
    //updateStatus('fetching Cool Number.....');
    const gasprice = await window.contract.methods.getThePrice().call();
    alert("GasPrice is :" + gasprice);
  }
  /*async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    } else {
      alert("Please install Metamask extension to continue");
    }
  }*/

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <div className="threshold-field">
          <Typography variant="h6" className={classes.addressLabel}>
            Enter Address :
          </Typography>
          <TextField
            name="Wallet Address"
            variant="outlined"
            label="Wallet Address"
            value={postData.address}
            className={classes.addressEntry}
            onChange={(e) =>
              setPostData({ ...postData, address: e.target.value })
            }
          />
        </div>
        <div className="threshold-field">
          <Typography variant="h6" className={classes.ThreshholdLabel}>
            Select Threshold :
          </Typography>
          <Select
            className="select-field"
            onChange={onChangeInput}
            options={options}
          />
        </div>
        <div className="buttonContainer">
          <Button
            className={classes.buttonFetch}
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => gasprice()}
          >
            Current Gas Price
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </div>
        {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
      </form>
    </Paper>
  );
};

export default Form;
