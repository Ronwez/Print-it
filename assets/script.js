const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton!")
	arrowLeft.addEventListener("click", showPreviousSlide);
});

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton2!")
	arrowRight.addEventListener("click", showNextSlide);
});

let currentSlideIndex = 0;
const tagLine = document.querySelector("#banner p");
function showSlide(index) {
	const slide = slides[index];
	const imagePath = "./assets/images/slideshow/" + slide.image;
  
	// Mettre à jour l'image du slide
	document.querySelector(".banner-img").src = imagePath;
  
	// Mettre à jour la légende du slide
	tagLine.innerHTML = slide.tagLine;
  
	// Mettre à jour les indicateurs de pagination (dots)
	const dotsContainer = document.querySelector(".dots");
	dotsContainer.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement('span');
	  dot.classList.add('dot');
	  if (i === index) {
		dot.classList.add('dot_selected'); // Ajouter une classe pour indiquer le dot actif
	  }
	  dot.addEventListener('click', () => showSlide(i)); // Changer de slide lors du clic sur un dot
	  dotsContainer.appendChild(dot);
	}
  }

function showNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

function showPreviousSlide() {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
	  currentSlideIndex = slides.length - 1;
	}
	showSlide(currentSlideIndex);
  }
  
  
  

