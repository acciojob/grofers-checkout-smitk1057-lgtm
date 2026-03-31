 let  priceElements = document.querySelectorAll(".prices");

  let total = 0;

  //  Loop and calculate sum
  priceElements.forEach(price => {
    total += Number(price.textContent);
  });

  //  Create new row
  let  totalRow = document.createElement("tr");

  let  totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: " + total;

  //  Append cell to row
  totalRow.appendChild(totalCell);

  //  Append row to table
  document.getElementById("groceryTable").appendChild(totalRow);
