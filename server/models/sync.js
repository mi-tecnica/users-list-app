/**
 * File: sync.js
 * Project: users-list-app
 * File Created: Sunday, 14th April 2019 1:42:48 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Sunday, 14th April 2019 1:46:39 pm
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

const config = require('../configs/global');
const db = config.mysql.getClient();
const Users = db.import('./users')

Users.sync().then(() => {
    console.log('User table synced!');
}).catch((err) => {
    console.log('Somthing went wrong', err);
})