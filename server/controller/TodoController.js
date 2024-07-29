const TodoModels = require('../models/TodoModels');

module.exports.createTodo = async (req, res) => {
    const { name, email } = req.body
    try {
        
        const createTodo = await TodoModels.create({
            name: name,
            email: email
        })
        res.status(201).json({
            success: true,
            msg: "User created successFully sir",
            createTodo: createTodo
        })
    } catch (error) {
        console.log("user createIng error", error)
    }
}

module.exports.getData = async (req, res) => {
    try {
        const AllData = await TodoModels.find();
        if (!AllData) {
            return res.status(404).json({
                success: true,
                msg: "Todo is not found sir"
            })
        }
        res.status(201).json({
            success: true,
            AllData: AllData
        })
    } catch (error) {
        console.log("Get data is not found sir error", error)
    }
}

module.exports.UpdatedData = async (req, res) => {
    const { id } = req.params;
    const updated = req.body
    try {
        const UpdatedTodo = await TodoModels.findByIdAndUpdate(id, updated, { new: true });
        if (!UpdatedTodo) {
            return res.status(404).json({
                success: false,
                msg: "Todo is not found sir"
            })
        }
        res.status(201).json({
            success: true,
            msg: "Todo is updated successFully sir",
            UpdatedTodo: UpdatedTodo
        })
    } catch (error) {
        console.log("todo updated error", error)
    }
}

module.exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const DeleteTodo = await TodoModels.findByIdAndDelete(id);
        if (!DeleteTodo) {
            return res.status(404).json({
                success: false,
                msg: "Todo is not found sir"
            })
        }
        res.status(201).json({
            success: true,
            msg: "Todo is updated successFully sir",
            DeleteTodo: DeleteTodo
        })
    } catch (error) {
        console.log("todo DeleteTodo error", error)
    }
}