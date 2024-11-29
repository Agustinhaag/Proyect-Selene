export const validateForm = (input)=>{
const errors ={}
if(!input.question){
    errors.question = 'Debe ingresar una pregunta'
}
if(!input.option1){
    errors.option1 = "Debe ingresar al menos una opción"
}

return errors

}