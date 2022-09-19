const Box = (props) => {
  //  Write your code here.
  const { className, textContent } = props;
  return (
    <div className="items-container">
      <button className={className}>{textContent}</button>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div>
      <Box className="small" textContent="Small" />
      <Box className="medium" textContent="Medium" />
      <Box className="large" textContent="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
