console.log("notes")
showNotes();

//add the note to the local storage
let addButton = document.getElementById('addButton');
addButton.addEventListener('click', function (e) {
    let add_text = document.getElementById('add_text');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    noteObj.push(add_text.value);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    add_text.value = "";
    console.log(noteObj);
    showNotes();

});


//showing notes

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);

    }
    let html = "";
    noteObj.forEach(function (ele, index) {
        html += `
    <div class="noteCard my-4 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${ele}</p>
        <button id="${index}"onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
</div>`
    })

    let notesElement = document.getElementById('notes');
    if (noteObj.length != 0) {
        notesElement.innerHTML = html;
    } else {
        notesElement.innerHTML = `<h5> You don't have any Notes </h5>`
    }

}

//delete notes

function deleteNotes(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNotes();
}
