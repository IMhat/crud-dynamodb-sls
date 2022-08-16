const uuid = require("uuid");
const AWS = require("aws-sdk");

const deletePoint = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
      .delete({
        TableName: "PointsTable",
        Key: { id },
      })
      .promise();

    return {
      body: {
        message: "Point deleted",
      },
    };
  };

  module.exports = {
    deletePoint,
  };