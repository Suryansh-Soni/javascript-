// Axios : this is used because we dont need to parse the response into json
// used insted of fetch
// import axios from "axios";
let para = document.querySelector("#fact");
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  para.innerText = fact;
});
let url = "https://catfact.ninja/fact";
async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error:", e);
    return "No Fact Found.";
  }
}
getFacts();
