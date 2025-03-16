interface ButtonProps {
  textVisible: string;
  clickFn: () => void;
}

const ButtonComponent = ({ textVisible, clickFn }: ButtonProps) => {
  return (
    <button className="button-style" onClick={clickFn}>
      {textVisible}
    </button>
  );
};

export default ButtonComponent;
