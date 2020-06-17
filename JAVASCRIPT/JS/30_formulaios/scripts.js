const form = document.getElementById('form')
const button = document.getElementById('submitButton')


//elemento del formulario
const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

//validar que los campos estan rellenos y que el formulario se puede enviar

const formIsValid = {
    name:false,
    email: false,
    gender: false,
    terms: false
}


const validateForm = () => {
    const formValues = Object.values(formIsValid) //convierte en array el objeto
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit() //si no encuentra ningun false (el forumulario es valido)
    else alert('Form invalid')
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    validateForm()

})

name.addEventListener('change', (e)=>{ //registra cualquier evento siempre y cuando el campo haya cambiado
    //trim quita los espacios en blanco
    if(e.target.value.trim().length >0) formIsValid.name = true
    else formIsValid.name = false
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
    else formIsValid.email = false
})

gender.addEventListener('change', (e) => {
    if(e.target.checked == true) formIsValid.gender = true //si esta chekeado cualquiera de las 2 opciones
    else formIsValid.gender = false
})

terms.addEventListener('change', (e) => {
    formIsValid.terms = e.target.checked
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
})