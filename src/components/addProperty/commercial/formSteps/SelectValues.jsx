import React from "react";

function SelectValues({ total, value, setValue, type, multiple }) {
  const optionHandler = (val) => {
    if (multiple) {
      if (value?.includes(val)) {
        const filteredArray = value.filter((i) => i !== val);
        setValue(filteredArray);
      } else {
        setValue([...value, val]);
      }
    } else {
      if (value?.includes(val)) {
        setValue([]);
      } else {
        setValue([val]);
      }
    }
  };

  console.log(value);
  return (
    <div className="select-option-container">
      {total.map((item, index) => {
        return (
          <div
            className={value?.includes(item) ? "item active" : "item"}
            onClick={() => optionHandler(item)}
            key={index}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SelectValues;
