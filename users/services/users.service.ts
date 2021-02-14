import { CRUD } from "../../common/crud.interface"
import usersDao from '../daos/users.dao'
import { UserDto } from "../dto/users.model"

class UsersService implements CRUD {

  private static instance: UsersService

  static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService()
    }
    return UsersService.instance
  }

  async list(limit: number, page: number) {
    return await usersDao.getUsers()
  }

  async create(resource: any) {
    return await usersDao.addUser(resource)
  }

  async updateById(resourceId: any) {
    return await usersDao.putUserById(resourceId)
  }

  async readById(resourceId: string) {
    return await usersDao.getUserById(resourceId)
  }

  async getUserByEmail(email: string) {
    return usersDao.getUserByEmail(email)
  }

  async patchById(resource: UserDto) {
    return await usersDao.patchUserById(resource)
  }

  async deleteById(resourceId: string) {
    return await usersDao.removeUserById(resourceId)
  }
}

export default UsersService.getInstance()