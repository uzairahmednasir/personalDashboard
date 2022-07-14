import "./styles.scss";
 
const setBackground = () => {
  fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")      
    .then(response => response.json())
    .then(data => {

      $('body').css('backgroundImage', `url(${data.urls.full})`)
      $('.author').html(`
      by <a class='author-link' href=${data.user.links.html} target='_blank'>${data.user.username}</a>
      `)

    });
}

window.onload = setBackground();


$('.imgBtn').click(e => setBackground())

//------------------------------------------------






