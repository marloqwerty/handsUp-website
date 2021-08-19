import solutions from './solutions.js';
import courses from './courses.js';
import testimonials from './testimonials.js';

const solutionsContainer = document.querySelector('.solutions-container');
const coursesContainer = document.querySelector('.courses-container');

displaySolution(solutions);
displayCourses(courses);

function displaySolution(solutions) {
	let displaySolution = solutions.map((item) => {
		return `<article class="solution-item">
					<img alt="h" src=${item.img} >
					<p>${item.text}</p>
        		</article>`;
	});
	displaySolution = displaySolution.join('');

	solutionsContainer.innerHTML = displaySolution;
}

function displayCourses(courses) {
	let displayCourses = courses.map((item) => {
		return `<article class="course-item">
					<img alt="h" src=${item.img} >
					<div class="course-info">
						<h4>${item.title}</h4>
						<div class="rating">
							<div class="Stars" style="--rating: ${item.star};" aria-label="Rating of this product is 2.3 out of 5."></div>
							<p>(${item.user})</p>
						</div>
						<p>Estimate time <br> ${item.month} month : ${item.hour}hrs/week</p>
        		</article>`;
	});

	displayCourses = displayCourses.join('');
	// './assets/see-more.png'

	coursesContainer.innerHTML =
		displayCourses +
		`<article class="see-more">
				<a>SEE MORE</a>
        		</article>`;
}

// =rank(g3, $b$5:lastpkace,0)
// =rank(g3, $g$3:$g$23,0)

// testimonials

// const container = document.querySelector('.testimonials-container');
// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');

// if (testimonials.length === 1) {
// 	nextBtn.style.display = 'none';
// 	prevBtn.style.display = 'none';
// }
// let pokemon = [...testimonials];
// if (testimonials.length === 2) {
// 	pokemon = [...testimonials, ...testimonials];
// }

// container.innerHTML = pokemon
// 	.map((one_pokemon, slideIndex) => {
// 		const { id,img, name, job_title, message } = one_pokemon;
// 		let position = 'next';
// 		if (slideIndex === 0) {
// 			position = 'active';
// 		}
// 		if (slideIndex === pokemon.length - 1) {
// 			position = 'last';
// 		}
// 		if (testimonials.length <= 1) {
// 			position = 'active';
// 		}

// 		const n = `<article class="slide ${position}">
// 					<div class="testimonial-item">
// 						<img alt="person" src="${img}">
// 						<div class="testimonial-info">
// 						<blockquote>"${message}" </br></br> <cite>${name}, ${job_title}</cite></blockquote>

// 						</div>
// 					</div>
//  				</article>`;
// 		return n;
// 	})
// 	.join('');

// const startSlider = (type) => {
// 	const active = document.querySelector('.active');
// 	const last = document.querySelector('.last');
// 	let next = active.nextElementSibling;
// 	if (!next) {
// 		next = container.firstElementChild;
// 	}
// 	active.classList.remove('active');
// 	last.classList.remove('last');
// 	next.classList.remove('next');

// 	if (type === 'prev') {
// 		active.classList.add('next');
// 		last.classList.add('active');
// 		next = last.previousElementSibling;
// 		if (!next) {
// 			next = container.lastElementChild;
// 		}
// 		next.classList.remove('next');
// 		next.classList.add('last');
// 		return;
// 	}
// 	active.classList.add('last');
// 	last.classList.add('next');
// 	next.classList.add('active');
// };
// nextBtn.addEventListener('click', () => {
// 	startSlider();
// });
// prevBtn.addEventListener('click', () => {
// 	startSlider('prev');
// });

// toggle menu

const container = document.querySelector('.testimonials-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let n = 0;
let v = 0;

let startSlider = (position) => {
	// n + type;
	console.log(position);

	container.innerHTML = `<article class="slide">
				
						<img alt="person" src="${testimonials[position].img}">
						<div class="testimonial-info">
							<blockquote>"${testimonials[position].message}" </br></br> <cite>${testimonials[position].name}, ${testimonials[position].job_title}</cite></blockquote>
					
						</div>

 				</article>`;
};

// const startSlider = (type) => {
// 	const active = document.querySelector('.active');
// 	const last = document.querySelector('.last');
// 	let next = active.nextElementSibling;
// 	if (!next) {
// 		next = container.firstElementChild;
// 	}
// 	active.classList.remove('active');
// 	last.classList.remove('last');
// 	next.classList.remove('next');

// 	if (type === 'prev') {
// 		active.classList.add('next');
// 		last.classList.add('active');
// 		next = last.previousElementSibling;
// 		if (!next) {
// 			next = container.lastElementChild;
// 		}
// 		next.classList.remove('next');
// 		next.classList.add('last');
// 		return;
// 	}
// 	active.classList.add('last');
// 	last.classList.add('next');
// 	next.classList.add('active');
// };
nextBtn.addEventListener('click', () => {
	if (n == 2) {
		startSlider((n = 0));
	} else {
		startSlider((n += 1));
	}
});
prevBtn.addEventListener('click', () => {
	if (n == 0) {
		startSlider((n = 2));
	} else {
		startSlider((n += -1));
	}
});
startSlider(0);

const Hey = document.querySelectorAll('.contentBx');
const h3 = document.querySelectorAll('h3');
for (let i = 0; i < h3.length; i++) {
	h3[i].addEventListener('click', function () {
		Hey[i].classList.toggle('active');
	});
}
