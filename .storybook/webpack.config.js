const path = require('path')
const customWebpack = require('../webpack.config')

module.exports = async ({config, mode}) =>{
    return {
        ...config,
        module: {
            ...config.module,
            rules: customWebpack.module.rules
        }
    }
}