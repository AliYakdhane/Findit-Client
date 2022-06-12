import { Title } from "@material-ui/icons";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "./formComponent/input";
import Select from "./formComponent/select";
export default function Test() {
  let { _id } = useParams();
  const [form, setForm] = useState(null);
  const getType = (type, placeholder, options, title) => {
    switch (type) {
      case "DURATION":
        return "test";
      case "SELECT":
        return <Select options={options} title={title} />;
      case "Text":
        return <Input placeholder={placeholder} title={title} />;
      default:
    }
  };
  useEffect(() => {
    console.log(_id);
    Axios.get(`http://localhost:5000/Category/${_id}`).then((res) => {
      const tempArray = [];
      res.data.formId.formData.map((ele) => {
        if (ele.type === "Text") {
          tempArray.push({
            type: getType(ele.type, ele.placeholder, ele.options, ele.title),
          });
        } else if (ele.type === "SELECT") {
          tempArray.push({
            type: getType(ele.type, ele.placeholder, ele.options, ele.title),
          });
        }
      });
      setForm(tempArray);
      console.log(tempArray);
    });
  }, []);
  return (
    <div>
      {form?.map((ele) => {
        return <>{ele.type}</>;
      })}
    </div>
  );
}
/*
res
*/
