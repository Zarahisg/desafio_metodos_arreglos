let newTarea = document.querySelector ("#newTarea")
let btnAgregar = document.querySelector("#btnAgregar")
let totalTareas = document.querySelector ("#totalTareas")
let totalRealizadas = document.querySelector ("#totalRealizadas")
let listadoTa = document.querySelector ("#listadoTa")


let tareas = [
{ id: Date.now()+ 1, nameTarea:"Hacer Desafio", check: false},
{ id: Date.now()+ 2, nameTarea:"Comprar verduras", check: false},
{ id: Date.now()+ 3, nameTarea:"Lavar el auto", check: false},
]

const totalCompletadas = ()=> {
    arrayCompletado = tareas.filter((completadas)=>completadas.check!==false);
    return  arrayCompletado.length};

const render =()=> {
  listadoTa.innerHTML ="";
  totalTareas.innerHTML = `${tareas.length}`;
  totalRealizadas.innerHTML = totalCompletadas();

  tareas.forEach ((tarea)=>{
    if(tarea.check===false){
      listadoTa.innerHTML += `
        <tr><td> ${tarea.id}</td><td> ${tarea.nameTarea} </td>
        <td><input type="checkbox" class= "check" onclick="checkTarea(${tarea.id})"id="${tarea.id}" ></td>
        <td> <button class= "btnX" onclick="deleteTarea(${tarea.id})" id="${tarea.id}">❌</button></td>
        </tr>`
        }else{
        listadoTa.innerHTML += `
        <tr> <td> ${tarea.id}</td><td> ${tarea.nameTarea} </td>
        <td><input type="checkbox" class= "check" checked onclick="checkTarea(${tarea.id})"id="${tarea.id}" ></td>
        <td> <button class= "btnX" onclick="deleteTarea(${tarea.id})" id="${tarea.id}">❌</button></td>
        </tr>`
    }
  })
}
render()
const checkTarea = (chekeador) => {
    tareas.forEach((tarea) => {
        if (tarea.id === chekeador) {
            if (tarea.check === false) {
                tarea.check = true;
                render();
            } else {
                tarea.check = false;
                render();
            }
        }
    });
};

btnAgregar.addEventListener("click", () => {
    if (newTarea.value == "") {
        alert("Coloca una Tarea")
    } else {
        tareas.push({
            id: Date.now(),
            nameTarea: `${newTarea.value}`,
            check: false,
        });
        newTarea.value = "";
        return render(); 
    }
})

const deleteTarea = (btnX) =>{
    tareas = tareas.filter((elim)=> elim.id !== btnX);
    render();
}