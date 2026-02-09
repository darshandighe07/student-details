// load existing users
let data = JSON.parse(localStorage.getItem("student")) || [];

// show login
function login() {
  document.getElementById("login").style.display = "block";
  document.getElementById("zz").style.display = "none";
}

// LOGIN
function f() {
  let name = document.getElementById("lname").value.trim();
  let password = document.getElementById("lpassword").value.trim();
  let cour = document.getElementById("lcourse").value.trim();

  if (name === "" || password === "" || cour === "") {
    alert("Fill all details");
    return;
  }

  let users = JSON.parse(localStorage.getItem("student")) || [];

  let user = users.find(
    u => u.name === name && u.password === password && u.course === cour
  );

  if (user) {
    alert("Login successfully ✔");
    window.location.href = "info.html";
  } else {
    alert("Invalid name or password ❌");
  }
}

// show signup
function sin() {
  document.getElementById("zz").style.display = "block";
  document.getElementById("login").style.display = "none";
}

// SIGNUP
function fd() {
  let name = document.getElementById("sname").value.trim();
  let password = document.getElementById("spassword").value.trim();
  let cour = document.getElementById("co").value.trim();

  if (name === "" || password === "" || cour === "") {
    alert("Fill all details");
    return;
  }

  data.push({ name, password, course: cour });
  localStorage.setItem("student", JSON.stringify(data));

  alert("Registration successful ✔");
  window.location.href = "info.html";
}
