

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