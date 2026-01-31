const express = require("express");
const router = express.Router();
const {getContacts} = require("../controllers/contactcontroller");
const {createContact} = require("../controllers/contactcontroller");
const {getContact} = require("../controllers/contactcontroller");
const {updateContact} = require("../controllers/contactcontroller");
const {removeContact} = require("../controllers/contactcontroller");

//GET + Create
router.route("/").get(getContacts).post(createContact);
//by id GET + PUT + DELETE
router.route("/:id").get(getContact).put(updateContact).delete(removeContact);


module.exports = router;