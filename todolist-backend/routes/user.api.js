//express 서버, 라우터 생성
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

// 회원가입 endpoint
router.post("/", userController.createUser);
//로그인 정보는 get에 가깝다는 생각이 들지만, url설정을 유저의 아이디로
//하고싶지 않기 때문에 post를 사용한다.
//그리고 get은 req,res를 이용해 정보를 주고받지는 못한다.
router.post("/login", userController.loginWithEmail);

//토큰을 통해 유저 id빼내고 → 그 아이디로 유저 객체 찾아서 보내주기
router.get("/me", authController.authenticate, userController.getUser);
module.exports = router;
