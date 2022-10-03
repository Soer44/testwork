

(() => {
	! function (e, t, i) {
		const s = document.querySelectorAll(e),
			n = document.querySelector(t),
			l = document.querySelector(i),
			o = function () {
				let e = document.createElement("div");
				e.style.width = "50px", e.style.height = "50px", e.style.overflowY = "scroll", e.style.visibility = "hidden", document.body.appendChild(e);
				let t = e.offsetWidth - e.clientWidth;
				return e.remove(), t
			}(),
			r = document.querySelectorAll("[data-modal]");
		s.forEach(e => {
			e.addEventListener("click", e => {
				e.target && e.preventDefault(), r.forEach(e => {
					e.style.display = "none", e.classList.add("animated", "fadeIn")
				}), n.style.display = "block", document.body.style.overflow = "hidden", document.body.style.marginRight = o + "px"
			});
		}), l.addEventListener("click", () => {
			n.style.display = "none", document.body.style.overflow = "", r.forEach(e => {
				e.style.display = "none";
			}), document.body.style.marginRight = "0px"
		}), n.addEventListener("click", e => {
			e.target === n && (n.style.display = "none", document.body.style.overflow = "", r.forEach(e => {
				e.style.display = "none";
			}), document.body.style.marginRight = "0px");
		});
	}(".header__burger", ".popup", ".popup__close");
})();


// Блок мнение специалистов автолисталка

(function(){
	//If you want to include more images, add the link name and URL of the image in the array list below.
		let images_list = [
			{"url":"img/sl1.jpg","name":"image 1","link":""},
			{"url":"img/sl2.jpg","name":"image 2","link":""},
			{"url":"img/sl3.jpg","name":"image 3","link":""},
		];
	
		let slider_id = document.querySelector("#hcg-slider-1");
	
		// append all images
		let dots_div = "";
		let images_div = "";
		for (let i = 0; i < images_list.length; i++) {
			// if no link without href="" tag
			let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
			images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
							'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
						 '</a>';
			dots_div += '<span class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
		}
		slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
		slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;
	
		let slide_index = 0;
	
		let images = slider_id.querySelectorAll(".hcg-slides");
		let dots = slider_id.querySelectorAll(".hcg-slide-dot");
		function showSlides() {
			if (slide_index > images.length-1) {
				slide_index = 0;
			}
			if (slide_index < 0) {
				slide_index = images.length-1;
			}
			for (let i = 0; i < images.length; i++) {
				images[i].style.display = "none";
				dots[i].classList.remove("dot-active");
				if (i == slide_index) {
					images[i].style.display = "block";
					dots[i].classList.add("dot-active");
				}
			}
		}
	
		function dot_click(event) {
			slide_index = event.target.dataset.id;
			showSlides();
		}
	
		for (let i = 0; i < dots.length; i++) {
			dots[i].addEventListener("click", dot_click, false);
		}
		setInterval(function(){
			slide_index++;
			showSlides();
		}, 7000);
	
	})();
	