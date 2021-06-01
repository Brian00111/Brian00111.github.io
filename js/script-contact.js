// let contactName=document.getElementById('name')
// let contactLastName=document.getElementById('surname')
// let contactEmail=document.getElementById('email')
// let contactNumber=document.getElementById('number')

const form=document.getElementById('formulario')
const inputs=document.querySelectorAll('.form_input')

const exp={
    na:/^[A-Z][a-z]+$/,
    numero:/^0(2|4)+((12)|(24)|(26))\d{7}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};
const verificar=()=>{
    exp.addEventListener('')
}

const validar=(e)=>{
    switch(e.target.name){
        case "name":
            if(exp.na.test(e.target.value)){
                document.getElementById('name').classList.add('formulario-estado-check')
                document.getElementById('cheak').classList.add('formulario-validacion-check')


            }else if(!exp.na.test(e.target.value)){
                document.getElementById('name').classList.remove('formulario-estado-check')
                document.getElementById('name').classList.add('formulario-estado-error')
                
                 
                 document.getElementById('cheak').classList.remove('fa-check-circle')
                 document.getElementById('cheak').classList.add('fa-times-circle')  
                    
                document.getElementById('cheak').classList.remove('formulario-validacion-check')
                document.getElementById('cheak').classList.add('formulario-validacion-error')
    
            }
        break;
        case "surname":
            if(exp.na.test(e.target.value)){
                document.getElementById('surname').classList.add('formulario-estado-check')
                document.getElementById('cheak-2').classList.add('formulario-validacion-check')
            }else{

                document.getElementById('surname').classList.remove('formulario-estado-check')
                document.getElementById('surname').classList.add('formulario-estado-error')
   
                document.getElementById('cheak-2').classList.remove('formulario-validacion-check')
                document.getElementById('cheak-2').classList.add('formulario-validacion-error')
                 document.getElementById('cheak-2').classList.remove('fa-check-circle')
                 document.getElementById('cheak-2').classList.add('fa-times-circle')              
            }
        break;
        case "email":
            if(exp.correo.test(e.target.value)){
                document.getElementById('email').classList.add('formulario-estado-check')
                document.getElementById('cheak-3').classList.add('formulario-validacion-check')
            }else{

                document.getElementById('email').classList.remove('formulario-estado-check')
                document.getElementById('email').classList.add('formulario-estado-error')
   
                document.getElementById('cheak-3').classList.remove('formulario-validacion-check')
                document.getElementById('cheak-3').classList.add('formulario-validacion-error')
                 document.getElementById('cheak-3').classList.remove('fa-check-circle')
                 document.getElementById('cheak-3').classList.add('fa-times-circle')                     
            }
        break;
        case "number":
            if(exp.numero.test(e.target.value)){
                document.getElementById('number').classList.add('formulario-estado-check')
                document.getElementById('cheak-4').classList.add('formulario-validacion-check')
            }else{

                document.getElementById('number').classList.remove('formulario-estado-check')
                document.getElementById('number').classList.add('formulario-estado-error')
   
                document.getElementById('cheak-4').classList.remove('formulario-validacion-check')
                document.getElementById('cheak-4').classList.add('formulario-validacion-error')
                 document.getElementById('cheak-4').classList.remove('fa-check-circle')
                 document.getElementById('cheak-4').classList.add('fa-times-circle')                  
            }
        break;
    }
}



inputs.forEach(e=>{
    e.addEventListener('keyup',validar);
    // e.addEventListener('blur',()=>{
    //     e.classList.remove('formulario-estado-error')
    //     e.classList.remove('formulario-estado-check')

    // },true)



})



