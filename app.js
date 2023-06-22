const btn = document.getElementById("button-1");

const theme = document.getElementById("style");

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "dark-style.css";
  } else {
    theme.href = "style.css";
  }
});
