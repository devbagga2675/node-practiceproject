const asyncHandler = require('express-async-handler');

// whenevr we create api methods we need to give labels to them

// @desc Get all contacts
// @route GET /api/contact
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get all contacts",
  });
}); //asynHandler MIDDLEWARE automatically implements the try catch block and handles the exceptions.

// @desc create contacts
// @route POST /api/contact
//@access public
const createContact = asyncHandler(async (req, res) => {
  //set status according to conditions using res.status()
  //res.json sends data in json format
  console.log("Body is", req.body);// req.body gets data sent in the request. Middleware express.json() parses the data to json for us.
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  } // whenever such an error is thrown, the erro handling middleware is used
  else
  {res.status(200).json({
    message: "Create contact",
  });}
});

// @desc get one contacts
// @route GET /api/contact/:id
//@access public
const getOneContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `get contact for id ${req.params.id}`,
  });
});

// @desc update contacts
// @route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update contact for id ${req.params.id}`,
  });
});

// @desc delete contacts
// @route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete contact for id ${req.params.id}`,
  });
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
};
