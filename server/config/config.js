var path = require('path'),
    rootPath = path.normalize(__dirname+'/../../');
module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3040
    },
    production: {
        db: 'mongodb://anandm:multivision@ds153715.mlab.com:53715/mutlivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}