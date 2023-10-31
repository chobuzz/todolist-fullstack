//몽고디비 불러오기, 스키마 설정
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//userSchema 생성해주기 Schema = 작업지시서
const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// 어디서 유저정보를 요청하던 pasword정보 지워주기
userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  delete obj.updatedAt;
  delete obj.createdAt;
  delete obj.__v;
  return obj;
};

//token생성
userSchema.methods.generateToken = function () {
  try {
    const token = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    throw error;
  }
};

// 모델 만들기
const User = mongoose.model("User", userSchema);

module.exports = User;
