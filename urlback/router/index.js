import express from "express";
const router = express.Router();

router.get("/", (res, req) => {
  res.setEncoding("hello world");
});

export default router;
