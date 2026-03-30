const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 // Select all the price cells
  const priceCells = document.querySelectorAll('.price');
  
  let total = 0;
  for (let i = 0; i < priceCells.length; i++) {
    const price = parseFloat(priceCells[i].textContent);
    if (!isNaN(price)) {
      total += price;
    }
  }

  // Select the table
  const table = document.querySelector('table');

  // Remove previous total row if exists (to avoid duplicates)
  const existingTotalRow = document.querySelector('.total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for total price
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  // Create one cell that spans both columns
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = 'bold';
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append cell and row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

