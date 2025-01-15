const { Sequelize, DataTypes, Model } = require('sequelize');
const Schedule = require('./Schedule');
const sequelize = new Sequelize('klinikme','root','',{
    dialect: 'mysql'
});

class Booking extends Model {}

Booking.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nama_pasien: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nomor_telepon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        schedule_id: {
            type: DataTypes.BIGINT,
            references: {
                model: Schedule,
                key: 'id'
            }
        }
    }, { 
        sequelize,
        modelName: 'Bookings',
        timestamps: false
    }
)
// const Booking = sequalize.define(
//     'Bookings',
//     {
//         id: {
//             type: DataTypes.BIGINT,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         nama_pasien: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         nomor_telepon: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         schedule_id: {
//             type: DataTypes.BIGINT,
//             references: {
//                 model: Schedule,
//                 key: id
//             }
//         }
//     }, { timestamps: true }
// )

// module.exports = sequelize.model(Booking);
module.exports = Booking;