import React, { useState } from "react";
import authSvg from "../../../assets/auth2.svg";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";
import { Button, Typography } from "@mui/material";
import { Form, Schema, InputGroup, Input, Tooltip } from "rsuite";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

function Forme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_id";
      const templateId = "template_at2y0r6";
      const userId = "hKRfh0p_85d_oMIa0";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className=" text-gray-900 flex justify-center ">
      <div className="  m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="titleHolderr">
              <h2 style={{ color: "#008080" }}>Get in Touch</h2>

              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  lineHeight: "26px",
                  color: "#7b809a",
                  fontSize: "16px",
                }}
                variant="body2"
                color="text"
              >
                Fill in the form below, and we'll get back to you within 24
                hours.Thank you!
              </Typography>
            </div>

            <Form>
              <div className="mx-auto max-w-xs relative ">
                <TextField
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  name="name"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <Button
                  onClick={submit}
                  type="submit"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#008080",
                    width: "19rem",
                    height: "2.5rem",
                    marginTop: "1rem",
                  }}
                  variant="contained"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">Submit</span>
                </Button>
                <p></p>
                {emailSent ? (
                  <p
                    style={{
                      color: "#FA3E3E",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    Thank you for your message, we will be in touch in no time!
                  </p>
                ) : null}{" "}
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button>
                  <FacebookOutlinedIcon style={{ color: "#3c5a99" }} />
                </button>
                <button>
                  <CallRoundedIcon
                    title="call us"
                    style={{ marginLeft: "0.6rem", color: "#049c54" }}
                  />
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Forme;
