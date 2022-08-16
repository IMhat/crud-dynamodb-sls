const uuid = require("uuid");
const AWS = require("aws-sdk");

const updatePoint = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { title, description, point } = JSON.parse(event.body);

    await dynamodb
      .update({
        TableName: "PointsTable",
        Key: { id },
        UpdateExpression: "set title = :title, description = :description, point =:point",
        ExpressionAttributeValues: {
          ":title": title,
          ":description": description,
          ":point": point,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      body: JSON.stringify({
        message: "Point updated",
      }),
    };
  };

  module.exports = {
    updatePoint,
  };