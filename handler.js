exports.hello = async(event, context) => {
  console.log(`Hi from Node.js ${process.version} on Lambda!`)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hi from Node.js ${process.version} on Lambda!` })
  }
}