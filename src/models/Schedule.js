const { Sequelize, DataTypes, Model } = require('sequelize');
const Doctor = require('./Doctor');
const sequelize = new Sequelize('klinikme','root','',{
    dialect: 'mysql'
});

class Schedule extends Model {}

Schedule.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        hari: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tanggal_buka: {
            type: DataTypes.DATE,
            allowNull: true
        },
        jam_buka: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        jam_tutup: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        doctor_id: {
            type: DataTypes.BIGINT,
            references: {
                model: Doctor,
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Schedules',
        timestamps: false
    }
)

// const Schedule = sequalize.define(
//     'Schedules',
//     {
//         id: {
//             type: DataTypes.BIGINT,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         hari: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         tanggal_buka: {
//             type: DataTypes.DATE,
//             allowNull: true
//         },
//         jam_buka: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         jam_tutup: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         doctor_id: {
//             type: DataTypes.BIGINT,
//             references: {
//                 model: Doctor,
//                 key: id
//             }
//         }
//     }, { timestamps: true }
// )

// module.exports = sequelize.model(Schedule);
module.exports = Schedule;