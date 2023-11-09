import Taskschema from "../models/task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Taskschema.find();
    res.json(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Taskschema.findById(id);
    res.json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = new Taskschema(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Taskschema.findByIdAndUpdate(id, req.body);
  res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Taskschema.findByIdAndDelete(id);

    if (task) {
      return res.status(200).send("Task Deleted!");
    }

    throw new Error("Task not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};