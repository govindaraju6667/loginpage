const textUser = document.getElementById("textuser");
const password = document.getElementById("password");
const signin = document.getElementById("sign-in");
const register = document.getElementById("register");

let array = [];
let validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

signin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!textUser.value.match(validateEmail)) {
    // alert("please enter valid email");
    validname.style.display = "block";
  }
  if (!password.value.match(pattern)) {
    //   alert("please enter valid password");
    validpass.style.display = "block";
  } else {
    let obj = { email: textUser.value, password: password.value };
    array.push(obj);
    console.log(obj);
    // validname.style.display = "none";
  }
  textUser.value = "";
  password.value = "";
});

register.addEventListener("click", () => {
  //   alert("register");
  signin.innerHTML = "Register";

  // for (let i = 0; i < obj.length; i++) {
  //   if (obj[i].name === name && obj[i].age === password) {
  //     count++;
  //   }
  //   if (count === 2) {
  //     console.log(true);
  //   } else {
  //     console.log(false);

  //   }
  // }

  const registeredUser = array.find(
    (item) =>
      item.username === logUserValue && item.password === logPasswordValue
  );

  if (registeredUser) {
    alert("login successful");
  } else {
    alert("please register");
  }
});
