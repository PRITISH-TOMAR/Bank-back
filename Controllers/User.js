const { User } = require('../Models/User');
const {createHmac, randomBytes} = require('crypto');



const Register = async (req, res) => {
    const { username, email, password, role } = req.body;
    // console.log(req.body)
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    try {

        const existUser = await User.findOne({ email });

        if (existUser) {
            console.log(existUser)
            return res.status(409).json({ message: 'User already Exists!', success: false })
        }

        const salt = randomBytes(16).toString();;
        const hashPass = createHmac('sha256', salt).update(user.password).digest("hex");
        const newUser = new User({ username, email, role,  salt, password: hashPass });
        await newUser.save();

        // console.log(userInfo) 
        res.status(201).json({ user:newUser,  success: true, message: 'User Registered Successfully!' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

const Login = async (req, res) => {


    const { email, password } = req.body;
    // console.log(req.body)
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    try {



        const user = await User.findOne({ email });

        if(!user)
        {
            return res.status(401).json({ message: 'Invalid credentials!', success: false })
        }
        const salt = user.salt;
        const hashPass = createHmac('sha256', salt).update(user.password).digest("hex");

        if (hashPass !== user.password) {
            return res.status(401).json({ message: 'Invalid credentials!', success: false })
        }


        res.status(200).json({ user,  success: true, message: 'Logged In Successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


//..................................................................................

module.exports = { Register, Login };
