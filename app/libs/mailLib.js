"use strict";
const nodemailer = require("nodemailer");
const appConfig = require("../../config/appConfig");

let signUpMail = (email, fullName) => {
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: appConfig.email, // generated ethereal user
        pass: appConfig.password, // generated ethereal password
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Tridib Chatterjee ❤️" <tridibc2@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Welcome to TODO Application ✔", // Subject line
      text: `Hello ${fullName}`, // plain text body
      html: `<html>

            <head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <style>
                    * {
                        letter-spacing: 1px;
                        font-family: 'Montserrat', arial;
                    }
                    .body{
                       
                        color: lightslategrey;
                    }
                    
                    .container{
                        margin-left: 15%;
                        margin-right: 15%;
            
                    }
                    .header{
                        padding-top: 10%;
                        margin: 0px auto;
                        text-align: center;
                        color: lightslategrey;
                    }
                    .card {
                            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                            border-radius: 2px;
                            display: inline-block;
                            height: 300px;
                            position: relative;
                            width: 100%;
                            }
            
                     .card-1 {
                            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                            }
            
                    .card-1 h3 {
                            color: black;
                            }
            
                            .text-center{
                                text-align: center;
                            }
                            p{
                                color: black;
                                font-weight: 500;
                            }
                            .footer-x{
                                text-align: center;
                                background-color: white;
                                border-top: solid 3px  lightslategrey;
                            }
                       @media screen and (max-width: 768px) {
            
                            .container{
                                    margin-left: 0px;
                                    margin-right: 0px;
                                }
            
                            }
            
                </style>
            </head>
            
            <body style="margin:0">
                <div>
                    <div class="container">
                        <h1 class="header">ToDo Application</h1>
                        <br>
                        <br>
                        <br>
                        <div class="card card-1">
                            <h3 class="header"> Welcome!!!</h3>
                            <br>
                            <p class="text-center">Hey ${fullName}, all the best for your journey with us ahead.</p>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                
                <div class="footer-x">
                    <p>Copyright©</p>
                </div>
            </body>
            
            </html>`, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};

// mail for forgot password
let forgotPasswordMail = (email, userId) => {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: appConfig.email, // generated ethereal user
        pass: appConfig.password, // generated ethereal password
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Tridib Chatterjee ❤️" <tridibc2@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Change Password", // Subject line
      text: `Hello `, // plain text body
      html: `<html>

            <head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <style>
                    * {
                        letter-spacing: 1px;
                        font-family: 'Montserrat', arial;
                    }
                    .body{
                       
                        color: lightslategrey;
                    }
                    
                    .container{
                        margin-left: 15%;
                        margin-right: 15%;
            
                    }
                    .header{
                        padding-top: 10%;
                        margin: 0px auto;
                        text-align: center;
                        color: lightslategrey;
                    }
                    .card {
                            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                            border-radius: 2px;
                            display: inline-block;
                            height: 300px;
                            position: relative;
                            width: 100%;
                            }
            
                     .card-1 {
                            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                            }
            
                            .card-1 h3 {
                                color: black;
                                }
                
                                .text-center{
                                    text-align: center;
                                }
                                p{
                                    color: black;
                                    font-weight: 500;
                                }
                            .footer-x{
                                text-align: center;
                                background-color: white;
                                border-top: solid 3px  lightslategrey;
                            }
                       @media screen and (max-width: 768px) {
            
                            .container{
                                    margin-left: 0px;
                                    margin-right: 0px;
                                }
            
                            }
            
                </style>
            </head>
            
            <body style="margin:0">
                <div>
                    <div class="container">
                        <h1 class="header">ToDo Application</h1>
                        <br>
                        <br>
                        <br>
                        <div class="card card-1">
                            <h3 class="header"> CHANGE PASSWORD</h3>
                            <br>
                            <p class="text-center">Don't worry! We got your back. Please click on the <a href="http://tridibchatterjee.xyz/change-password/${userId}">Link</a> to change your password.</p>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                
                <div class="footer-x">
                    <p>Copyright©</p>
                </div>
            </body>
            
            </html>`, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};

// mail for forgot password
let invitationEmail = (userId, name, email) => {
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: false, // true for 465, false for other ports
      auth: {
        user: appConfig.email,
        pass: appConfig.password,
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Tridib Chatterjee ❤️" <tridibc2@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Invitaion Mail", // Subject line
      text: `Hello`, // plain text body
      html: `<html>

            <head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <style>
                    * {
                        letter-spacing: 1px;
                        font-family: 'Montserrat', arial;
                    }
                    .body{
                       
                        color: lightslategrey;
                    }
                    
                    .container{
                        margin-left: 15%;
                        margin-right: 15%;
            
                    }
                    .header{
                        padding-top: 10%;
                        margin: 0px auto;
                        text-align: center;
                        color: lightslategrey;
                    }
                    .card {
                            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                            border-radius: 2px;
                            display: inline-block;
                            height: 300px;
                            position: relative;
                            width: 100%;
                            }
            
                     .card-1 {
                            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                            }
            
                            .card-1 h3 {
                                color: black;
                                }
                
                                .text-center{
                                    text-align: center;
                                }
                                p{
                                    color: black;
                                    font-weight: 500;
                                }
                            .footer-x{
                                text-align: center;
                                background-color: white;
                                border-top: solid 3px  lightslategrey;
                            }
                       @media screen and (max-width: 768px) {
            
                            .container{
                                    margin-left: 0px;
                                    margin-right: 0px;
                                }
            
                            }
            
                </style>
            </head>
            
            <body style="margin:0">
                <div>
                    <div class="container">
                        <h1 class="header">ToDo Application</h1>
                        <br>
                        <br>
                        <br>
                        <div class="card card-1">
                            <h3 class="header"> Invitation Mail</h3>
                            <br>
                            <p class="text-center">${name} wants you to checkout <a href="http://tridibchatterjee.xyz/sign-up?userId=${userId}">ToDo</a> app.</p>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                
                <div class="footer-x">
                    <p>Copyright©</p>
                </div>
            </body>
            
            </html>`, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};

module.exports = {
  signUpMail: signUpMail,
  forgotPasswordMail: forgotPasswordMail,
  invitationEmail: invitationEmail,
};
