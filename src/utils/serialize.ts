import { Profile, User } from "../data";
import { SerializedUser } from "../types";

function userSerialize(user: User):SerializedUser {
  return {
    id: user.id
  };
}

function profileSerialize(profile: Profile){
    return {
        id: profile.id,
        name: profile.name,
    }
}

export { userSerialize, profileSerialize };