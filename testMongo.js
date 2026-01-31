require('mongoose').connect(
  'mongodb+srv://vrencianlilla_db_user:task@cluster0.vemf4wc.mongodb.net/mycontacts-backend?retryWrites=true&w=majority'
).then(() => {
  console.log('✅ Connected to MongoDB');
  process.exit();
}).catch((err) => {
  console.error('❌ Connection failed:', err.message);
  process.exit(1);
});
