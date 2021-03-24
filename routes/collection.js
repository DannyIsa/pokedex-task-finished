const { Router } = require("express");
const collection = Router();
const fs = require('fs');

collection.get("/", (req, res) => {
  fs.readFile('./collection.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    res.send(data);
  })
});

collection.post("/catch/:name", (req, res) => {
  let { name } = req.params;
  fs.readFile('./collection.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    let collection = JSON.parse(data);
    collection.push(name);
    console.log(collection);

    fs.writeFile("./collection.json", JSON.stringify(collection), (err) => {
        if (err) throw err;
      }
    );

    res.send(collection);
  })

});

collection.delete("/release/:name", (req, res) => {
  let { name } = req.params;
  fs.readFile('./collection.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    let collection = JSON.parse(data);
    let newCollection = collection.filter(pokemon => pokemon !== name);

    fs.writeFile("./collection.json", JSON.stringify(newCollection), (err) => {
      if (err) throw err;
    }

  );
    console.log(newCollection);
    res.send(newCollection);
  })

});

module.exports = collection;
