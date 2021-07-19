'use strict';

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');

// This array is used to keep track of user records
// as they are created.
const users = [];
const moneyForMinecraftServer = {
  progress: 12.20,
  goal: 36.90
};

/**
 * Middleware to authenticate the request using Basic Authentication.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {Function} next - The function to call to pass execution to the next middleware.
 */
const authenticateUser = (req, res, next) => {
  let errorMessage = null;
  const credentials = auth(req);
  if (credentials) {
    console.log(users);
  } else {
    console.log('nah man');
  }
  console.log(credentials);
  // console.log(req);
  // next();
};

// Construct a router instance.
const router = express.Router();

// Route that returns the current authenticated (if authenticated (notice authenticateUser param)) user.
router.get('/users', authenticateUser, (req, res) => {
  const user = req.currentUser;

  res.json({
    name: user.name,
    username: user.username,
  });
});

// Imię,
// Nazwa użytkownika,
// email,
// hasło,
// powtórz hasło

// const user = users.find(u => u.username === credentials.name);

const validationChain = [
  check('name')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Proszę, podaj swoje imię : name')
    .isByteLength({min: 3, max: 16})
    .withMessage('Proszę, podaj poprawne imię : name'),
  check('username')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Proszę, podaj nazwę użytkownika : username')
    .isByteLength({min: 3, max: 16})
    .withMessage('Proszę, podaj poprawną nazwę użytkownika : username')
    .custom(value => {
      const user = users.find(u => u.username === value);
      // checking if username exists
      if (user) {
        throw new Error();
      } else {
        return true;
      }
    })
    .withMessage('Nazwa użytkownika jest niedostępna : username'),
  check('email')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Proszę, podaj swój email : email')
    .isEmail()
    .withMessage('Proszę, podaj poprawny email : email')
    .custom(value => {
      const email = users.find(u => u.email === value);
      // checking if email exists
      if (email) {
        throw new Error();
      } else {
        return true;
      }
    })
    .withMessage('Ten email jest niedostępny : email'),
  check('password')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Proszę, podaj swoje hasło : password')
    .isByteLength({min: 6, max: 32})
    .withMessage('Proszę, podaj poprawne hasło 6-32 znaków : password'),
  check('confirmedPassword')
    .custom((value, {req, loc, path}) => {
      if (value !== req.body.password) {
        throw new Error();
      } else {
        return true;
      }
    })
    .withMessage('Hasła się nie zgadzają : confirmedPassword')
]

// Route that creates a new user.
router.post('/users', validationChain, (req, res) => {
  // Attempt to get the validation result from the Request object.
  const errors = validationResult(req);

  // If there are validation errors...
  if (!errors.isEmpty()) {
    // Use the Array `map()` method to get a list of error messages.
    const errorMessages = errors.array().map(error => error.msg);

    // Return the validation errors to the client.
    return res.status(400).json({ errors: errorMessages });
  }

  // Get the user from the request body.
  const user = req.body;

  // Hash the new user's password.
  user.password = bcryptjs.hashSync(user.password);

  // Add the user to the `users` array.
  users.push(user);

  // Set the status to 201 Created and end the response.
  return res.status(201).end();
});

// Route for getting info about progress bar

router.get('/minecraft-progress-bar', (req, res) => {
  res.json({
    moneyForMinecraftServer
  });
});

router.get('/users', authenticateUser, (req, res) => {
  const user = req.currentUser;

  res.json({
    name: user.name,
    username: user.username,
  });
});

module.exports = router;
