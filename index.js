const { log } = require("console");
const fs = require("fs");




const strToWrite = "One more task is added";

// Task Added

const writeDataToFile = (fileName, data) => {
    // console.log(data)
  fs.writeFile(fileName, data, (err) => {

    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully");
  });
};

// writeDataToFile();



// To See Data

const readFile = () => {
    const data = fs.readFileSync(fileName, { encoding: "utf-8" });
    return data;
      
  };

readFile();




// To add something in file

const appendFile = () => {
    fs.appendFile(fileName, "\n" + strToWrite, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  };
  
//   appendFile();






// Mark a Task as Complete
  const users = [
    {
      name: "Tony Stark",
      age: 50,
    },
    {
      name: "Peter Parker",
      age: 15,
    },
    {
      name: "Steven Strange",
      age: 50
    }
  ];
  
//   console.log(JSON.stringify(users))
//   writeDataToFile("users.json", JSON.stringify(users));
  const fileData = readFile("users.json");
  const data = JSON.parse(fileData);
  const updatedData = data.map((user) => {
    if (user.name === "Peter Parker") {
      return {
        ...user,
        age: 20,
      };
    } else {
      return user;
    }
  });
  console.log(updatedData);
  
  writeDataToFile("users.json", JSON.stringify(updatedData));







// To delete some file

const deleteFile = () =>{
    fs.unlink("file.txt", (err) =>{
        if(err){
            console.log(err);
            return;
        }
        console.log("File Deleted Successfully");
    })
}

deleteFile();