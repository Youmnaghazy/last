var AddNoteInput=document.getElementById("NoteInput")
var tbody=document.getElementById("tbody");
var searchInput=document.getElementById("searchInput")
console.log(AddNoteInput);

var noteContainer=[]


function addNote(){
    var notes={
     AddNote:AddNoteInput.value

    }
    noteContainer.push(notes)
    display()
    clear()
console.log(noteContainer);
}
function display(){
    var cartoona=""
    for(var i=0;i<noteContainer.length;i++){
        cartoona+=`<tr>
       
         <td>${noteContainer[i].AddNote}</td>
       
         <td>
             <button class="btn btn-danger" onclick="deleteitems(${i})">
                 <i class="fa-solid fa-trash"></i>
                 Delete
             </button>
         </td>
     </tr>`
    
    }
    tbody.innerHTML=cartoona
}

function clear(){
    AddNoteInput.value=""
}
function deleteitems(index){
    noteContainer.splice(index,1)
    display()
}
function search(){
   var term=searchInput.value
   var cartoona=""
   for(var i=0;i<noteContainer.length;i++){
    if(noteContainer[i].AddNote.toLowerCase().includes(term.toLowerCase())){
        cartoona+=`<tr>
      
        <td>${noteContainer[i].AddNote}</td>
      
        <td>
            <button class="btn btn-danger" onclick="deleteitems(${i})">
                <i class="fa-solid fa-trash"></i>
                Delete
            </button>
        </td>
    </tr>`
    }
   
   }
   tbody.innerHTML=cartoona
}