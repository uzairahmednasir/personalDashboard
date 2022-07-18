import "./styles.scss";

// initial background image loader
function loadImg() {
  $("body").css(
    "backgroundImage",
    `url(https://images.unsplash.com/photo-1551309292-e185c0b6e22a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfGFsbHx8fHx8fHx8fDE2NTc5Nzk1MTM&ixlib=rb-1.2.1&q=80&w=1080)`
  );

  $(".author").html(`
        by <a 
            href='https://unsplash.com/@asoggetti'
            target='_blank' 
            class="author-link"
            >
            asoggetti
           </a>
      `);
}

window.onload = loadImg();


// image changer using async await
// async function setBackground(){
//   const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature");
//   const data = await response.json();

//   $("body").css("backgroundImage", `url(${data.urls.full})`);
//       $(".author").html(`
//         by <a 
//             href=${data.user.links.html} 
//             target='_blank' 
//             class="author-link"
//             >
//             ${data.user.username}
//            </a>
//       `);
// }


// image changer using promises (Fetch API .then() method)
const setBackground = () => {
  fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  )
    .then((response) => response.json())
    .then((data) => {
      $("body").css("backgroundImage", `url(${data.urls.full})`);
      $(".author").html(`
        by <a 
            href=${data.user.links.html} 
            target='_blank' 
            class="author-link"
            >
            ${data.user.username}
           </a>
      `);
    })
    .catch((err) => {
      // Use a default background image/author
      document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
      )`;
      document.getElementById("author").textContent = `By: Dodi Achmad`;
    });
};

$(".content__btn").click((e) => {
  setBackground();
});

//-------------------------------------------------

// crypto section
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    $(".top__crypto").html(`
      <div class='crypto__icon'>
        <img src=${data.image.small} />
        <span>${data.name}</span>
      </div>
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `);
  })
  .catch((err) => console.error(err));

//------------------------------------------------

// time
function updateTime() {
  let date = new Date();
  $(".content__time").text(
    date.toLocaleTimeString("en-us", { timeStyle: "short" })
  );
}
setInterval(updateTime, 1000);

//-------------------------------------------------

// weather
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude: lat, longitude: lon } = position.coords;
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      $(".top__weather").html(`
        <img src=${iconUrl} />
        <p>${Math.round(data.main.temp)}&deg;</p>
        <p>${data.name}</p>
      `);
    })
    .catch((err) => console.error(err));
});

// window.addEventListener("resize", function (event) {
//   $("#app").html(`
//     <p>${window.innerWidth}</p>
//     <p>${window.innerHeight}</p>
//   `);
// });



// blob javascript
// maybe add css opacity to transition on the first image
// jquery image onload