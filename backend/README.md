# API Documentation

## User Registration

### POST /users/register

Register a new user in the system.

#### Request Body

```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string" // minimum 3 characters (optional)
  },
  "email": "string", // valid email format, minimum 5 characters
  "password": "string" // minimum 6 characters
}
```

#### Validation Rules

- `fullname.firstname`: Required, minimum 3 characters
- `email`: Required, must be a valid email format, minimum 5 characters
- `password`: Required, minimum 6 characters
- `fullname.lastname`: Optional, but if provided must be minimum 3 characters

#### Success Response

**Code**: 201 Created

**Response Body**:

```json
{
  "token": "string", // JWT authentication token
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
    // Other user fields (password excluded)
  }
}
```

#### Error Responses

**Code**: 400 Bad Request

_When validation fails:_

```json
{
  "error": [
    {
      "msg": "string", // Error message
      "param": "string", // Field that failed validation
      "location": "body"
    }
  ]
}
```

_When required fields are missing:_

```json
{
  "error": "All field are required"
}
```

#### Example Request and Response

**Request Example**:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Success Response Example**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "5f7c3b5d9d3e2a1b3c8f4a9b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

**Error Response Example** (Invalid Email):

```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body",
      "value": "invalid-email"
    }
  ]
}
```

**Error Response Example** (Short Password):

```json
{
  "error": [
    {
      "msg": "password name must be 3 Character Long",
      "param": "password",
      "location": "body",
      "value": "123"
    }
  ]
}
```

#### Notes

- The password is automatically hashed before storing
- A JWT token is generated and returned upon successful registration
- Email addresses must be unique in the system

## User Login

### POST /users/login

Authenticate an existing user and return a JWT token plus the user object.

#### Request Body

```json
{
  "email": "string", // valid email format
  "password": "string" // minimum 6 characters
}
```

#### Validation Rules

- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

#### Success Response

**Code**: 200 OK

**Response Body**:

```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": null
  }
}
```

#### Error Responses

- **400 Bad Request** — validation errors (same format as registration validation errors)
- **400 Bad Request** — invalid credentials (login failed)

Example invalid credentials response (implementation returns a 400 with message):

```json
{
  "error": "Invalid email or password"
}
```

#### Example Request and Response

**Request Example**:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Success Response Example**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "5f7c3b5d9d3e2a1b3c8f4a9b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

**Error Response Example** (Invalid credentials):

```json
{
  "error": "Invalid email or password"
}
```

## User Logout

### GET /users/logout

Logs out the authenticated user by clearing the `token` cookie and recording the JWT in a blacklist collection so it cannot be reused. The blacklist documents expire after 86400 seconds (24 hours) as implemented in `models/blacklistToken.model.js`.

#### Behavior

- Route is protected by `authUser` middleware — a valid token (cookie or Authorization header) is required.
- The controller clears the cookie `token` and also reads the token from `req.cookies.token` or the `Authorization: Bearer <token>` header and stores it in the `BlacklistToken` collection.
- Success response is HTTP 200 with a message confirming logout.

#### Success Response

**Code**: 200 OK

**Response Body**:

```json
{
  "message": "Logout successful"
}
```

#### Error Responses

- **401 Unauthorized** — when the request does not include a valid token (enforced by `authUser` middleware)
- **500 Internal Server Error** — if storing the blacklist record fails (e.g. DB error)

#### Example Request

Using Authorization header:

```
GET /users/logout
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Or send cookie (client/browser):

```
GET /users/logout (cookie header sent by browser: cookie: token=<jwt>)
```

#### Example Success Response

```json
{
  "message": "Logout successful"
}
```

## Captain Registration

### POST /captain/registerCaptain

Register a new captain (driver) in the system with vehicle details.

#### Request Body

```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string" // optional
  },
  "email": "string", // valid email format
  "password": "string", // minimum 6 characters
  "licenseNumber": "string", // required
  "phoneNumber": "string", // required
  "vechile": {
    "color": "string", // minimum 3 characters
    "platenumber": "string", // required
    "capacity": "number", // minimum 1
    "vechiletype": "string" // must be one of: "bike", "car", "auto"
  }
}
```

#### Validation Rules

- `fullname.firstname`: Required, minimum 3 characters
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters
- `licenseNumber`: Required
- `phoneNumber`: Required
- `vechile.color`: Required, minimum 3 characters
- `vechile.platenumber`: Required
- `vechile.capacity`: Required, must be an integer ≥ 1
- `vechile.vechiletype`: Required, must be one of: "bike", "car", "auto"

#### Example Request

```json
{
  "fullname": {
    "firstname": "James",
    "lastname": "Wilson"
  },
  "email": "james.wilson@example.com",
  "password": "securePass123",
  "licenseNumber": "DL98765432",
  "phoneNumber": "+1234567890",
  "vechile": {
    "color": "Silver",
    "platenumber": "XY-123-ABC",
    "capacity": 4,
    "vechiletype": "car"
  }
}
```

#### Success Response

**Code**: 201 Created

**Response Body**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "5f7c3b5d9d3e2a1b3c8f4a9b",
    "fullname": {
      "firstname": "James",
      "lastname": "Wilson"
    },
    "email": "james.wilson@example.com",
    "licenseNumber": "DL98765432",
    "phoneNumber": "+1234567890",
    "vechile": {
      "color": "Silver",
      "platenumber": "XY-123-ABC",
      "capacity": 4,
      "vechiletype": "car"
    }
  }
}
```

#### Error Response

**Code**: 400 Bad Request

_When validation fails:_

```json
{
  "error": [
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

_Examples of other validation errors:_

```json
{
  "error": [
    {
      "msg": "Invalid vehicle type",
      "param": "vechile.vechiletype",
      "location": "body",
      "value": "truck"
    }
  ]
}
```

#### Notes

- All vehicle types must be one of: "bike", "car", "auto"
- Vehicle capacity must be a positive integer
- The password is automatically hashed before storing
- A JWT authentication token is generated upon successful registration
- Email addresses must be unique in the system

## Routes & Controllers

- **User routes**: backend/routes/user.routes.js

  - POST `/register` -> controllers/user.controller.js (validation: email, fullname.firstname, password)
  - POST `/login` -> controllers/user.controller.js (validation: email, password)
  - GET `/profile` -> controllers/user.controller.js (protected by `authUser` middleware)
  - GET `/logout` -> controllers/user.controller.js (protected by `authUser`, blacklists token)

- **Captain routes**: backend/routes/captain.routes.js

  - POST `/registerCaptain` -> controllers/captain.controller.js (validation: fullname.firstname, email, password, licenseNumber, phoneNumber, vechile.\*)
  - POST `/loginCaptain` -> controllers/captain.controller.js (validation: email, password)
  - GET `/captainProfile` -> controllers/captain.controller.js (protected by `authCaptain` middleware)
  - GET `/logoutCaptain` -> controllers/captain.controller.js (protected by `authCaptain`, blacklists token)

- **Middlewares**:
  - `authUser` (backend/middlewares/auth.middleware.js) — verifies JWT from cookie `token` or `Authorization: Bearer <token>` header; checks blacklist collection before allowing access.
  - `authCaptain` (backend/middlewares/auth.middleware.js`) — same behavior for captain tokens.

Notes:

- Route validation is implemented using `express-validator` in the route definitions.
- Blacklisted tokens are stored in `models/blacklistToken.model.js` to prevent reuse after logout.
