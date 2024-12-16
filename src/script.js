// Index page image slide
const trendingContainers = document.querySelectorAll(".trending-container");
const nxtButtons = document.querySelectorAll(".nxt-button");
const preButtons = document.querySelectorAll(".pre-button");

trendingContainers.forEach((container, index) => {
  const containerWidth = container.getBoundingClientRect().width;

  if (nxtButtons[index]) {
    nxtButtons[index].addEventListener("click", () => {
      container.scrollLeft += containerWidth;
    });
  }

  if (preButtons[index]) {
    preButtons[index].addEventListener("click", () => {
      container.scrollLeft -= containerWidth;
    });
  }
});

// Navbar login/logout button
function onNavbarLoginOrLogoutClicked() {
  if (sessionStorage.getItem("loggedInUser") != null) {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "./index.html";
  } else {
    window.location.href = "./login.html";
  }
}

// Log in function
function onHeaderLoaded() {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  if (loggedInUser != null) {
    // Already logged in
    var elements = document.getElementsByClassName("navbar-login-text");
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "Logout";
    }
    return;
  }

  const userInf = [
    { username: "abc", password: "abc123@" },
    { username: "def", password: "def123@" },
  ];

  const loginForm = document.querySelector("#login-form");
  if (loginForm == null) return;

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const userName = document.querySelector("#username").value.trim();
    const userPassword = document.querySelector("#password").value.trim();

    // if user data is found
    const user = userInf.find(
      (u) => u.username === userName && u.password === userPassword
    );

    if (!userName || !userPassword) {
      alert("Username or password is empty");
    } else if (user) {
      alert(`Welcome back!, ${userName}`);
      console.log("Login successful.");
      sessionStorage.setItem("loggedInUser", userName);
      window.location.href = "./index.html";
      // Change navigation login to logout
    } else {
      alert("Login failed. The data you entered was not found.");
      console.log("Login failed.");
      window.location.href = "./login.html";
    }
  });
}

// Sign up function

document.addEventListener("DOMContentLoaded", () => {
  const userDB = [
    { username: "abc", password: "abc123@" },
    { username: "def", password: "def123@" },
  ];

  const signupForm = document.querySelector("#signup-form");
  if (signupForm == null) return;

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const userName = document.querySelector("#username").value.trim();
    const Password = document.querySelector("#password").value.trim();
    const ConfirmPassword = document
      .querySelector("#confirm-password")
      .value.trim();

    // if user data is found
    const user = userDB.find(
      (u) => u.username === userName && u.password === Password
    );

    if (user) {
      alert(`This user is already a member. Please log in.`);
      window.location.href = "./login.html";
    } else if (Password.length < 8) {
      alert("Password too short");
    } else if (Password !== ConfirmPassword) {
      alert("Your password should be matched with confirm password.");
      window.location.href = "./signup.html";
    } else {
      alert(`Welcomme ${userName} !`);
      window.location.href = "./index.html";
    }
  });
});
