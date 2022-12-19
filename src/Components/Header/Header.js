import Button from "../Button/Button";

const Header = ({ title, toggleHandler, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        clickButton={toggleHandler}
        text={showAddTask ? "Close" : "Add"}
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
