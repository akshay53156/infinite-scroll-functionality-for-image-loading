

apiKey = "fM1gkc8jVmZr7kIU6tAlkPSxdOq09QUODrObEDhhYtE";
// apiUrl = "https://api.unsplash.com/photos";

apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`

async function getPhotos() {
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log(data); //array of photo objects
  
      let container = document.querySelector(".container");
      data.forEach((photo) => {
        console.log(photo);
        let img = document.createElement("img");
        img.src = photo.urls.regular;
        img.style.height = "500px";
        img.style.width = "400px";
        container.appendChild(img);
      });
    } catch (error) {
      console.log(error);
    }
  }

getPhotos();

window.addEventListener("scroll", function() {
    console.log(window.scrollY, window.innerHeight, document.body.offsetHeight)
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight) {
        getPhotos();
    }
})























// function myFunction(){
//     alert("Thank for subscription!!!");
// }








// function getData(dataId, getNextData) {
//     setTimeout(function () {
//         console.log("data", dataId);       
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });

// async function fetchData() {
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let data = await res.json();
//     return res;
// }

// fetchData();



