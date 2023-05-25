const express = require("express");
const router = express.Router();

router.get("/get1", (req, res) => {
  const uid = req.query.uid;
  res.render("sub1/get1", { uid: uid });
});

router.get("/get2", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  const data = {
    name: name,
    age: age,
  };

  res.render("sub1/get2", data);
});

router.get("/post1", function (req, res) {
  res.render("sub1/post1");
});

router.post("/post1Result", function (req, res) {
  res.render("sub1/post1Result", req.body);
});

router.get("/post2", function (req, res) {
  res.render("sub1/post2");
});

router.post("/post2Result", function (req, res) {
  res.render("sub1/post2Result", req.body);
});

module.exports = router;
