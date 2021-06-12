const express = require("express");
const query = require("./controller/routerController.js");

const router = express.Router();

//get all infos from routes
router.get("/", (req, res) => {
  res.send("MSD Challenge");
});

router.get("/infoVendaCota", async (req, res) => {
  res.send(query("infoVendaCota"));
});
router.get("/realizadoXcotaFamilia", async (req, res) => {
  res.send(query("realizadoXcotaFamilia"));
});
router.get("/realizadoXcotaVendedor", async (req, res) => {
  res.send(query("realizadoXcotaVendedor"));
});
router.get("/realizadoXcotaVendedorMes", async (req, res) => {
  res.send(query("realizadoXcotaVendedorMes"));
});
router.get("/realizadoClientePeriodo", async (req, res) => {
  res.send(query("realizadoClientePeriodo"));
});
router.get("/qntVisitasUnidadeMes", async (req, res) => {
  res.send(query("qntVisitasUnidadeMes"));
});
router.get("/qntVisitasNaoConcluidasMes", async (req, res) => {
  res.send(query("qntVisitasNaoConcluidasMes"));
});
router.get("/qntVisitasMes", async (req, res) => {
  res.send(query("qntVisitasMes"));
});
router.get("/qntVisitasNaoConcluidasVendedor", async (req, res) => {
  res.send(query("qntVisitasNaoConcluidasVendedor"));
});
router.get("/infoPlanejamentoProxVisitasStatus", async (req, res) => {
  res.send(query("infoPlanejamentoProxVisitasStatus"));
});
router.get(
  "/saberAtiviNaoRelacionadasComVisitaMesVendedor",
  async (req, res) => {
    res.send(query("saberAtiviNaoRelacionadasComVisitaMesVendedor"));
  }
);
router.get("/estoque", async (req, res) => {
  res.send(query("estoque"));
});

module.exports = router;
