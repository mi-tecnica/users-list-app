/**
 * File: routes.js
 * Project: users-list-app
 * File Created: Monday, 8th April 2019 7:54:24 pm
 * Author: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Last Modified: Monday, 8th April 2019 8:18:32 pm
 * Modified By: Jaseem Jas (jaseem@socialanimal.com)
 * -----
 * Copyright 2016 - 2019 Socialanimal.com
 */

const users = require('./controllers/index')

module.exports = (app) => {
    app.use('/', users);
}