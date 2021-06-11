// Función para saludar con el nombre del usuario

const nombre = '';

 function saludar() {
    const nombre = document.getElementById('casilla');
    const contenedor = document.getElementById('contenedor');
    contenedor.textContent = '¡Hola '+ nombre.value +' ! Escoje tu categoría';
}

//////////////////////////////////////////
// Función para mostrar el cuestionario sobre Gastronomía

// function mostrarQuestionario1() {
    
//     const questionario1 = document.getElementById('tercera');
    
//         if (questionario1 == 'none' || questionario1 == '') {
//             document.getElementById('tercera').style.display = 'block'
//         }else{
//             document.getElementById('tercera').style.display = 'none'
//         }

//     const categoria = document.getElementById('categoria').style.display;
//         if (categoria == 'block') {
//             document.getElementById('categoria').style.display = 'none'
//         }else{
//             document.getElementById('categoria').style.display = 'block'
//         }
// }


//////////////////////////////////////////
// Función para mostrar el cuestionario sobre Turismo

function mostrarQuestionario2() {
   
    const questionario2 = document.getElementById('cuarta').style.display;
        if (questionario2 == 'none' || questionario2 == '') {
            document.getElementById('cuarta').style.display = 'block'
        }else{
            document.getElementById('cuarta').style.display = 'none'
        }

    const categoria = document.getElementById('categoria').style.display;
        if (categoria == 'block') {
            document.getElementById('categoria').style.display = 'none'
        }else{
            document.getElementById('categoria').style.display = 'block'
        }
}


//////////////////////////////////////////
//Función que captura las respuestas y suma los aciertos de Gastronomía

function resultado() {

    let p1, p2, p3, p4, p5, p6, p7, p8, nota;
    
    // PREGUNTA 1 
    
    if (document.getElementById('p12').checked==true) {p1=1}
    
    if (p1==1) {document.querySelectorAll('.pregunta1')[0]}
    
    else {p1=0}
    
    // PREGUNTA 2 
    
    if (document.getElementById('p21').checked==true) {p2=1}
    
    if (p2==1) {document.querySelectorAll('.pregunta2')[1]}
    
    else {p2=0}
    
    // PREGUNTA 3 
    
    if (document.getElementById('p33').checked==true) {p3=1}
    
    if (p3==1) {document.querySelectorAll('.pregunta3')[2]}
    
    else {p3=0}
    
    // PREGUNTA 4
    
    if (document.getElementById('p42').checked==true) {p4=1}
    
    if (p4==1) {document.querySelectorAll('.pregunta4')[3]}
    
    else {p4=0}
     
    // PREGUNTA 5
    
    if (document.getElementById('p51').checked==true) {p5=1}
    
    if (p5==1) {document.querySelectorAll('.pregunta5')[3]}
    
    else {p5=0}
     
    // PREGUNTA 6
    
    if (document.getElementById('p63').checked==true) {p6=1}
    
    if (p6==1) {document.querySelectorAll('.pregunta6')[3]}
    
    else {p6=0}
     
    // PREGUNTA 7
    
    if (document.getElementById('p72').checked==true) {p7=1}
    
    if (p7==1) {document.querySelectorAll('.pregunta7')[3]}
    
    else {p7=0}
    
    // PREGUNTA 8
    
    if (document.getElementById('p83').checked==true) {p8=1}
    
    if (p8==1) {document.querySelectorAll('.pregunta8')[3]}
    
    else {p8=0}

    // Sumatoria
    nota=p1+p2+p3+p4+p5+p6+p7+p8;

    // console.log(p1 + '' + p2 + '' + p3 + '' + p4 + ''+ p5 + '' + p6 + ''+ p7 + '' +p8);
    
    document.getElementById('resultado').innerHTML="Aciertos: "+nota;
    
    // rs=confirm("continuar");
    
    // if (rs==false) {document.forms[0].reset();location.reload()}
    
    }


/////////////////////////////////////////////////////
//Función que captura las respuestas y suma los aciertos de Lugares Turísticos

function resultado2() {
    var q1, q2, q3, q4, q5, q6, q7, q8, nota;
    
    //  PREGUNTA 1
    
    if (document.getElementById('q13').checked==true) {q1=1}
    
    if (q1==1) {document.querySelectorAll('.pregunta1')[0]}
    
    else {q1=0}

    
    //  PREGUNTA 2
    
    if (document.getElementById('q22').checked==true) {q2=1}
    
    if (q2==1) {document.querySelectorAll('.pregunta2')[1]}
    
    else {q2=0}
    
    
    //  PREGUNTA 3
    
    if (document.getElementById('p33').checked==true) {q3=1}
    
    if (q3==1) {document.querySelectorAll('.pregunta3')[2]}
    
    else {q3=0}
    
    //  PREGUNTA 4
    
    if (document.getElementById('q42').checked==true) {q4=1}
    
    if (q4==1) {document.querySelectorAll('.pregunta4')[3]}
    
    else {q4=0}
    
    //  PREGUNTA 5
    
    if (document.getElementById('q51').checked==true) {q5=1}
    
    if (q5==1) {document.querySelectorAll('.pregunta5')[3]}
    
    else {q5=0}
    
    //  PREGUNTA 6
    if (document.getElementById('q63').checked==true) {q6=1}
    
    if (q6==1) {document.querySelectorAll('.pregunta6')[3]}
    
    else {q6=0}
    
    //  PREGUNTA 7
    if (document.getElementById('q73').checked==true) {q7=1}
        
        if (q7==1) {document.querySelectorAll('.pregunta7')[3]}
        
        else {q7=0}
        
        //  PREGUNTA 8
        
        if (document.getElementById('q81').checked==true) {q8=1}
        
        if (q8==1) {document.querySelectorAll('.pregunta8')[3]}
        
        else {q8=0}
        
    
    // Sumatoria
    
    nota=q1+q2+q3+q4+q5+q6+q7+q8;
    // console.log(q1+''+q2+''+q3+''+q4+''+q5+''+q6+''+q7+''+q8);
    
    document.getElementById('resultado2').innerHTML=" Aciertos: "+nota;
    
    // rs=confirm("continuar");
    
    // if (rs==false) {document.forms[0].reset();location.reload()}
    
    } 

