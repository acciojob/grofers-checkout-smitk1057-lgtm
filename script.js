 let  getSumBtn = document.getElementById("getSumBtn");

getSumBtn.addEventListener("click", function () {
  let sum = 0;

  const prices = document.querySelectorAll(".prices");

  prices.forEach(price => {
    sum += Number(price.innerText);
  });

  const table = document.getElementById("table");

  const tr = document.createElement("tr");
  tr.id = "ans";

  const td = document.createElement("td");

  td.colSpan = 2;
  td.innerText = "Total Price: Rs " + sum;

  tr.appendChild(td);
  table.appendChild(tr);
});