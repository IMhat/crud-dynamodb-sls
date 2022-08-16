const AWS = require('aws-sdk');

const updateTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { done, title, description } = JSON.parse(event.body);

    await dynamodb.update({
        TableName: 'TaskTable',
        UpdateExpression: 'set done = :done, title = :title, description = :description',
        ExpressionAttributeValues: {
            ':done': done,
            ":title": title,
            ":description": description,
        },
        ReturnValues: 'ALL_NEW'
    }).promise();

    return {
        status: 200,
        body: JSON.stringify({
            message : 'Task update successfully'
        })
    }

    

};

module.exports = {
    updateTask,
};