const router = require("express").Router();
const eventsRoutes = require("./events");
const rsvpRoutes = require("./rsvp");
const registryRoutes = require("./registry");
const userRoute = require("./user");
// const newUserRoute = require("./")

// Book routes
router.use("/events", eventsRoutes);
router.use("/rsvp", rsvpRoutes);
router.use("/registry", registryRoutes);
router.use("/login", userRoute);
router.use("/register", userRoute);

module.exports = router;
