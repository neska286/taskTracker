import Button from "../Button/Button";

const Header = ({ title, toggleHandler, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        clickButton={toggleHandler}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

//   const headingStyles = {
//       color : 'red',
//       backgroundColor: 'black'
//   }
export default Header;
