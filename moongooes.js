const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/practice");

  const employeeSchema = new mongoose.Schema({
    eName: String,
    eAge: Number,
    eHobby: Array,
    eFullName: Object,
  });

  const employeeModel = mongoose.model("employee", employeeSchema);

  let data = new employeeModel({
    eName: "Lalit",
    eAge: 52,
    eHobby: ["Travel", "Gaming"],
    eFullName: { fName: "Lalit", lName: "Malasana" },
  });
  let result = await data.save();

  console.log(result);
};

main();
