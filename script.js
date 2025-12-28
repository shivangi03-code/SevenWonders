/* HERO FUN FACTS */
function updateFunFact(wonder) {
    const funFacts = {
        "Taj Mahal": "The Taj Mahal changes color depending on the time of day!",
        "Machu Picchu": "Machu Picchu remained unknown to the outside world until 1911!",
        "Petra": "Petra was lost to the Western world for nearly 500 years!",
        "Great Wall of China": "Contrary to myth, the Great Wall is not visible from the moon!",
        "Colosseum": "The Colosseum could hold up to 50,000 spectators!",
        "Christ the Redeemer": "The statue is frequently struck by lightning!",
        "Chichén Itzá": "During equinoxes, a shadow forms a snake on the pyramid!"
    };

    document.getElementById("funFact").innerText =
        "Fun Fact: " + funFacts[wonder];
}


/* WONDER DATA */
const wonderData = {
  "Great Wall of China": {
    modalImg: "./GreatWallofChina.jpg",
    wiki: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
    details: `
      <p><strong>Location:</strong> Northern China</p>
      <p><strong>Construction Period:</strong> 7th century BC – 17th century AD</p>
      <p><strong>Built By:</strong> Multiple Chinese dynasties</p>
      <p><strong>Length:</strong> Over 21,000 kilometers</p>
      <p>
        The Great Wall of China was constructed using stone, brick, wood,
        and tamped earth to protect against invasions and regulate trade and borders.
      </p>
      <ul>
        <li>Purpose: Protection from invasions, border control, trade regulation</li>
        <li>Materials: Stone, brick, wood, tamped earth</li>
        <li>Significance: Symbol of Chinese strength and military engineering</li>
      </ul>
    `
  },


  "Christ the Redeemer": {
    modalImg: "./ChristtheRedeemer.jpg",
    wiki: "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
    details: `
      <p><strong>Location:</strong> Rio de Janeiro, Brazil</p>
      <p><strong>Completed:</strong> 1931</p>
      <p><strong>Height:</strong> 30 meters (excluding pedestal)</p>
      <p>
        Christ the Redeemer is an Art Deco statue made of reinforced concrete
        and soapstone, symbolizing Christianity and peace.
      </p>
      <ul>
        <li>Architectural style: Art Deco</li>
        <li>Materials: Reinforced concrete and soapstone</li>
        <li>Purpose: Symbol of Christianity and peace</li>
        <li>Significance: Cultural and national icon of Brazil</li>
      </ul>
    `
  },
"Chichén Itzá": {
    modalImg: "./ChichénItzá.jpg",
    wiki: "https://en.wikipedia.org/wiki/Chichen_Itza", 
    details: `
      <p><strong>Location:</strong> Yucatán Peninsula, Mexico</p>
      <p><strong>Built By:</strong> Mayan civilization</p>
      <p><strong>Period:</strong> 600–1200 AD</p>
      <p>
        Chichén Itzá served as a religious, political, and astronomical center
        demonstrating Mayan mastery of astronomy and mathematics.
      </p>
      <ul>
        <li>Famous structure: Pyramid of Kukulkan (El Castillo)</li>
        <li>Pyramid steps: 365 representing days of the year</li>
        <li>Significance: Advanced Mayan astronomy and mathematics</li>
      </ul>
    `
  },
  
  "Petra": {
    modalImg: "./Petra.jpg",
    wiki: "https://en.wikipedia.org/wiki/Petra#:~:text=The%20area%20around%20Petra%20has,in%20the%20second%20century%20BC.", 
    details: `
      <p><strong>Location:</strong> Southern Jordan</p>
      <p><strong>Built By:</strong> Nabataean civilization</p>
      <p><strong>Period:</strong> Around 300 BC</p>
      <p>
        Petra is carved directly into red sandstone cliffs and is famous
        for its rock-cut architecture and advanced water management system.
      </p>
      <ul>
        <li>Famous structure: Al-Khazneh (The Treasury)</li>
        <li>Purpose: Major trading center</li>
        <li>Significance: Unique rock-cut architecture</li>
        <li>UNESCO World Heritage Site</li>
      </ul>
    `
  },

"Machu Picchu": {
    modalImg: "./MachuPicchu.jpg",
    wiki: "https://en.wikipedia.org/wiki/Machu_Picchu", 
    details: `
      <p><strong>Location:</strong> Andes Mountains, Peru</p>
      <p><strong>Built By:</strong> Inca civilization</p>
      <p><strong>Period:</strong> 15th century</p>
      <p><strong>Altitude:</strong> Approximately 2,430 meters</p>
      <p>
        Machu Picchu was constructed using a dry-stone technique without mortar,
        showcasing advanced Inca engineering.
      </p>
      <ul>
        <li>Features: Temples, terraces, residential structures</li>
        <li>Purpose: Royal estate or religious center</li>
        <li>Significance: Advanced Inca engineering</li>
        <li>UNESCO World Heritage Site</li>
      </ul>
    `
  },
  

  "Colosseum": {
    modalImg: "./Colosseum.jpg",
    wiki: "https://en.wikipedia.org/wiki/Colosseum", 
    details: `
      <p><strong>Location:</strong> Rome, Italy</p>
      <p><strong>Built:</strong> 70–80 AD</p>
      <p><strong>Built Under:</strong> Emperor Vespasian</p>
      <p>
        The Colosseum was built using stone and concrete and served
        as a major center for public entertainment.
      </p>
      <ul>
        <li>Seating capacity: Over 50,000 spectators</li>
        <li>Used for: Gladiator fights and public events</li>
        <li>Significance: Icon of Roman architecture and social life</li>
      </ul>
    `
  },

  "Taj Mahal": {
    modalImg: "./TajMahal.jpg",
    wiki: "https://en.wikipedia.org/wiki/Taj_Mahal", 
    details: `
      <p><strong>Location:</strong> Agra, India</p>
      <p><strong>Built By:</strong> Mughal Emperor Shah Jahan</p>
      <p><strong>Construction Period:</strong> 1632–1653</p>
      <p>
        The Taj Mahal is a white marble mausoleum built in memory
        of Mumtaz Mahal, featuring intricate inlay work.
      </p>
      <ul>
        <li>Materials: White marble, semi-precious stones</li>
        <li>Architectural styles: Persian, Islamic, Indian</li>
        <li>Purpose: Mausoleum for Mumtaz Mahal</li>
        <li>Significance: Symbol of eternal love</li>
        <li>UNESCO World Heritage Site</li>
      </ul>
    `
  }
};



