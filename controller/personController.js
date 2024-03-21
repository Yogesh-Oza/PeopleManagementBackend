const {
  createPerson,
  updatePerson,
  deletePerson,
  findPersonById,
  findAllPersons,
} = require("../services/personService");

const createUser = async (req, res) => {
  try {
    const person = await createPerson(req.body);
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ error: "Could not create person" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedPerson = await updatePerson(id, updatedData);
    return res.status(200).json(updatedPerson);
  } catch (error) {
    return res.status(500).json({ error: "Could not update person" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPerson = await deletePerson(id);
    return res.status(200).send("Person deleted successfully");
  } catch (error) {
    return res.status(500).json({ error: "Could not delete person" });
  }
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await findPersonById(id);
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ error: "Could not find person" });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const persons = await findAllPersons();
    return res.status(200).json(persons);
  } catch (error) {
    return res.status(500).json({ error: "Could not find persons" });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  findUserById,
  findAllUsers,
};
