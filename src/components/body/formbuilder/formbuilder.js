import $ from "jquery"; //Load jquery
import React, { Component, createRef } from "react"; //For react component
import ReactDOM from "react-dom";

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

//For Load Selected Elements. Not compulsory. If you don't want this. Don't pass formData in below formBuilder initialize.
const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "Add Category"
  },
  {
    type: "paragraph",
    label: ""
  }
];

document.body.style.margin = ""; //For add margin in HTML body

//Initialize formBuilder 
class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  render() {
    return <div  ref={this.fb} />;
  }
}
function formbuilder() {
    return (
        <FormBuilder />
    )
}
export default formbuilder;