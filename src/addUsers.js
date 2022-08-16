const { v4 } = require("uuid");
const AWS = require("aws-sdk");


const addUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { username, email } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const newUser = {
    id,
    username,
    email,
    createdAt,
    points
  };

  await dynamodb
    .put({
      TableName: "UserTable",
      Item: newUser,
    }).promise()

  return {
    body: JSON.stringify(newUser)
  }
};
module.exports = {
    addUser,
};