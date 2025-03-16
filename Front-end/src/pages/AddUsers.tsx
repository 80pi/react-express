import { useNavigate } from "react-router-dom";
import FormUserInteractionField from "../components/FormUserInteractionField";

const AddUsers = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <button
        style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
        onClick={() => navigate("/")}
      >
        {"< Back to Home"}
      </button>
      <div className="inner-container">
        <h3 style={{ display: "flex", justifyContent: "center" }}>Add User</h3>
        <FormUserInteractionField
          inputName="userName"
          labelName="Name"
          inputType="text"
        />
        <FormUserInteractionField
          inputName="age"
          labelName="Age"
          inputType="Number"
        />
        <div style={{ margin: "1rem" }}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" value={"male"} />
          <label htmlFor="gender-male">Male</label>
          <input type="radio" name="gender" value={"female"} />
          <label htmlFor="gender-female">Female</label>
        </div>
        <FormUserInteractionField
          inputName="emailId"
          labelName="Email Id"
          inputType="email"
        />
        <FormUserInteractionField
          inputName="mobileNumber"
          labelName="Mobile Number"
          inputType="text"
        />
        <FormUserInteractionField
          inputName="doj"
          labelName="Date Of Birth"
          inputType="date"
        />
        <FormUserInteractionField
          inputName="hobbies"
          labelName="Hobies"
          inputType="checkbox"
        />
      </div>
    </div>
  );
};

export default AddUsers;
