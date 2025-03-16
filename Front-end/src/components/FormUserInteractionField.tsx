interface FieldProps {
  labelName: string;
  inputType: string;
  inputName: string;
}

const FormUserInteractionField = ({
  labelName,
  inputType,
  inputName,
}: FieldProps) => {
  return (
    <div style={{ margin: "1rem" }}>
      <label htmlFor={inputType} style={{ marginRight: "1rem" }}>
        {labelName}
      </label>
      <input type={inputType} name={inputName} />
    </div>
  );
};
export default FormUserInteractionField;
