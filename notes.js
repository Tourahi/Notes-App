const fs = require('fs');
const getNotes = () => "Your Notes";




const addNote = function (title , body) {
   Data = loadNotes();
   const duplica = Data.filter(function (note) {
     return note.title === title;
   });

   if(duplica.length === 0){
     Data.push({
       title: title,
       body: body
     });
     saveNotes(Data);
     console.log("Note Added.");
   }
   else {
     console.log("Title already exists.");
   }
}

const removeNote = function (title) {
  Data = loadNotes();
  let Orglength = Data.length;
  const FiltredData = Data.filter(function (note) {
    return note.title != title;
  });
  if(Orglength != FiltredData.length)
  {
    console.log("Note removed.");
    saveNotes(FiltredData);
  }
  else{
    console.log("Note does not exist.");
  }

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
  addNote: addNote,
  removeNote : removeNote
};
