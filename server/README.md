## SERVER

Backend do serviço de gestão financeira.

### Endpoits:

- Auth
- earnings
- expenses
- recurring
- status
- tag

### Modo de Uso

#### Controller: `Auth`

- method: `POST`
- url: `/register`

  ```json
    {
        "username": "user.test",
        "password": "user_pass_test"
    }
  ```
- method: `POST`
- url: `/login`
- headers: `Authorization: Bearer`

  ```json
  {
      "username": "user.test",
      "password": "user_pass_test"
  }
  ```

#### Controller: `earnings`

- method: `POST`
- headers: `Authorization: Bearer`
  ```json
  {
      "description": "FIRST",
      "value": 300,
      "userId": 1,
      "tagId": 1
  }
  ```

#### Controller: `expenses`

- method: `POST`
- headers: `Authorization: Bearer`
  ```json
  {
      "description": "segunda despesa",
      "value": 300.00,
      "statusId": 1,
      "userId": 1,
      "tagId": 1,
      "deadline": "2025-11-06T14:00:00.000z"
  }
  ```

#### Controller: `recurring`

- method: `POST`
- headers: `Authorization: Bearer`
  ```json
  {
      "type": "earning",
      "recurring": "DAILY",
      "range_days": 1,
      "earningsId": 2
  }
  ```

#### Controller: `status`

- method: `POST`
- headers: `Authorization: Bearer`
  ```json
  {
      "description": "FINISHED"
  }
  ```

#### Controller: `tag`

- method: `POST`
- headers: `Authorization: Bearer`
  ```json
  {
      "description": "HOME"
  }
  ```
