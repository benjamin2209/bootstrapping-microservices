import mongoose from 'mongoose';

export default class Database {

    /**
     * Get Database connection
     * @param url
     * @param options
     * @returns {Promise}
     */
    static init(url, options = {}){
        options = Object.assign({}, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, options);

        return mongoose.connect(url, options);
    }

}