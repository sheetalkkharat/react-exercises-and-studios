import "./styling.css";
function ClickedButton() {
  return;


function handleClick() {
  alert("Pin removed from board");
}
return (
  <button id="clickedButton" onClick={handleClick}>
    {" "}
    Saved
  </button>
);
}
export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
