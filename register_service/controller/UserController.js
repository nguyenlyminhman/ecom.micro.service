const service = require("../service/UserService");

const getAll = async (req, res) => {
    let data = await service.getAll(req.body);
    res.status(200).json(data)
}

const createOne = async (req, res) => {
    let data = await service.createOne(req.body);
    res.status(200).json(data)
}

module.exports = {
    getAll,
    createOne
}