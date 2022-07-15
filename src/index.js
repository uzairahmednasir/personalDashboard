import "./styles.scss";

// background image loader
function loadImg() {
  $('body').css('backgroundImage', `url(https://images.unsplash.com/photo-1505567745926-ba89000d255a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfGFsbHx8fHx8fHx8fDE2NTc5MDIzNTM&ixlib=rb-1.2.1&q=80)`)

  $('.author').html(`
        by <a 
            href='https://unsplash.com/@niiloi'
            target='_blank' 
            class="author-link"
            >
            niiloi
           </a>
      `)
}

window.onload = loadImg();
 
const setBackground = () => {
  fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")      
    .then(response => response.json())
    .then(data => {
      
      $('body').css('backgroundImage', `url(${data.urls.full})`)
      $('.author').html(`
        by <a 
            href=${data.user.links.html} 
            target='_blank' 
            class="author-link"
            >
            ${data.user.username}
           </a>
      `)

    })
    .catch(err => {
      // Use a default background image/author
      document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
      )`
      document.getElementById("author").textContent = `By: Dodi Achmad`
  });
}

$('.content__btn').click(e => {
  setBackground()
})

//-------------------------------------------------


// crypto section
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  .then(res => {
    if(!res.ok) {
      throw Error('something went wrong')
    }
    return res.json()
  })
  .then(data => {

    $('.top__crypto').html(`
      <div class='crypto__icon'>
        <img src=${data.image.small} />
        <span>${data.name}</span>
      </div>
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `)

  });

//------------------------------------------------

// time 
function updateTime() {
  let date = new Date();
  $('.content__time').text(date.toLocaleTimeString('en-us', {timeStyle: 'short'}));
}
setInterval(updateTime, 1000)

//-------------------------------------------------

// weather



