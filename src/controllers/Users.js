import User from "../models/User.js";
const getUsers = async (req, res) => {
   try {
    const users = await User.find({});
    res.status(200).json(users);
   } catch (error) {
        res.status(500).json({message: error.message})
   } 
}
const getUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user){
            return res.status(400).json({message: `User with id ${id} was not found`});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createUser = async (req, res) =>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user){
            return res.status(400).json({message: `User with id ${id} was not found`});
        }
        const userUpdated=  await User.findById(id);
        res.status(200).json(userUpdated);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const deleteUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user){
            return res.status(400).json({message: `User with id ${id} was not found`});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export {getUser, getUsers, createUser, updateUser, deleteUser};