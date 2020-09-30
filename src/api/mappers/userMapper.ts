import User from "../../models/User";
import UserDto from "../dtos/userDto";

/**
 * Map DTO to User model.
 *
 * @param dto - User DTO
 */
export const userMapper = (dto: UserDto): User => {
  return new User({
    id: dto.id,
    lastName: dto.lastName,
    firstName: dto.firstName,
    email: dto.email,
  })
}
