//Worked on by Stefan Frunza sfrunza@myseneca.ca 021650148 and only me!

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  var lat = document.getElementById("Latitude").value;
  var long = document.getElementById("Longitude").value;

  if (
    (lat < -90 || lat > 90 || isNaN(lat)) &&
    (long < -180 || long > 180 || isNaN(long))
  ) {
    document.getElementById("latspan").hidden = "false";
    document.getElementById("latspan").style.display = "inline";
    document.getElementById("longspan").hidden = "false";
    document.getElementById("longspan").style.display = "inline";
    event.preventDefault();
    return false;
  } else if (lat < -90 || lat > 90 || isNaN(lat)) {
    document.getElementById("latspan").hidden = "false";
    document.getElementById("longspan").hidden = "true";
    document.getElementById("longspan").style.display = "none";
    document.getElementById("latspan").style.display = "inline";
    event.preventDefault();
    return false;
  } else if (long < -180 || long > 180 || isNaN(long)) {
    document.getElementById("longspan").hidden = "false";
    document.getElementById("latspan").hidden = "true";
    document.getElementById("latspan").style.display = "none";
    document.getElementById("longspan").style.display = "inline";
    event.preventDefault();
    return false;
  } else {
    document.getElementById("latspan").hidden = "true";
    document.getElementById("longspan").hidden = "true";
    document.getElementById("latspan").style.display = "none";
    document.getElementById("longspan").style.display = "none";
    return true;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};

