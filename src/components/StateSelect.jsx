const StateSelect = (props) => {
  const { id, options, ...rest } = props;
  return (
    <div className="select-field">
      <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
      <select {...rest} id={id}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateSelect;
