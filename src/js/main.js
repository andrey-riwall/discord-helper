// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  autoplay: {
    delay: 10000
  },
  breakpoint: {
    0: {
      speed: 300,
    },
    501: {
      speed: 900,
    }
    
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


// accordion
$( function() {
  $( "#accordion" ).accordion();
} );


// popups
document.querySelectorAll(".product__card").forEach(function(tabsBtn) {
  tabsBtn.addEventListener("click", function(event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".more").forEach(function(tabContent) {
      tabContent.classList.remove('is_active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add("is_active")
  });
});



document.querySelectorAll(".close").forEach(function(tabsBtn) {
  tabsBtn.addEventListener("click", function(event) {
    document.querySelectorAll(".more").forEach(function(tabContent) {
      tabContent.classList.remove('is_active')
    });
  });
});