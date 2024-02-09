import mongoose from 'mongoose';
import { User, UserModel, UserUpdateOptions } from '../models/user';

const createUser = async (user: User) => {
  const newUser = await UserModel.create(user);
  return newUser;
};

const updateUser = async (userId: string, updatedUserFields: UserUpdateOptions) => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: { $eq: new mongoose.Types.ObjectId(userId) } }, 
    updatedUserFields, 
    { new: true }
  )
    .select('-__v')
    .lean();
  return updatedUser;
};

const getUser = async (userId: string) => {
  const user = await UserModel.findOne({ _id: { $eq: new mongoose.Types.ObjectId(userId) } })
    .select('-__v')
    .lean();
  return user;
};

const deleteUser = async (userId: string) => {
  const deletedUser = await UserModel.findOneAndDelete({ _id: { $eq: new mongoose.Types.ObjectId(userId) } })
    .select('-__v')
    .lean();
  return deletedUser;
};

const UserRepo = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
};

export { UserRepo as default };
