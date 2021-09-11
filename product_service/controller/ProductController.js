const service = require("../service/ProductService");

const getAll = async (req, res) => {
    let data = await service.getAll(req.body);
    res.status(200).json(data)
}

const createOne = async (req, res) => {
    let data = await service.createOne(req.body);
    res.status(200).json(data)
}

const findById = async (req, res) => {
    let data = await service.findById(req.body);
    res.status(200).json(data)
}

const buyProduct = async (req, res) => {
    let data = await service.buyProduct(req.body);
    res.status(200).json(data)
}
module.exports = {
    getAll,
    createOne,
    findById,
    buyProduct
}