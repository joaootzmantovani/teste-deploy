const testimonials = [
  {
    text: "Eu nunca vi alguém acompanhar tanto o Juca. É um nível de dedicação impressionante.",
    author: "— João, fã desde 2004"
  },
  {
    text: "Quando o assunto é Juca, ele sabe absolutamente TUDO.",
    author: "— Marcelo, testemunha ocular"
  },
  {
    text: "Eu diria que ele é fã do Juca. Mas isso seria diminuir o tamanho do problema.",
    author: "— Ricardo, especialista"
  },
  {
    text: "O Juca tem muitos fãs. Mas esse aí claramente levou a brincadeira longe demais.",
    author: "— Carlos, visitante nº 00042"
  }
];

let currentTestimonial = 0;

function openPopup(id) {
  document.getElementById(id).classList.add("open");
}

function closePopup(id) {
  document.getElementById(id).classList.remove("open");
}

function showTestimonial(index) {
  currentTestimonial = (index + testimonials.length) % testimonials.length;

  document.getElementById("testimonialText").textContent =
    testimonials[currentTestimonial].text;

  document.getElementById("testimonialAuthor").textContent =
    testimonials[currentTestimonial].author;

  renderDots();
}

function nextTestimonial() {
  showTestimonial(currentTestimonial + 1);
}

function previousTestimonial() {
  showTestimonial(currentTestimonial - 1);
}

function renderDots() {
  const container = document.getElementById("testimonialDots");

  container.innerHTML = testimonials
    .map((_, index) =>
      `<span class="dot ${index === currentTestimonial ? "active" : ""}"></span>`
    )
    .join("");
}

function submitGuestbook() {
  const message = document.getElementById("guestbookMessage");

  message.textContent =
    "🚨 DEPOIMENTO REGISTRADO!!! A comissão oficial do Juca agradece sua participação.";
  message.classList.remove("hidden");
}

// Fecha o popup clicando fora da janela
document.querySelectorAll(".popup-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("open");
    }
  });
});

// Troca automática de depoimento
setInterval(() => {
  nextTestimonial();
}, 5000);

renderDots();
