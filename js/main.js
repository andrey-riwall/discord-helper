const swiper=new Swiper(".swiper",{direction:"horizontal",autoplay:{delay:1e4},breakpoint:{0:{speed:300},501:{speed:900}},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}});$((function(){$("#accordion").accordion()})),document.querySelectorAll(".product__card").forEach((function(e){e.addEventListener("click",(function(e){const t=e.currentTarget.dataset.path;document.querySelectorAll(".more").forEach((function(e){e.classList.remove("is_active")})),document.querySelector(`[data-target="${t}"]`).classList.add("is_active")}))})),document.querySelectorAll(".close").forEach((function(e){e.addEventListener("click",(function(e){document.querySelectorAll(".more").forEach((function(e){e.classList.remove("is_active")}))}))}));