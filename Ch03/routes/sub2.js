const express = require("express");
const router = express.Router();

router.get("/cookie", (req, res) => {
  const user = {
    uid: "a101",
    name: "홍길동",
    hp: "010-1234-1001",
    age: 21,
  };

  //쿠키 만들기(key, value)
  res.cookie("user", user);

  res.render("sub2/cookie");
});

router.get("/cookieResult", (req, res) => {
  res.render("sub2/cookieResult", req.cookies.user);
});

router.get("/session", (req, res) => {
  const user = {
    uid: "a101",
    name: "홍길동",
    hp: "010-1234-1001",
    age: 21,
  };

  //세션 만들기
  req.session.user = user;

  res.render("sub2/session");
});

router.get("/sessionResult", (req, res) => {
  res.render("sub2/sessionResult", req.session.user);
});

router.get("/cookieClear", function (req, res) {
  res.clearCookie("user");
  res.redirect("/");
});
router.get("/sessionClear", function (req, res) {
  req.session.destroy(function () {
    req.sesison;
  });
  res.redirect("/");
});

module.exports = router;
