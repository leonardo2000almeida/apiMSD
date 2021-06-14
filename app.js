const express = require("express");
const router = require("./routes");

const app = express();
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at door ${process.env.PORT || 3000}`);
});
