/**
 * File: mysql_config.js
 * Project: users-list-app
 * File Created: Sunday, 14th April 2019 1:32:02 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Sunday, 14th April 2019 1:36:42 pm
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

const Sequelize = require('sequelize');

module.exports = () => {
    const sequelize = new Sequelize('vueapp', 'root', 'Iamajseem', {
        host: 'localhost',
        dialect: 'mysql'
    })

    sequelize.authenticate().then(() => {
        console.log('Successfully authenticated');
    }).catch((err) => {
        console.log('Mysql error', err);
    })

    return {
        getClient: () => {
            return sequelize;
        }
    }
}