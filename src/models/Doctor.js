const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('klinikme','root','',{
    dialect: 'mysql'
});

class Doctor extends Model {}

Doctor.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        jenis: {
            type: DataTypes.ENUM(["gigi", "umum", "kecantikan"]),
            allowNull: false,
        }

    }, {
        sequelize,
        modelName: 'Doctors',
        timestamps: false
    }
)
// const Doctor = sequalize.define(
//     'Doctors',
//     {
//         id: {
//             type: DataTypes.BIGINT,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         nama: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         jenis: {
//             type: DataTypes.ENUM(["gigi", "umum", "kecantikan"]),
//             allowNull: false,
//         }

//     }, { timestamps: true }
// )

// module.exports = sequelize.model(Doctor);
module.exports = Doctor;