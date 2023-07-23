import React from "react";

const InputField = (props) => {
  return (
    <div className="input-field">
      <label
        style={{
          display: props.noLabel ? "none" : "block",
        }}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {props.register ? (
        <input
          {...props}
          {...props.register(props.id, {
            required:
              props.requiredField !== undefined ? props.requiredField : false,
          })}
          onChange={props.onChange ? props.onChange : () => {}}
        />
      ) : (
        <input
          {...props}
          onChange={props.onChange ? props.onChange : () => {}}
        />
      )}
    </div>
  );
};

export default InputField;
