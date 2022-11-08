

// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
// (ელემენტის წაშლისთვის ვიყენებთ remove() მეთოდს იმ ელემენტზე რომლის წაშლაც გვინდა)

const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", (e) => {
	deleteBtn.remove();
});
// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/1/200/300  სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
// const myImg = document.createElement("img");
// myImg.setAttribute("src", "https://picsum.photos/id/1/200/300");
// myImg.alt = "image";

// const body = document.querySelector("body");

// body.append(myImg);

// 3. html-ში შექმენით <div id="characters-list"></div>

// 4.
//     4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
//     4.2. characters   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი მსგავსი (სტილები დაადეთ css ის საშუალებით, კლასები ჯავასკრიპტიდან).
//     4.3 ეს html სტრინგი ჩასვით ამ დივში: <div id="characters-list"></div>.
//     4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი, თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.
const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];
const charList = document.querySelector("#characters-list");

// console.log(charList);

/* <div class="char-card">
    <div class="char-info">
      <h4 class="char-name">
        
      </h4>
      <h5 class="house">
        house: 
      </h5>
      <h6 class="actor-name"></h6>
      <div class="btns">
        <button class="show-info">show info</button>
        <button class="delete-card">delete card</button>
      </div>
    </div>
    <img src="..." alt="" />
  </div> */

function renderCards() {
	const htmlString = characters
		.map((char) => {
			return `
				<div class="char-card">
					<div class="char-info">
						<h4 class="char-name">
							${char.first_name}  ${char.last_name}
						</h4>
						<h5 class="house">
							house: ${char.house}
						</h5>
						<h6 class="actor-name">${char.actor}</h6>
						<div class="btns">
							<button class="show-info">show info</button>
							<button class="delete-card">delete card</button>
						</div>
					</div>
					<img src="${char.image}" alt="${char.actor}" />
				</div>
		`;
		})
		.join("");

	// console.log(htmlString);

	charList.innerHTML = htmlString;

	const deleteBtns = document.querySelectorAll(".delete-card");
	const infoBtns = document.querySelectorAll(".show-info");

	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(btn, btn.closest(".char-card"));
			// btn.parentElement.parentElement.parentElement.remove()
			btn.closest(".char-card").remove();
		});
	});

	infoBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			// console.log(btn);

			btn.parentElement.parentElement
				.querySelector(".actor-name")
				.classList.toggle("active");
		});
	});
}

renderCards();

// console.log('')

// 5.  (optional) #4 დავალებაში შექმნილ character card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  character card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ მსახიობის ინფო (actor)

// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების შემდეგ
