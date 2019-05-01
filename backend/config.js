module.exports = {
    db: {
        dialect: process.env.DB_DIALECT || 'mysql',
        username: process.env.DB_USERNAME || 'test',
        password: process.env.DB_PASSWORD || 'test',
        host: process.env.DB_HOST || '0.0.0.0',
        port: process.env.DB_PORT || 3306,
        database: process.env.DB_DATABASE || 'test',
        define: {
            timestamps: true,
            paranoid: true
        }
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0', // '127.0.0.1',
    notification: {
        emails: process.env.NOTIFICATION_EMAIL || 'noreply@test.com',
        members: process.env.MEMBER_EMAILS || 'noreply@test.com'
    },
    mail: {
        email: 'noreply@test.com',
        name: 'test'
    }
};
