// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  if (page === "analyse") {
    setupUpload();
    renderCharts();
  }

  if (page === "about") {
    animateAboutPage();
  }

  if (!page || page === "home") {
    animateHomePage();
  }
});

// 🌟 Home Page: Animate "How it Works" and Testimonials
function animateHomePage() {
  const headings = document.querySelectorAll(".animate-heading");
  headings.forEach((el, i) => {
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200 + i * 300);
  });
}

// 📄 About Page: Animate Paragraph Fade-in
function animateAboutPage() {
  const para = document.querySelector(".nutribyte-is");
  if (para) {
    para.style.opacity = "1";
    para.style.transform = "translateY(0)";
  }
}

// 📷 Analyse Page: Upload Handler
function setupUpload() {
  const uploadBtn = document.getElementById("upload-btn");
  const fileInput = document.getElementById("file-upload");
  const uploadedText = document.getElementById("uploaded-file");

  if (uploadBtn && fileInput && uploadedText) {
    uploadBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      uploadedText.textContent = file
        ? `Selected: ${file.name}`
        : "No file selected";
    });
  }
}

// 📊 Analyse Page: Render Nutrition Graphs
function renderCharts() {
  const posCanvas = document.getElementById("positiveChart");
  const negCanvas = document.getElementById("negativeChart");

  if (!posCanvas || !negCanvas) return;

  // Positive nutrients chart
  new Chart(posCanvas.getContext("2d"), {
    type: "bar",
    data: {
      labels: ["Protein", "Fiber", "Vitamin C", "Iron"],
      datasets: [
        {
          label: "Positive",
          data: [8, 6, 5, 7],
          backgroundColor: ["#2ecc71", "#27ae60", "#1abc9c", "#16a085"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });

  // Negative nutrients chart
  new Chart(negCanvas.getContext("2d"), {
    type: "bar",
    data: {
      labels: ["Sugar", "Trans Fats", "Sodium", "Cholesterol"],
      datasets: [
        {
          label: "Negative",
          data: [9, 5, 7, 6],
          backgroundColor: ["#e74c3c", "#c0392b", "#d63031", "#ff7675"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });
}
