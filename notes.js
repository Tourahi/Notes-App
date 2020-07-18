const fs = require('fs');
const getNotes = () => "Your Notes";




const addNote = function (title , body) {
   Data = loadNotes();
   Data.push({
     title: title,
     body: body
   });
   saveNotes(Data);
}

const saveNotes = function (data){
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync("notes.json" , dataJSON);
}

const loadNotes = function (){
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (err) {
    return [];
  }
}



module.exports = {
  addNote: addNote
};
