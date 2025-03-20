import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import User from '../models/user.model.js'

// req.body is an object containing data from the client (POST requests)

export const signUp = async (res, req, next) => {
    // Implement sign up logic
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Create a new user 
        const { name, email, password} = req.body;

        // Check if user is already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 400;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const 

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async (res, req, next) => {

}

export const signOut = async(res, req, next) => {

}