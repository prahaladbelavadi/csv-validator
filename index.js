const csv = require("csv-validator");
const csvFilePath = "./error_testFile.csv";
const headers = {
  name: "",
  phone: 1,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  country: "",
};

csv(csvFilePath, headers)
  .then(console.log)
  .catch((err) => {
    console.log(String(err));
  });
