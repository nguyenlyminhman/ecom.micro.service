const config = require("../config/pgdb");
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const pool = new Pool(config.pg);

const login = async (params) => {
    const { email, password } = params;
    let rs = {}
    let sql = `Select * from public.user where email = $1`;
    const { rows } = await pool.query(sql, [params.email]);
    
    if (password !== rows[0].password) {
        rs.status = "Fail"
        rs.message = "Auth fail"
        return rs;
    }

    const payload = { email };
    let token = jwt.sign(payload, '123321')

    rs.status = "Success";
    rs.message = "Auth success";
    rs.token = token;

    return rs;
}

module.exports = {
    login
}