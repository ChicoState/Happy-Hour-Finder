import { gql } from "@apollo/client";
const createUser = gql `mutation {
    createUser(
      email: "test3@gmail.com",
      password: "testuser123",
      username:"testtest32") {
      user 
      message
    }
  } `