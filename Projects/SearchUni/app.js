url = "http://universities.hipolabs.com/search?name=";
// axios imported in html file.
let country = document.querySelector("input");
let check = document.querySelector("button");
let list = document.querySelector("ul");

check.addEventListener("click", () => {
  display(country);
});
function display(country) {
  list.innerText = "";
  //   let uni = fetch(url + country)
  //     .then((response) => response.json())
  //     .then((uni) => {
  //       console.log(uni);
  //     })
  //     .catch((e) => {
  //       console.log("error fetching:", e);
  //     });
  let res = axios
    .get(url + country.value)
    .then((res) => {
      res.data.forEach((uni) => {
        let li = document.createElement("li");
        li.innerText = uni.name;
        list.append(li);
      });
    })
    .catch((e) => {
      console.log("error", e);
    });
}
