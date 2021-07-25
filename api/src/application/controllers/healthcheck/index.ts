export default class HealthcheckController {
  ready(req, res) {
    res.json({status: "ok"});
  }
}
