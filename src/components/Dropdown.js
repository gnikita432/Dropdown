import React from "react";
import Select from "react-select";
import { options } from "../options";

const colourStyles = {
  control: (base) => ({
    ...base,
    background: "white",
    width: "60vw",
  }),
  option: (base, { data }) => {
    return {
      ...base,
      color: data.color,
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: data.color,
      color: "white",
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      color: "white",
    };
  },
  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      color: "white",
      cursor: "pointer",
      ":hover": {
        color: "white",
      },
    };
  },
};

function Dropdown() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>MultiSelect Dropdown</h2>
      <Select isMulti options={options} styles={colourStyles} />
    </div>
  );
}

export default Dropdown;
