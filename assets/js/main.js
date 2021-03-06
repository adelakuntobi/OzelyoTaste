
window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
      // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '#resp-dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    // {
    //   // screens greater than >= 775px
    //   breakpoint: 775,
    //   settings: {
    //     // Set to `auto` and provide item width to adjust to viewport
    //     slidesToShow: 'auto',
    //     slidesToScroll: 'auto',
    //     itemWidth: 150,
    //     duration: 0.25
    //   }
    {
    // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
  })
})

function openNav() {
  document.getElementById("mySidenav").style.transition = "all .5s ease-in-out"
  if(document.getElementById("mySidenav").style.display === "block"){
    document.getElementById("mySidenav").style.display = "none";
  }
  else{
    document.getElementById("mySidenav").style.display = "block";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

