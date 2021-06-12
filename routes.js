const express = require("express");
const query = require("./controller/routerController.js");

const router = express.Router();

//get all infos from routes
router.get("/", (req, res) => {
  res.send("MSD Challenge");
});

router.get("/infoVendaCota", async (req, res) => {
  const response = await query("infoVendaCota");
  res.json(response);
});
router.get("/realizadoXcotaFamilia", async (req, res) => {
  const response = await query("realizadoXcotaFamilia");
  res.json(response);
});
router.get("/realizadoXcotaVendedor", async (req, res) => {
  const response = await query("realizadoXcotaVendedor");
  res.json(response);
});
router.get("/realizadoXcotaVendedorMes", async (req, res) => {
  const response = await query("realizadoXcotaVendedorMes");
  res.json(response);
});
router.get("/realizadoClientePeriodo", async (req, res) => {
  const response = await query("realizadoClientePeriodo");
  res.json(response);
});
router.get("/qntVisitasUnidadeMes", async (req, res) => {
  const response = await query("qntVisitasUnidadeMes");
  res.json(response);
});
router.get("/qntVisitasNaoConcluidasMes", async (req, res) => {
  const response = await query("qntVisitasNaoConcluidasMes");
  res.json(response);
});
router.get("/qntVisitasMes", async (req, res) => {
  const response = await query("qntVisitasMes");
  res.json(response);
});
router.get("/qntVisitasNaoConcluidasVendedor", async (req, res) => {
  const response = await query("qntVisitasNaoConcluidasVendedor");
  res.json(response);
});
router.get("/infoPlanejamentoProxVisitasStatus", async (req, res) => {
  const response = await query("infoPlanejamentoProxVisitasStatus");
  res.json(response);
});
router.get(
  "/saberAtiviNaoRelacionadasComVisitaMesVendedor",
  async (req, res) => {
    const response = await query(
      "saberAtiviNaoRelacionadasComVisitaMesVendedor"
    );
    res.json(response);
  }
);
router.get("/estoque", async (req, res) => {
  const response = await query("estoque");
  res.json(response);
});

module.exports = router;
