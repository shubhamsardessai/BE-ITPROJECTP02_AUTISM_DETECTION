import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";  
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Autistic = () => {
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
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            width: "35vw",
            height: "50vh",
            backgroundColor: "#ffd900",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <DialogTitle id="alert-dialog-slide-title">
            <p style={{ fontSize: "3rem", marginTop: "2rem" }}>Yes</p>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
              id="alert-dialog-slide-description"
            >
              Unfortunately, your child is Autistic.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" className="submit-button" href={'/'} color="primary" sx={{color:"black", borderColor:"black"}}>
              Done!
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default Autistic;
