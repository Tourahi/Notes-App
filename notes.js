const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => "Your Notes";

const RED   = chalk.red.inverse;
const GREEN = chalk.green.inverse;
const CYAN = chalk.cyan;


const addNote = (title , body) => {
   const Data = loadNotes();
   const duplica = Data.filter((note) => note.title === title);
   if(duplica.length === 0){
     Data.push({
       title: title,
       body: body
     });
     saveNotes(Data);
     console.log(GREEN("Note Added."));
   }
   else {
     console.log(RED("Title already exists."));
   }
}

const removeNote = (title) => {
  const Data = loadNotes();
  let Orglength = Data.length; //Save the original length
  const FiltredData = Data.filter((note) => note.title != title);
  if(Orglength != FiltredData.length)
  {
    console.log(GREEN("Note removed."));
    saveNotes(FiltredData);
  }
  else{
    console.log(RED("Note does not exist."));
  }
}

const listNotes = () => {
  const Data = loadNotes();
  Data.forEach((note) => {
    console.log(CYAN(note.title));
  });
  console.log(GREEN('Total notes : ' + Data.length));
}


const saveNotes = (data) => {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync("notes.json" , dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (err) {
    return [];
  }
}



module.exports = {
  addNote    : addNote,
  removeNote : removeNote,
  listNotes  : listNotes
};
