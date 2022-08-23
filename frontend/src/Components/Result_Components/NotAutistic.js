import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";  
import Slide from "@mui/material/Slide";

import "../../Styles/result.css";
import { textAlign } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NotAutistic = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        sx={{
          // display: "flex",
          // textAlign: "center",
          // alignItems: "center"
        }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{
          width: "35vw",
          height: "50vh",
          backgroundColor: "#ffd900",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
          <DialogTitle id="alert-dialog-slide-title">
            <p style={{ fontSize: "3rem", marginTop: "2rem" }}>No</p>
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ fontSize: "1.5rem", fontWeight: "bold" }} id="alert-dialog-slide-description">
              Your child is not Autistic!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" href={'/'} color="primary" sx={{color:"black", borderColor:"black"}}>
              Done!
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default NotAutistic;
