// smooth scroll function------------------------------------

function smoothScroll(id) {
  console.log(id);
  const section = document.getElementById(id);
  const offset = 80;
  const sectionTop = section.offsetTop - offset;
  window.scrollTo({ top: sectionTop, behavior: "smooth" });
}

// Countdown method-----------------------------------------
const Countdown = (id) => {
  const btnadd = document.getElementById(id);
  let count = 3;

  btnadd.disabled = true;

  const CountInterval = setInterval(() => {
    if (count > 0) {
      btnadd.innerText = count;
      count--;
    } else {
      clearInterval(CountInterval);
      btnadd.innerText = "Adopted";
      btnadd.disabled = false;
    }
  }, 1000);
};

function clearBox() {
  const clearBox = document.getElementById("product-info");

  clearBox.innerHTML = "";
}

function hideSection() {
  const hideSection = document.getElementById("temp-section");

  hideSection.style.display = "none";
}

// Modal Section-------------------------------
function loadModal(id) {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => seeModal(data.petData));
}
function seeModal(pet) {
  const showModal = document.getElementById("modal-Show").showModal();

  const Showmd = document.getElementById("cardModal");

  Showmd.innerHTML = `
           
        <div class="card">
        <figure>
          <img class="w-full object-cover" src="${pet.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${pet.pet_name}</h2>
          <div class="flex justify-around">
            <div>
              <p><span> Breed : </span> ${pet.breed}</p>
              <p><span> Gender : </span> ${pet.gender}</p>
              <p><span> Vaccination Status: </span> ${pet.vaccinated_status}</p>
            </div>

            <div>
              <p><span> Date of Birth : </span> ${pet.date_of_birth}</p>
              <p><span> Price : </span> ${pet.price}</p>
            </div>
          </div>
          <hr />
          <div>
            <h2>Details</h2>
            <p>${pet.pet_details}</p>
          </div>
        </div>
      </div>
`;
}

// Load All data---------------------------------------

const categoryButton = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => showCategoryButton(data.categories));
};

const loadInfo = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const hideCalss = document.getElementById("product-info");
      hideCalss.classList.remove("hidden");
      showProductData(data.data);
    });
};

// Show All data section----------------------
const showCategoryButton = (category) => {
  category.forEach((product) => {
    const categoryBtn = document.getElementById("category-btn");
    const div = document.createElement("div");

    div.innerHTML = `
    
    <button onclick="loadInfo('${product.category}')" class = "btn btn-xl rounded-md"> ${product.category} <img class="w-8" src=${product.category_icon} /> </button>
    
    `;
    categoryBtn.append(div);
  });
};

const showProductData = (infos) => {
  hideSection();
  clearBox();

  if (infos.length === 0) {
    document.getElementById("product-info").innerHTML = `
    
    
        <div
          id="temp-section"
          class="w-full md:w-10/12 flex flex-col justify-center items-center py-20 bg-base-200 rounded-md col-span-4"
        >
          <div class="w-[150px] text-center">
            <img class="w-full" src="images/error.webp" alt="" />
          </div>
          <div class="w-full md:w-[650px] text-center">
            <h2 class="text-2xl md:text-[40px] font-bold">
              No Information Available
            </h2>
            <p class="text-sm md:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a.
            </p>
          </div>
        </div>
    
    
    `;
  }

  infos.forEach((info) => {
    const productInfo = document.getElementById("product-info");

    const div = document.createElement("div");

    div.innerHTML = `
    
           <div class="card">
            <figure>
              <img class="w-full object-cover" src="${info.image}" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                ${info.pet_name}
              </h2>
                 <p><span> Breed : </span> ${info.breed}
                 <p><span> Date of Birth : </span> ${info.date_of_birth}
                 <p><span> Gender : </span> ${info.gender}
                 <p><span> Price : </span> ${info.price}
              <hr>
                 <div class="card-actions justify-around items-center">
                 <div>  <div class="badge badge-outline"><i class="fa-solid fa-thumbs-up"></i></div> </div>
                <a onclick="Countdown(${info.petId})" id="${info.petId}"  class="btn btn-xs text-[#0E7A81]">Adopt</a>
                <a id="${info.petId}" onclick="loadModal(${info.petId})" class="btn btn-xs text-[#0E7A81]">Details</a>
              </div>
            </div>
          </div>

    `;

    productInfo.append(div);
  });
};

categoryButton();
