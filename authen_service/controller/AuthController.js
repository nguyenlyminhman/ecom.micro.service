const service = require("../service/AuthService");

const login = async (req, res) => {
    let data = await service.login(req.body);
    res.status(200).json(data)
}

module.exports = {
    login
}