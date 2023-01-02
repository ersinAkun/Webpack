import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"; // Boostrap javascript dosyası


document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack1");
  alert("v1");
  alert("v2");
  alert("v3");
  alert("v4");
  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});