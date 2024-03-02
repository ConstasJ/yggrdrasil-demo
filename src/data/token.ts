import { DataTypes, Model } from "sequelize";
import { db } from "./init";

class Token extends Model {
    declare public accessToken:string;
    declare public clientToken: string;
    declare public playerUUID: string;
    declare public issuedTime: Date;
}

Token.init({
    accessToken: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    clientToken: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    playerUUID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    issuedTime: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize: db
});

Token.sync({alter: true});

export { Token };