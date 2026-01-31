const express = require("express");
const router = express.Router();
const {getContacts} = require("../controllers/contactController");
const {createContact} = require("../controllers/contactController");
const {getContact} = require("../controllers/contactController");
const {updateContact} = require("../controllers/contactController");
const {deleteContact} = require("../controllers/contactController");

//GET + Create
router.route("/").get(getContacts).post(createContact);
//by id GET + PUT + DELETE
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;