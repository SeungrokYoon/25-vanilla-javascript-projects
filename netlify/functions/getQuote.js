require("dotenv").config();

exports.handler = async (event, context) => {
  const url = "https://api.api-ninjas.com/v1/quotes?category=love";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.API_NINJAS_KEY,
      },
    });
    const resData = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(resData),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error }) };
  }
};
