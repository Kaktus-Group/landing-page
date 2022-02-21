import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  border: "none",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [count, setCount] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  // const { modal } = React.useContext(ModalContext);
  // console.log("====================================");
  // console.log(modal);
  // console.log("====================================");
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontStyle: "poppins",
                }}
              >
                Adults
              </Typography>
              <Typography
                sx={{
                  color: "rgb(145, 158, 171)",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Age 13 or above
              </Typography>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <FaMinusCircle
                onClick={count > 0 ? () => setCount((prev) => prev - 1) : 0}
                className="text-modalSize text-gray-400"
              />
              <Typography className="font-barlow font-bolder">
                {count}
              </Typography>
              <FaPlusCircle
                onClick={() => setCount((prev) => prev + 1)}
                className="text-modalSize text-gray-400"
              />
            </Typography>
          </Typography>
          <Typography
            sx={{ border: "0.1px dashed rgb(145, 158, 171)" }}
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "space-between",

              marginTop: "20px",
            }}
          >
            <Typography sx={{}}>
              <Typography
                sx={{
                  fontSize: "18px",

                  fontWeight: "600",
                  fontStyle: "poppins",
                }}
              >
                Children
              </Typography>
              <Typography
                sx={{
                  color: "rgb(145, 158, 171)",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Ages 2 - 12
              </Typography>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <FaMinusCircle
                onClick={sum > 0 ? () => setSum((prev) => prev - 1) : 0}
                className="text-modalSize text-gray-400"
              />
              <Typography className="font-barlow font-bolder">{sum}</Typography>
              <FaPlusCircle
                onClick={() => setSum((prev) => prev + 1)}
                className="text-modalSize text-gray-400"
              />
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
