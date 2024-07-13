"use server";

import { RequestModel } from "./request.model";
import { NextResponse } from "next/server";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    console.log("In sendEmail");

    const data = await request.json();

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`
    );

    console.log("Recaptcha Response: ", response);
    if (response.status === 200) {
      console.log("Successful Recaptcha");

      var stuff = await prisma.request.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          companyName: data.companyName,
          requestInfo: data.message,
        },
      });

      console.log("Stuff: ", stuff);

      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const text =
        "First Name: " +
        data.firstName +
        "\nLast Name: " +
        data.lastName +
        "\nCompany Name: " +
        data.companyName +
        "\n\nMessage: " +
        data.message;

      const msg = {
        to: "corey@devcontracting.com",
        from: "corey@devcontracting.com",
        subject: "Request Info",
        text: text,
      };

      sgMail.send(msg);
    }

    return NextResponse.json({ Message: "Hi" }, { status: 202 });
  } catch (error) {
    return NextResponse.json(
      { Message: "Error creating request" },
      { status: 500 }
    );
  }
}
