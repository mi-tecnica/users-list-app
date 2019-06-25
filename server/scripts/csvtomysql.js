/**
 * File: csvtomysql.js
 * Project: users-list-app
 * File Created: Saturday, 13th April 2019 1:40:02 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Sunday, 14th April 2019 8:04:40 am
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

let filePath = '/Users/jaseem/Downloads/users.csv';
var mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
};

var exporter = require('csv-to-mysql');
exporter('localhost', 'vueapp', 'root', 'Iamajseem', filePath);