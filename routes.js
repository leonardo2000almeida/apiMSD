const express = require("express");
const query = require("./controller/routerController.js");

const router = express.Router();

//get all infos from routes
router.get("/", (req, res) => {
  res.send("MSD Challenge");
});

router.get("/infoVendaCota", (req, res) => {
  query("infoVendaCota");
});
router.get("/realizadoXcotaFamilia", (req, res) => {
  query("realizadoXcotaFamilia");
});
router.get("/realizadoXcotaVendedor", (req, res) => {
  query("realizadoXcotaVendedor");
});
router.get("/realizadoXcotaVendedorMes", (req, res) => {
  query("realizadoXcotaVendedorMes");
});
router.get("/realizadoClientePeriodo", (req, res) => {
  query("realizadoClientePeriodo");
});
router.get("/qntVisitasUnidadeMes", (req, res) => {
  query("qntVisitasUnidadeMes");
});
router.get("/qntVisitasNaoConcluidasMes", (req, res) => {
  query("qntVisitasNaoConcluidasMes");
});
router.get("/qntVisitasMes", (req, res) => {
  query("qntVisitasMes");
});
router.get("/qntVisitasNaoConcluidasVendedor", (req, res) => {
  query("qntVisitasNaoConcluidasVendedor");
});
router.get("/infoPlanejamentoProxVisitasStatus", (req, res) => {
  query("infoPlanejamentoProxVisitasStatus");
});
router.get("/saberAtiviNaoRelacionadasComVisitaMesVendedor", (req, res) => {
  query("saberAtiviNaoRelacionadasComVisitaMesVendedor");
});
router.get("/estoque", (req, res) => {
  res.send((query("estoque")));
});

module.exports = router;
