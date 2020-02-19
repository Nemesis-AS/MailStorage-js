// Variables
var mailList = [];
var pwdList = [];
var table = document.querySelector("#datable");
var newTable;

var displayMailList = [];
var displayPwdList = [];

if (typeof(localStorage.getItem('mailList')) === null) {
	localStorage.setItem('mailList', 'null');
	localStorage.setItem('pwdList', 'null');
}

startPage();

document.querySelector('#addMail').addEventListener('click', validate);
document.querySelector('#clearStorage').addEventListener('click', clearStorage);

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
	document.forms['form1'].reset();
}

function startPage() {
	//Initialize table
	let tempMail = [];
	let tempPwd = [];
	if (localStorage.getItem('mailList') != 'null') {
		tempMail = localStorage.getItem('mailList').split(',');
		tempPwd = localStorage.getItem('pwdList').split(',');
		mailList = localStorage.getItem('mailList').split(',');
		pwdList = localStorage.getItem('pwdList').split(',');
	}
	
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
	let tempMail = [];
	let tempPwd = [];
	mailList = [];
	pwdList = [];

	if (localStorage.getItem('mailList') != 'null') {
		tempMail = localStorage.getItem('mailList').split(',');
		tempPwd = localStorage.getItem('pwdList').split(',');
		mailList = localStorage.getItem('mailList').split(',');
		pwdList = localStorage.getItem('pwdList').split(',');
	}
	
	newTable = "<table id = 'datable' align='center' border='4px solid black'>";
	newTable += "<thead><td>E-mail</td><td>Password</td></thead>";
	for (var i = 0; i <= tempMail.length - 1; i++) {
		newTable += `<tr><td>${tempMail[i]}</td><td>${tempPwd[i]}    <img src='images/eye-open.png'></td></tr>`;
	}
	newTable += "</table>";
	table.innerHTML = newTable;
}

function clearStorage() {
	localStorage.setItem('mailList', 'null');
	localStorage.setItem('pwdList', 'null');
	refreshTable();
	document.forms['form1'].reset();
}