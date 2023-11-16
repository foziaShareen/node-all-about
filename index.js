const fs =require("fs");
// fs.writeFile("message.txt","it is the first message using file system",(err)=>{
//     if(err) throw err;
//     console.log("has been created and saved");

// })
fs.readFile("./message.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})