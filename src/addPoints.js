const { v4 } = require("uuid");
const AWS = require("aws-sdk");


const addPoints = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { title, description, point } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const newPoint = {
    id,
    title,
    description,
    point,
    createdAt
  };

  await dynamodb
    .put({
      TableName: "PointsTable",
      Item: newPoint,
    }).promise()

  return {
    body: JSON.stringify(newPoint)
  }
};

module.exports = {
    addPoints,
};