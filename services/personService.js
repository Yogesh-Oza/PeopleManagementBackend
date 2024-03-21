const Person = require("../model/Person");

const createPerson = async (personData) => {
  const { name, age, gender, mobileNo } = personData;
  try {
    const person = await Person.create({ name, age, gender, mobileNo });
    console.log("Person created");
    return person;
  } catch (error) {
    console.error("Error creating person:", error);
    throw error;
  }
};

const updatePerson = async (personId, updatedData) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      personId,
      updatedData,
      { new: true }
    );
    console.log("Person updated");
    return updatedPerson;
  } catch (error) {
    console.error("Error updating person:", error);
    throw error;
  }
};

const deletePerson = async (personId) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    console.log("Person deleted");
    return deletedPerson;
  } catch (error) {
    console.error("Error deleting person:", error);
    throw error;
  }
};

const findPersonById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    console.log("Person found");
    return person;
  } catch (error) {
    console.error("Error finding person:", error);
    throw error;
  }
};

const findAllPersons = async () => {
  try {
    const persons = await Person.find();
    console.log("All persons found");
    return persons;
  } catch (error) {
    console.error("Error finding all persons:", error);
    throw error;
  }
};

module.exports = {
  createPerson,
  findAllPersons,
  findPersonById,
  deletePerson,
  updatePerson,
};
