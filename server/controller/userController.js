import generateHashPassword from "../model/generateHashPassword.js";
import User from "../model/userModel.js";

const createUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      mobile,
      gender,
      dateOfBirth,
      age,
      password,
    } = req.body;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !mobile ||
      !gender ||
      !dateOfBirth ||
      !age ||
      !password
    ) {
      return res.json("Enter all details");
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.json({
        msg: "Email already exist.Please enter another email",
      });
    }

    const saveDat = await User.create(req.body);
    return res.status(201).json({
      msg: "User created successfully",
      data: saveDat,
    });
  } catch (error) {
    console.log(error);
  }
};

const requestforClientReferal = async (req, res) => {
  try {
    console.log("hi1");

    const {
      firstname,
      lastname,
      email,
      mobile,
      gender,
      dateOfBirth,
      age,
      password,
      clientID,
      formdill,
    } = req.body;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !mobile ||
      !gender ||
      !dateOfBirth ||
      !age ||
      !password
    ) {
      return res.json("Enter all details");
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.json({
        msg: "Email already exist.Please enter another email",
      });
    }

    const saveDat = await User.create({
      firstname,
      lastname,
      email,
      mobile,
      gender,
      dateOfBirth,
      age,
      password,
    });
    const client = await User.findOne({ clientID });

    if (client) {
      await User.findOneAndUpdate(
        { clientID },
        { $push: { referals: saveDat._id }, $inc: { formdill: 5 } }
      );
    } else {
      return res.status(404).json({ msg: "Client ID not found" });
    }

    return res.status(201).json({
      msg: "User created successfully",
      data: saveDat,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.json({
        msg: "Email not registered, Please register first",
      });
    }

    const checkPassword = await userExist.comparePassword(password);
    if (!checkPassword) {
      return res.json({
        msg: "Invalid credential",
      });
    }

    const accessToken = await userExist.generateAccessToken();

    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("accessToken", accessToken, cookieOption);

    res.status(200).json({
      msg: "Login Successfull",
      userToken: accessToken,
    });
  } catch (error) {
    res.status(400).json("Error in Login");
  }
};

const userDetail = async (req, res) => {
  try {
    const userId = req.userId;
    const userDetail = await User.findById(userId)
      .select({ password: 0 })
      .populate("referals");
    res.status(200).json({ data: userDetail });
  } catch (error) {
    console.log(error);
  }
};

const updateUserbasics = async (req, res) => {
  try {
    const userID = req.userId;
    const {
      country,
      state,
      city,
      alternatenumber,
      ethnicity,
      origin,
      pincode,
      rstatus,
      workemail,
      formdill1,
    } = req.body;
    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
        ...(country && { country }),
        ...(state && { state }),
        ...(city && { city }),
        ...(alternatenumber && { alternatenumber }),
        ...(ethnicity && { ethnicity }),
        ...(origin && { origin }),
        ...(pincode && { pincode }),
        ...(rstatus && { rstatus }),
        ...(workemail && { workemail }),
        ...(formdill1 && { $set: { formdill1: 1 } }),
      },
      { new: true }
    );
    res.status(200).json({
      data: changedValue,
      msg: "Detail added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUsereducation = async (req, res) => {
  try {
    const userID = req.userId;
    const {
      educationlevel,
      enroll,
      institute,
      onlineclasses,
      consider,
      formdill2,
    } = req.body;
    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
        ...(educationlevel && { educationlevel }),
        ...(enroll && { enroll }),
        ...(institute && { institute }),
        ...(onlineclasses && { onlineclasses }),
        ...(consider && { consider }),
        ...(formdill2 && { $set: { formdill2: 1 } }),
      },
      { new: true }
    );
    res.status(200).json({
      data: changedValue,
      msg: "Detail added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserfinance = async (req, res) => {
  try {
    const userID = req.userId;
    const { decisin, incom, formdill3 } = req.body;
    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
        ...(decisin && { decisin }),
        ...(incom && { incom }),
        ...(formdill3 && { $set: { formdill3: 1 } }),
      },
      { new: true }
    );
    res.status(200).json({
      data: changedValue,
      msg: "Detail added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserlse = async (req, res) => {
  try {
    const userID = req.userId;
    const { abroad, visit, formdill5 } = req.body;
    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
        ...(abroad && { abroad }),
        ...(visit && { visit }),
        ...(formdill5 && { $set: { formdill5: 1 } }),
      },
      { new: true }
    );
    res.status(200).json({
      data: changedValue,
      msg: "Detail added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserShopping = async (req, res) => {
  try {
    const userID = req.userId;
    const { decisinj, incomi, formdill4 } = req.body;
    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
        ...(decisinj && { decisinj }),
        ...(incomi && { incomi }),
        ...(formdill4 && { $set: { formdill4: 1 } }),
      },
      { new: true }
    );
    res.status(200).json({
      data: changedValue,
      msg: "Detail added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const requestforClient = async (req, res) => {
  try {
    const userID = req.userId;
    const { request } = req.body;
    console.log(request);

    const changeRequest = await User.findByIdAndUpdate(
      userID,
      {
        ...(request && { request: "trues" }),
      },
      { new: true }
    );
    console.log("ggiy", changeRequest.request);

    res.status(200).json({
      data: changeRequest,
      msg: "Detail added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userID = req.userId;
    const { password } = req.body;

    let hashPassword = "";
    if (password) {
      hashPassword = await generateHashPassword(password);
    }

    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
        ...(password && { password: hashPassword }),
      },
      { new: true }
    );
    res.status(200).json({
      msg: "User updated successfully",
    });
  } catch (error) {
    res.status(400).json("Error in updating");
  }
};

export default {
  createUser,
  loginUser,
  requestforClient,
  userDetail,
  updateUser,
  updateUserbasics,
  updateUsereducation,
  updateUserfinance,
  updateUserShopping,
  updateUserlse,
  requestforClientReferal,
};
