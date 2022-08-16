const uuid = require("uuid");
const AWS = require("aws-sdk");

const updateUser = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { username, email } = JSON.parse(event.body);

    await dynamodb
      .update({
        TableName: "UserTable",
        Key: { id },
        UpdateExpression: "set username = :username, email = :email",
        ExpressionAttributeValues: {
          ":username": username,
          ":email": email,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      body: JSON.stringify({
        message: "user updated",
      }),
    };
  };

  module.exports = {
    updateUser,
  };