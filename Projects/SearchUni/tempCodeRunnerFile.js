url = "http://universities.hipolabs.com/search?name=";

function display(country) {
  //   let uni = fetch(url + country)
  //     .then((response) => response.json())
  //     .then((uni) => {
  //       console.log(uni);
  //     })
  //     .catch((e) => {
  //       console.log("error fetching:", e);
  //     });
  let res = axios.get(url + country).then((res) => {
      console.log(res.data[0].name)}).catch((e)=>{
        console.log("error",e)
      }); 
}
display("india");
