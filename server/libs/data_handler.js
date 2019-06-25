/**
 * File: data_handler.js
 * Project: users-list-app
 * File Created: Sunday, 14th April 2019 1:47:28 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Friday, 19th April 2019 11:30:44 am
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

const config = require('../configs/global');
const db = config.mysql.getClient();
const Users = db.import('../models/users');

const fetchUsers = (offset) => {
    return new Promise((resolve, reject) => {
        Users.findAndCountAll({
            offset: offset,
            limit: 10,
            raw: true
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            console.log('Mysql Error', err)
            reject();
        })
    });
}
const getUserData = () => {
    return new Promise(async(resolve, reject) => {
        let males = 0;
        let females = 0;
        await Users.count({ where: { gender: 'Male' } }).then((data) => {
            males = data;
        }).catch((err) => {
            console.log(err)
            reject();
        })
        await Users.count({ where: { gender: 'Female' } }).then((data) => {
            females = data;
        }).catch((err) => {
            console.log(err);
            reject();
        })

        resolve({ males, females })
    });
}

module.exports = {
    fetchUsers,
    getUserData
}