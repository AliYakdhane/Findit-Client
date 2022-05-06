import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import devices0 from "../../../assets/devices0.gif";
import { Grid } from "@mui/material";

export default function App() {
  const [cards, setCard] = useState([
    {
      id: "1",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "2",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "3",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "4",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "5",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "6",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "7",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "8",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
    {
      id: "9",
      name: "Electronics",
      image: devices0,
      icon: ArrowCircleRightOutlinedIcon,
      selected: false,
    },
    {
      id: "10",
      name: "Electronics",
      image: devices0,
      selected: false,
    },
  ]);
  const changeCard = (id) => {
    const tempArray = [...cards];
    tempArray.forEach((ele) => {
      ele.selected = false;
    });
    const Index = tempArray.findIndex((ele) => {
      return ele.id === id;
    });
    tempArray[Index].selected = true;
    setCard(tempArray);
  };
  return (
    <Grid>
      {cards.map((ele) => {
        return (
          <MDBCard
            key={ele.id}
            onClick={() => {
              changeCard(ele.id);
            }}
            style={{
              maxWidth: "10rem",
              minHeight: "11rem",
              borderRadius: "12px",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              display: "inline-block",
              margin: "1rem",
              border: ele.selected ? "1px solid #00AEAD" : " 1px solid #dddddd"
            }}
            
          >
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: "center" }}>
              {ele.name}
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "12px" }}
              src={ele.image}
              position="top"
              alt="..."
            />
          </MDBCard>
        );
      })}
    </Grid>
  );
}
