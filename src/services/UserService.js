import User from "../models/UserModel";

const createUser = async (newUser) => {
    try {
        const { name, email, password, confirmPassword, phone } = newUser;
        const checkUser = await User.findOne({
            email: email,
        });

        if (checkUser !== null) {
            return {
                status: 'OK',
                message: 'The email is already',
            };
        }

        const createdUser = await User.create({
            name,
            email,
            password,
            confirmPassword,
            phone,
        });

        if (createdUser) {
            return {
                status: 'OK',
                message: 'SUCCESS',
                data: createdUser,
            };
        }
    } catch (e) {
        throw e;
    }
};

export { createUser };
