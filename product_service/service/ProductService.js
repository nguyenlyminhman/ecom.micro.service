const { Pool } = require('pg');
const config = require("../config/pgdb");
const { param } = require('../routes');
const pool = new Pool(config.pg);

const getAll = async (params) => {
    let sql = `Select * from public.product`;
    const { rows } = await pool.query(sql, []);
    return rows;
}

const findById = async (params) => {
    let rs = false
    let sql = `Select * from public.product where id = $1`;
    const { rows } = await pool.query(sql, [params.id]);
    return rows;
}

const createOne = async (params) => {
    let sql = `INSERT INTO public.product(name, description, price) VALUES ( $1,  $2,  $3);`;
    let rs = {};
    const rows = await pool.query(sql, [params.name, params.description, params.price]);
    if (rows.rowCount > 0) {
        rs.status = "Success",
        rs.message = "Created"
    }
    return rs;
}

const buyProduct = async (params) => {
    const {ids} = params 
    let rs = {}
    if(!Array.isArray(ids)){
        rs.message = "Buy fail"
        return rs;
    }
    let sql = `SELECT name, description, price, id FROM public.product where id = ANY($1::int[])`;
    const {rows} = await pool.query(sql, [ids]);
    rs.message = rows
    return rs; 
}

module.exports = {
    getAll,
    createOne,
    findById,
    buyProduct
}