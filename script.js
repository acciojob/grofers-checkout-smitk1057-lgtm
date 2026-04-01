 let  getSumBtn = document.getElementById("#getSumBtn");

getSumBtn.addEventListener("click", function () {
  let sum = 0;

  let  prices = document.querySelectorAll(".prices");

  prices.forEach(price => {
    sum += Number(price.innerText);
  });

  let table = document.getElementById("table");

  let tr = document.createElement("tr");
	let td1=document.createElement('td')
	let td2=document.createElement('td')
	
  tr.id = "ans";
td1.innerText='Total Price'
	td2.innerText=sum
  

  // td.colSpan = 2;
  // td.innerText = "Total Price: Rs " + sum;

  tr.append(td1,td2);
  table.appendChild(tr);
});