const e = require("express");
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
} = require("../controllers/contactController");
const router = e.Router();

//each route in the bracket router.route() specifies the function to be called from the controller file and the method for the route after /api/contact (specified in server.js)
router.route("/").get(getContacts).post(createContact);

router
  .route("/:id")
  .get(getOneContact)
  .put(updateContact)
  .delete(deleteContact);



  
router.route("/*").get((req, res) => {
  res.status(200).json({
    message: "404: No route found",
  });
}); //responds to /api/contact/sample

module.exports = router;
