const router = require("express").Router();
const eventsRoutes = require("./events");
const rsvpRoutes = require("./rsvp");
const registryRoutes = require("./registry");
const loginRoute = require("./login");


// Book routes
router.use("/events", eventsRoutes);
router.use("/rsvp", rsvpRoutes);
router.use("/registry", registryRoutes);
router.use("/login", loginRoute);

module.exports = router;
