const tick = () => {
  const date = new Date();

  // get actual Date (Hour, minute and second) information
  const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  const seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

  // remove two dots of hour, minute and second
  const color = `#${hours}:${minutes}:${seconds}`;
  const finalColor = color.replace(/:/g, "");

  // defines background with hex date value
  document.getElementById("back-color").style.backgroundColor = finalColor;

  // set actual hour, minute and second values
  document.getElementById("hex-value").innerHTML = finalColor;

  // call the function when passes 1 second
  setTimeout(tick, 1000);
};
tick();
