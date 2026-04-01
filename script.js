const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let table = document.querySelector("table")
let price = document.querySelectorAll(".prices")

	let totalPriceSum = 0;

	for(let p of price){
		totalPriceSum += +p.innerText;
	}



	let tr = document.createElement("tr");
	tr.id="ans";
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	
    td1.innerText = "total price";
	td2.innerText = totalPriceSum;
	tr.append(td1,td2);

	table.append(tr)




};
getSumBtn.addEventListener('click',getSum)