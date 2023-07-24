const StateSelect = (props) => {
  const { id, options, register, ...rest } = props;
  return (
    <div className="select-field">
      <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
      <select {...rest} id={id} {...register(id)}>
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
