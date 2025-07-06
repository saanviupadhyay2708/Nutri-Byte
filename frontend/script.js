// script.js

document.addEventListener("DOMContentLoaded", () => {
  setupUploadButton();
  renderCharts();
});

// 📷 Upload logic
function setupUploadButton() {
  const uploadBtn = document.getElementById("upload-btn");
  const fileInput = document.getElementById("file-upload");
  const uploadedFile = document.getElementById("uploaded-file");

  if (uploadBtn && fileInput && uploadedFile) {
    uploadBtn.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", () => {
      const fileName = fileInput.files[0]?.name || "No file selected";
      uploadedFile.textContent = `Selected: ${fileName}`;
    });
  }
}

// 📊 Render Bar Charts
// 📊 Render Slim Horizontal Bar Charts
function renderCharts() {
  if (!window.Chart) return;

  const positiveCtx = document.getElementById("positiveChart")?.getContext("2d");
  const negativeCtx = document.getElementById("negativeChart")?.getContext("2d");

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: "#444" },
        ticks: { color: "#ccc" }
      },
      y: {
        grid: { color: "#333" },
        ticks: { color: "#ccc" }
      }
    },
    barThickness: 10,
  };

  if (positiveCtx) {
    new Chart(positiveCtx, {
      type: 'bar',
      data: {
        labels: ['Protein', 'Fiber', 'Vitamin C'],
        datasets: [{
          label: 'Positive Nutrients',
          data: [8, 6, 7],
          backgroundColor: ['#28a745', '#34c38f', '#20c997']
        }]
      },
      options: chartOptions
    });
  }

  if (negativeCtx) {
    new Chart(negativeCtx, {
      type: 'bar',
      data: {
        labels: ['Sugar', 'Trans Fats', 'Sodium'],
        datasets: [{
          label: 'Negative Nutrients',
          data: [9, 7, 6],
          backgroundColor: ['#dc3545', '#e74c3c', '#c82333']
        }]
      },
      options: chartOptions
    });
  }
}
