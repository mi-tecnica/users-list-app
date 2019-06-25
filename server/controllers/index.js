/**
 * File: index.js
 * Project: users-list-app
 * File Created: Monday, 8th April 2019 7:54:42 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Friday, 19th April 2019 11:34:40 am
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

const express = require('express');
const router = express.Router();
const dataHandler = require('../libs/data_handler');

const listUsers = (req, res) => {
    const page = req.params.page;
    const offset = (page - 1) * 10;
    dataHandler.fetchUsers(offset).then((data) => {
        const users = data.rows;
        const count = data.count;
        res.json({
            users: users,
            count: count
        });
    }).catch(() => {
        res.json({
            users: [],
            count: 0
        });
    })

}

const plotGenderData = (req, res) => {
    dataHandler.getUserData().then((data) => {
        res.json(data);
    }).catch(() => {
        res.json({
            males: 0,
            females: 0
        });
    })
}

router.get('/users_list/:page', listUsers);
router.get('/plotGenderGraph', plotGenderData);
module.exports = router;