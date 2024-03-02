import { DataTypes, Model } from "sequelize";
import { db } from "./init";

class User extends Model {
    declare public id: string;
    declare public email: string;
    declare public password: string;
}

User.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db
})

User.sync({alter: true});

export { User };