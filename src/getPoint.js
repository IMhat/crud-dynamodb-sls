const AWS = require("aws-sdk");

const getPoint = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "PointsTable",
      Key: { id },
    })
    .promise();

  const point = result.Item

  return {
    body: point,
  };
};

module.exports = {
    getPoint,
};