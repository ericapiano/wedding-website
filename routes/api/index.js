const router = require("express").Router();
const eventsRoutes = require("./events");
const rsvpRoutes = require("./rsvp");
const registryRoutes = require("./registry");


// Book routes
router.use("/events", eventsRoutes);
router.use("/rsvp", rsvpRoutes);
router.use("/registry", registryRoutes);

module.exports = router;
