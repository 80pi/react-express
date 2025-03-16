import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

const PageNavigation = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <ButtonComponent
        textVisible="Add User"
        clickFn={() => navigate("/add")}
      />
      <ButtonComponent
        textVisible="View User"
        clickFn={() => navigate("/view")}
      />
    </div>
  );
};
export default PageNavigation;
