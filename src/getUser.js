const AWS = require("aws-sdk");

const getUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "UserTable",
      Key: { id },
    })
    .promise();

  const user = result.Item

  return {
    body: user,
  };
};

module.exports = {
  getUser,
};