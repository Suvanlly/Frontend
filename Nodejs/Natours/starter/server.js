const dotenv = require('dotenv');
// environment variable
dotenv.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

// Start Server
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
