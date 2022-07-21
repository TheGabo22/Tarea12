/*******************************************************/
/*  Primer Enunciado de la Consigna                    */
/*******************************************************/

console.log(document.querySelector('title').innerText)

/*******************************************************/
/*  Tercer Enunciado de la consigna                    */
/*******************************************************/


let datos = document.getElementsByTagName('dd')

console.log(`-----
Integrante 1:"${datos[0].textContent} ${datos[1].textContent} ${datos[2].textContent} ${datos[3].textContent}"
Integrante 2:"${datos[4].textContent} ${datos[5].textContent} ${datos[6].textContent} ${datos[7].textContent}"
-----`)

/*******************************************************/
/*  Cuarto Enunciado de la consigna                    */
/*******************************************************/

if(window.confirm("¿Quieres comparar los apellidos?")){
    alert(`${datos[2].textContent} + ${datos[3].textContent}` === `${datos[6].textContent} ${datos[7].textContent}`
    )
}
console.log('No hay ninguna coincidencia entre los nombre y los apellidos')

/*******************************************************/
/*  Quinto Enunciado de la consigna                    */
/*******************************************************/



