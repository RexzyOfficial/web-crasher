exports.handler = async function (event, context) {
  const { type, target } = event.queryStringParameters || {};

  if (!target) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Nomor target kosong" }),
    };
  }

  let message = "";
  if (type === "fc") {
    message = `Forclose berhasil ke ${target}`;
  } else if (type === "fcin") {
    message = `Force Invis berhasil ke ${target}`;
  } else if (type === "delay") {
    message = `Delay berhasil ke ${target}`;
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Tipe tidak dikenali" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message }),
  };
};
