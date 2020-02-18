// Variables
var mailList = [];
var pwdList = [];
var table = document.querySelector("#datable");
var newTable;

var displayMailList = [];
var displayPwdList = [];

//localStorage.setItem('mailList', 'nemesis@gmail.com', 'someone@something.com');
//localStorage.setItem('pwdList', '12345', '99856');
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
	//Initialize table
	let tempMail = localStorage.getItem('mailList').split(',');
	let tempPwd = localStorage.getItem('pwdList').split(',');
	mailList = localStorage.getItem('mailList').split(',');
	pwdList = localStorage.getItem('pwdList').split(',');

	newTable = "<table id = 'datable' align='center' border='4px solid black'>";
	newTable += "<thead><td>E-mail</td><td>Password</td></thead>";
	for (var i = 0; i <= tempMail.length - 1; i++) {
		newTable += `<tr><td>${tempMail[i]}</td><td>${tempPwd[i]}</td></tr>`;
	}
	newTable += "</table>";
	//console.log(newTable);
	table.innerHTML = newTable;
}
function refreshTable() {
	let tempMail = localStorage.getItem('mailList').split(',');
	let tempPwd = localStorage.getItem('pwdList').split(',');

	newTable = "<table id = 'datable' align='center' border='4px solid black'>";
	newTable += "<thead><td>E-mail</td><td>Password</td></thead>";
	for (var i = 0; i <= tempMail.length - 1; i++) {
		newTable += `<tr><td>${tempMail[i]}</td><td>${tempPwd[i]}</td></tr>`;
	}
	newTable += "</table>";
	table.innerHTML = newTable;
}
