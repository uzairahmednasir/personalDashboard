import "./styles.css";

fetch(
  "https://api.unsplash.com/photos/random/?client_id=UKfhcy7SF1QT794tRwRsGHiJtgCXR0_X5FvTQVscXFE&orientation=landscape&query=nature"
)
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
  });
