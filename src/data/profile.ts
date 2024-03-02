import { DataTypes, Model } from "sequelize";
import { db } from "./init";

type TextureType = 'SKIN'|'CAPE';
type Texture = {
    [key in TextureType]: string
}

class Profile extends Model {
    declare public id: string;
    declare public name: string;
    declare public model: 'default' | 'slim';
    declare public texture: Texture;
}

Profile.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    model: {
        type: DataTypes.ENUM('default', 'slim'),
        allowNull: false,
    },
    texture: {
        type: DataTypes.JSON,
        allowNull: false,
    }
}, {
    sequelize: db
});

Profile.sync({alter:true});