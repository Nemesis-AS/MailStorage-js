var dataBase = {
	nemesis : 12345,
	mehdkaif10 : 98765,
	krish : 66758
};

const nameBox = document.querySelector('#uName');
const pwdBox = document.querySelector('#pwd');
const submitBtn = document.querySelector('#submit').addEventListener('click', signed);

document.querySelector('#clear').addEventListener('click', () => document.forms['loginForm'].reset());

function  signed() {
	let found = false;
	for(var id in dataBase) {
		if (nameBox.value === id) {
			// If Username Matches
			found = true;
			//console.log(dataBase[id]);
			if (Number(pwdBox.value) === dataBase[id]) {
				//alert('Access Granted!');
				document.location.assign('storage.html');
			} else {
				alert('Incorrect Password!');
			}
		}
	}
	if(!found) {
		alert('Your Account does not exists.\nPease Register first!')
	}
}