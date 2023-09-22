import * as React from "react";
import type { MetaFunction } from "@remix-run/node";

import Welcome from "~/src/components/Welcome";
import Dogs from "~/src/components/Dogs";
import AboutUs from "~/src/components/AboutUs";
import Layout from "~/src/Layout";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { Dog } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { dogs: Array<Dog> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    dogs: await db.dog.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    }),
  };
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return [
    {
      title: "Dogs At Home",
      // description: 'Welcome to remix!',
    },
  ];
};

// const sequelize = require("../../models/index").sequelize;

// const sequelize = new Sequelize("dogs_db", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// sequelize.authenticate();
// console.log("Connection has been established successfully.");

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const dogs = useLoaderData<LoaderData>();
  return (
    <React.Fragment>
      <Layout>
        <Welcome />
        <Dogs home_dogs={dogs} />
        <AboutUs />
      </Layout>
    </React.Fragment>
  );
}
