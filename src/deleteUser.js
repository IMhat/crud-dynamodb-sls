const uuid = require("uuid");
const AWS = require("aws-sdk");

const deleteUser = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
      .delete({
        TableName: "UserTable",
        Key: { id },
      })
      .promise();

    return {
      body: {
        message: "User deleted",
      },
    };
  };

  module.exports = {
    deleteUser,
  };