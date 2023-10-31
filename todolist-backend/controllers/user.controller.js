const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {};

userController.createUser = async (req, res) => {
  try {
    //프론트 엔드에서 정보 받아오기
    const { email, name, password } = req.body;
    // // 필수 필드인지 확인
    // if (!email || !name || !password) {
    //   throw "이메일, 이름, 또는 비밀번호가 누락되었습니다";
    // }
    //이미 가입된 유저인지 체크, eamil => email:email (자바 스크립트 문법)
    const user = await User.findOne({ email });
    if (user) {
      throw "이미 가입이 된 유저 입니다";
    }
    //패스워드 암호화(bcrypt 라이브러리(npm 다운 받아야함))
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log("hash", hash);
    const newUser = new User({ email, name, password: hash });
    await newUser.save();
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

userController.loginWithEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, "-createdAt -updatedAt -__v");
    if (user) {
      // req에서 보낸 비밀번호와 디비에 암호화된 비밀번호 비교
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        //토큰 발행하기
        const token = user.generateToken();
        console.log("token", token);
        console.log("user", user);
        return res.status(200).json({ status: "success", user, token });
      }
    }
    throw new Error("아이디 또는 비밀번호가 일치하지 않습니다");
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

userController.getUser = async (req, res) => {
  try {
    const { userId } = req; //또는 req.userId
    // console.log("userid", userId);
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("can not find user");
    }
    res.status(200).json({ status: "success", user });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

module.exports = userController;
