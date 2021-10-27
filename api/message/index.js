module.exports = async function (context, req) {
    console.log("here 1");
    context.res.json({
        text: "Hello from the API"
    });
}