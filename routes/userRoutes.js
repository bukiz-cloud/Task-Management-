
import express from "express";
import {userLoginController, userRegisterController, deleteASpecificUser, getAllUsersController, getSpecificUserController, updateUserDetailsController, updateUserPasswordController} from "../controller/userController.js";
import { authenticateToken } from "../middleware/authenticateToken.js";



const userRoutes = express.Router();

// Create a new User
userRoutes.post("/register", userRegisterController);

// Verify User Login Details
userRoutes.post("/login", userLoginController);
// Get all users
userRoutes.get("", getAllUsersController)
// Update User details
userRoutes.put("/update",authenticateToken, updateUserDetailsController);

// Get a specific user
userRoutes.get("/specificUser", authenticateToken, getSpecificUserController);

//update user password
userRoutes.put("/updatepassword",authenticateToken, updateUserPasswordController);

// Delete a specific User
userRoutes.delete("/delete", deleteASpecificUser);

export default userRoutes;