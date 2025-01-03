# User API Spec

## Create User

Endpoint: POST /users

Request Body:

```json
{
  "name": "Agus Heryanto",
  "email": "agusheryanto@gmail.com",
  "phone": "082262211227",
  "active_status": true,
  "department": "technology"
}
```

Response Body (Success):

```json
{
  "success": true,
  "message": "user created successfully",
  "data": {
    "name": "Agus Heryanto",
    "email": "agusheryanto@gmail.com",
    "phone": "082262211227",
    "active_status": true,
    "department": "technology"
  }
}
```

Response Body (Error):

```json
{
  "success": false,
  "message": "Validation errors",
  "errors": {
    "name": "The name field is required."
  }
}
```

## Get Users

Endpoint: GET /users

Response Body (Success):

```json
{
  "success": true,
  "message": "user fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Agus Heryanto",
      "email": "agusheryanto@gmail.com",
      "phone": "082262211227",
      "active_status": true,
      "department": "technology"
    },
    {
      "id": 2,
      "name": "Agus Heryanto1",
      "email": "agusheryanto1@gmail.com",
      "phone": "082262211227",
      "active_status": true,
      "department": "technology"
    },
    {
      "id": 3,
      "name": "Agus Heryanto2",
      "email": "agusheryanto2@gmail.com",
      "phone": "082262211227",
      "active_status": true,
      "department": "technology"
    }
  ],
  "pagging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

## Update User

Endpoint: PATCH /users/{id}

Request Body:

```json
{
  "name": "Agus Heryanto update",
  "email": "agusheryantoupdate@gmail.com",
  "phone": "082262211220",
  "active_status": true,
  "department": "technology"
}
```

Response Body (Success):

```json
{
  "success": true,
  "message": "user updated successfully",
  "data": {
    "name": "Agus Heryanto update",
    "email": "agusheryantoupdate@gmail.com",
    "phone": "082262211229",
    "active_status": true,
    "department": "technology"
  }
}
```

Response Body (Error):

```json
{
  "success": false,
  "message": "Validation errors",
  "errors": {
    "name": "The name field is required."
  }
}
```

## Delete User

Endpoint: DELETE /users/{id}

Response Body (Success):

```json
{
  "success": true,
  "message": "user deleted successfully",
  "data": {
    "name": "Agus Heryanto update",
    "email": "agusheryantoupdate@gmail.com",
    "phone": "082262211229",
    "active_status": true,
    "department": "technology"
  }
}
```

Response Body (Error):

```json
{
  "success": false,
  "message": "not found",
  "errors": "user is not found"
}
```
