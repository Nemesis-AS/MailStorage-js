// Variables
var mailList = [];
var pwdList = [];
var table = document.querySelector("#datable");
var newTable;

startPage();

document.querySelector('#addMail').addEventListener('click', validate);
function validate() {
	for (char of document.forms['form1']['name'].value) {
		if (char === '@') {
			pushData();
		}
	}
}

function pushData() {
	mailList.push(document.forms['form1']['mail'].value);
	pwdList.push(document.forms['form1']['pwd'].value);
	localStorage.setItem('mailList', mailList);
	localStorage.setItem('pwdList', pwdList);
	refreshTable();
}

function startPage() {
	newTable = "<table id = 'datable' align='center' border='4px solid black'>";
	newTable += "<thead><td>E-mail</td><td>Password</td></thead>";
	for (var i = 0; i <= mailList.length - 1; i++) {
		newTable += "<tr><td>Something</td><td>Pwd</td></tr>";
	}
	newTable += "</table>";
	//console.log(newTable);
	table.innerHTML = newTable;
}
function refreshTable() {
	newTable = "<table id = 'datable' align='center' border='4px solid black'>";
	newTable += "<thead><td>E-mail</td><td>Password</td></thead>";
	for (var i = 0; i <= mailList.length - 1; i++) {
		newTable += `<tr><td>${mailList[i]}</td><td>${pwdList[i]}</td></tr>`;
	}
	newTable += "</table>";
	//console.log(newTable);
	table.innerHTML = newTable;
}