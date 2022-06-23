function printRequest(req, res) {
  console.log('printRequest', JSON.stringify(req.body));
  return res.status(200).send({});
}
module.exports = {
  printRequest,
};