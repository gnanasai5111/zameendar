import React from "react";
import "../form-styles.less";

function SelectValues({
  total,
  value,
  setData,
  setValue,
  type,
  multiple,
  data,
  isNestedState,
}) {
  const optionHandler = (val) => {
    if (isNestedState) {
      if (multiple) {
        if (data[type]?.includes(val)) {
          const filteredArray = data[type].filter((i) => i !== val);
          setData({ ...data, [type]: filteredArray });
        } else {
          setData({ ...data, [type]: [...data[type], val] });
        }
      } else {
        if (value?.includes(val)) {
          setData({ ...data, [type]: [] });
        } else {
          setData({ ...data, [type]: [val] });
        }
      }
    } else {
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
    }
  };

  return (
    <div className="select-option-container">
      {isNestedState
        ? total.map((item, index) => {
            return (
              <div
                className={data[type]?.includes(item) ? "item active" : "item"}
                onClick={() => optionHandler(item)}
                key={index}
              >
                <p>{item}</p>
              </div>
            );
          })
        : total.map((item, index) => {
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
