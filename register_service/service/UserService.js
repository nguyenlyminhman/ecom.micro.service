const { Pool } = require('pg');
const config = require("../config/pgdb");
const pool = new Pool(config.pg);

const getAll = async (params) => {
    let sql = `Select * from public.user`;
    const { rows } = await pool.query(sql, []);
    return rows;
}

const findOne = async (params) => {
    let rs = false
    let sql = `Select count(*) from public.user where email = $1`;
    const rows = await pool.query(sql, [params.email]);
    if (rows.rowCount > 0)
        rs = true;
    return rs;
}

const createOne = async (params) => {
    let isExist = await findOne(params.email);
    let rs = {}
    rs.status = "Fail";
    rs.message = "Create fail"
    if (isExist) {
        rs.status = "Fail",
        rs.message = "User exist"
        return rs;
    }
    let sql = `INSERT INTO public."user"(email, password, fullname) VALUES ( $1,  $2,  $3);`;
    const rows = await pool.query(sql, [params.email, params.password, params.fullname]);
    if (rows.rowCount > 0) {
        rs.status = "Success",
        rs.message = "Created"
    }
    return rs;
}

module.exports = {
    getAll,
    createOne,
    findOne

}