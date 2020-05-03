exports.handler = function(event, context, callback) {
  const parsedBody = JSON.parse(event.body);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(parsedBody)
});
}