function setPeriod(type) {
  const priceEl = document.getElementById("price");
  const periodText = document.getElementById("periodText");
  const buttons = document.querySelectorAll(".toggle-btn");

  // Feature elements
  const keywords = document.getElementById("keywords");
  const blogs = document.getElementById("blogs");
  const reporting = document.getElementById("reporting");


  // Remove active class
  buttons.forEach(btn => btn.classList.remove("active"));

  // Add active class to clicked button
  if (type === "monthly") {
    buttons[0].classList.add("active");

    let price = priceEl.getAttribute("data-monthly");
    priceEl.innerHTML = `₹${Number(price).toLocaleString()}<sub>/mo</sub>`;
    periodText.innerText = "Billed monthly · Cancel anytime";

    // ✅ Monthly Features
    keywords.innerHTML = " 10 Target Keywords";
    blogs.innerHTML = " 6 Blog Posts/Month";
    reporting.innerHTML = " Monthly Reporting";

  } else {
    buttons[1].classList.add("active");

    let price = priceEl.getAttribute("data-weekly");
    priceEl.innerHTML = `₹${Number(price).toLocaleString()}<sub>/wk</sub>`;
    periodText.innerText = "Billed weekly · Cancel anytime";
  

// ✅ Weekly Features
    keywords.innerHTML = "✓ 5 Target Keywords";
    blogs.innerHTML = "✓ 3 Blog Posts/Week";
    reporting.innerHTML = "✓ Weekly Reporting";}
}

