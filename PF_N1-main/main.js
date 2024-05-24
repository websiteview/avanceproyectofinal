

/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}

*/

const tasks = document.querySelector('.Listatareas');
const TareaLista = [
  {
    id: 1,
    titulo: "Terminar proyecto final",
    Completed: false

},
{
  id: 2,
  titulo: "Ir al gym y ejercitarme",
  Completed: true

},
{
  id: 3,
  titulo: "Ir de paseo el sabado",
  Completed: false

},

]

const All_btn= document.querySelector('#subtitulosAll');
let SubtituloActive_btn = document.querySelector('#SubtituloActive');
let SubtituloCompleted_btn =  document.querySelector('#SubtituloCompleted');
let deleteAll = document.querySelector('.deleteAll');


let active_view = 'all';
all()


function all(){

    tasks.innerHTML =''
    TareaLista.forEach(task =>{
      showInDom(task.id, task.titulo, task.Completed)
    })

}

function active(){
  tasks.innerHTML =''
  TareaLista.forEach(task =>{
    if (task.Completed === false){
     showInDom(task.id, task.titulo, task.active)}
  })
}

function completed(){

  tasks.innerHTML =''
  TareaLista.forEach(task =>{
    if (task.Completed === true){
     showInDom(task.id, task.titulo, task.Completed)}
  
  })
        

}
 


/*Esta si va porque muestra si esta en all, activo o completada y lo condiciona al momento de presion el respectivo boto*/ 

function showInDom(id, titulo, Completed ){
    
  const li_template = `
  <li >
    <div> 
     <input type="checkbox"  id="${id}" ${Completed && 'checked'}>
     <label for="${id}" >${titulo}</label>
     ${active_view === 'Completed' ? '<button id="trash_1"><i class="fa-solid fa-trash"></i></button>':''}
    </div>
  </li>
  
  `
   tasks.innerHTML += li_template;

}



All_btn.addEventListener('click', function(){
     active_view = 'subtitulosAll'
     all()
     verbtnActivo()

} )


SubtituloActive_btn.addEventListener('click', function(){
    active_view = 'SubtituloActive'
    active()
    verbtnActivo()

})



SubtituloCompleted_btn.addEventListener('click', function(){
    active_view = 'SubtituloCompleted'
    completed()
    verbtnActivo()

}) 


function verbtnActivo(){

  switch(active_view){
    case 'all':
      All_btn.classList.add('activo')
      SubtituloActive_btn.remove('activo')
      SubtituloCompleted_btn.remove('activo')
        break;
    case 'active':
      All_btn.classList.remove('activo')
      SubtituloActive_btn.add('activo')
      SubtituloCompleted_btn.remove('activo')

        break;
    case 'completed':
      All_btn.classList.remove('activo')
      SubtituloActive_btn.remove('activo')
      SubtituloCompleted_btn.add('activo')

        break;
  }

}









// Función para marcar una tarea como completada o incompleta (Puede ser la misma función)
 const completeTask = (id) =>{
  const index = TareaLista.findIndex(tarea => tarea.id === id)
  TareaLista[index].Completed = !TareaLista[index].Completed
  tasks.innerHTML =''
  
   showInDom()
} 


// Función para añadir una nueva tarea
function addTask() {

  TareaLista.forEach(tarea =>{
   tasks.innerHTML += `
   <li class = "uno">
    
      <label for="${tarea.id}" >
         <input type="checkbox" name="${tarea.id}" id="${tarea.id}" class="${tarea.id}" ${tarea.Completed && 'checked'} onChange="marcar_desmarcarTarea(${tarea.id})">
        ${ tarea.titulo}
      </label>
    
      <button id="trash_1"><i class="fa-solid fa-trash"></i></button>
   </li>
    
    `
  })
   TareaLista.push(tasks)
}

/*Para eliminar una tarea que se hizo checked*/ 
tasks.addEventListener('click', (e)=>{
     if(e.target.tagName === 'INPUT'){
      completeTask(parseInt(e.target.id))
      console.log(TareaLista)
     }

})

// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
/* function completeTask(){
 

} */

// Función para borrar una tarea
function deleteTask(id, TareaLista) {
    const index = TareaLista.findIndex(tarea => tarea.id === id)
    TareaLista.splice(index, 1);
    console.log(TareaLista)
  
} 

// Funcion para borrar todas las tareas
/* function deleteAll() {
  
  
} */

// Función para filtrar tareas completadas
function filterCompleted() {
  TareaLista = TareaLista.filter(tarea => !tarea.Completed)
    
}

// Función para filtrar tareas incompletas
function filterUncompleted() {
    if (tasks != 'checked')
    TareaLista = TareaLista.filter(tarea => !tarea.acti)
}

