/**
 * File: users.js
 * Project: users-list-app
 * File Created: Sunday, 14th April 2019 1:39:21 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Sunday, 14th April 2019 4:53:55 pm
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('users', {
        first_name: {
            type: Sequelize.STRING(18)
        },
        last_name: {
            type: Sequelize.STRING(18)
        },
        email: {
            type: Sequelize.STRING(48)
        },
        gender: {
            type: Sequelize.STRING(18)
        },
    }, {
        timestamps: false
    })

}