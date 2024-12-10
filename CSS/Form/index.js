// https://www.youtube.com/watch?v=XXDOUuzzUOY&t=16
// form with grid layout
const submitButton = document.getElementById('formSubmit')
const form = document.getElementById('formWrapper')

const nameVal = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const country = document.getElementById('country')
const gender = document.getElementsByName('gender')


const output = document.getElementById('outputWrapper')
let obj = {}
const getDetails = (e) => {
	e.preventDefault()
	obj['username'] = nameVal.value
	obj['emailId'] = email.value
	obj['countryName'] = country.value
	for (let i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			obj['gender'] = gender[i].value
		}
	}
	output.innerHTML = JSON.stringify(obj)
	form.reset()
}
form.addEventListener('submit', getDetails)
