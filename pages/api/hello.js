// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import React from "react";
import sendMail from "../../emails";
import Custom from "../../emails/Custom";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function handler(req, res) {
  // return sendMail({
  //   to: "vishalsingh9632@gmail.com",
  //   subject: "My first mail",
  //   component: <AccountCreated name="vishal singh" />,
  // });
  res.status(200).json({
    name: "John Doe",
    html: reactElementToJSXString(
      <div a="1" b="2">
        Hello, world!
      </div>
    ),
  });
  // .json({ name: "John Doe", html: <Custom name="vishal singh" /> });
}
