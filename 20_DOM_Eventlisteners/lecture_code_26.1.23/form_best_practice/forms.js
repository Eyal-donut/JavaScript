// forms
let formUser = document.getElementById("form-user");
let cancel = document.getElementById("button-cancel");
let send = document.getElementById("button-send");

//inputs for text, email, tel, color, number...
let first = document.getElementById("input-first");
let password = document.getElementById("input-password");
let email = document.getElementById("input-email");

const init = function () {
  cancel.addEventListener("click", reset);
  send.addEventListener("click", sendFunc);
};

const reset = function (ev) {
  //HTML will automatically put the form back to its initial state
  //unless we do
  ev.preventDefault();
  // preventDefault is there to stop html from running its validation
  // programmatically we can reset it

  formUser.reset();
  //if you want to do anything else...
};

cancel.addEventListener("click", reset);

const validate = function () {
  let fails = [];
  if (first.value === "") {
    fails.push({
      input: "input-first",
      msg: "First name is required",
    });
  }
  if (password.value === "") {
    fails.push({
      input: "input-password",
      msg: "Password is required",
    });
  }

  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  // The password is at least 8 characters long (?=.{8,}).

  // The password has at least one uppercase letter (?=.*[A-Z]).

  // The password has at least one lowercase letter (?=.*[a-z]).

  // The password has at least one digit (?=.*[0-9]).

  // The password has at least one special character ([^A-Za-z0-9]).


  if (!strongPassword.test(password.value)) {
    fails.push({
      input: "input-password",
      msg: "Password must contain at least one uppercase, one lowercase, one number, and one special character",
    });
  }

  if (email.value === "") {
    fails.push({
      input: "input-email",
      msg: "Email is required",
    });
  }
  return fails;
};

const sendFunc = function (ev) {
  ev.preventDefault();
  ev.stopPropagation();

  //or the click will travel to the form and the form will submit
  let fails = validate();

  if (fails.length === 0) {
    document.getElementById("form-user").submit();
    //good to go
  } else {
    //there are some errors to display
    //bad user
    // let err = document.querySelector(".error");
    // err.classList.add("error");
    // err.setAttribute("data-errormsg", "First name is required");

    //or

    fails.forEach(function (obj) {
      let field = document.getElementById(obj.input);
      field.parentElement.classList.add("error");
      field.parentElement.setAttribute("data-errormsg", obj.msg);
    });
  }
};

document.addEventListener("DOMContentLoaded", init);

// the browser fully loaded HTML, and the DOM tree is built, but external
//  resources like pictures <img> and stylesheets may not yet have loaded.
// DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