/* MODAL VARIABLES */
const modal = document.getElementById ("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close");

const wonderTitles = Object.keys(wonderData);
let currentIndex = 0;


/* RENDER MODAL CONTENT */
function renderModalContent(title) {
    const data = wonderData[title];

    modalContent.innerHTML = `
        <div class="modal-flex">
            <div class="modal-right">
                <img src="${data.modalImg}" alt="${title}">
            </div>

            <div class="modal-left">
                <h2>${title}</h2>
                ${data.details}

                <a href="${data.wiki}" 
                   target="_blank" 
                   class="read-more-btn">
                   Read More...
                </a>
            </div>
        </div>

        <div class="modal-nav-buttons">
            <button class="nav-btn prev-btn">← Previous</button>
            <button class="nav-btn next-btn">Next →</button>
        </div>
    `;

    styleNavButtons();

    document.querySelector(".prev-btn").onclick =
        () => openModalByIndex(currentIndex - 1);

    document.querySelector(".next-btn").onclick =
        () => openModalByIndex(currentIndex + 1);
}


/* OPEN MODAL BY INDEX */
function openModalByIndex(index) {
    if (index < 0) index = wonderTitles.length - 1;
    if (index >= wonderTitles.length) index = 0;

    currentIndex = index;
    renderModalContent(wonderTitles[index]);
    modal.classList.add("open");
}


/* NAV BUTTON STYLING */
function styleNavButtons() {
    const prev = document.querySelector(".prev-btn");
    const next = document.querySelector(".next-btn");

    [prev, next].forEach(btn => {
        btn.style.padding = "10px 20px";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.style.color = "#fff";
        btn.style.fontSize = "16px";
        btn.style.cursor = "pointer";
        btn.style.transition = "0.3s";
    });

    prev.style.background = "#295274ff";
    next.style.background = "#295274ff";

    prev.onmouseover = () => prev.style.background = "#295274ff";
    prev.onmouseout  = () => prev.style.background = "#295274ff";

    next.onmouseover = () => next.style.background = "#295274ff";
    next.onmouseout  = () => next.style.background = "#295274ff";
}


/* CARD CLICK EVENTS */
document.querySelectorAll(".zig-card").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.getAttribute("data-title"); // use data-title
        openModalByIndex(wonderTitles.indexOf(title));
    });
});

/* CLOSE MODAL EVENTS */
closeBtn.onclick = () => modal.classList.remove("open");

modal.onclick = e => {
    if (e.target === modal) modal.classList.remove("open");
};

document.addEventListener("keydown", e => {
    if (!modal.classList.contains("open")) return;

    if (e.key === "Escape") modal.classList.remove("open");
    if (e.key === "ArrowRight") openModalByIndex(currentIndex + 1);
    if (e.key === "ArrowLeft") openModalByIndex(currentIndex - 1);
});
