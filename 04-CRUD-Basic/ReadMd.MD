

## 📌 **Client Side (React Component)**

### `Users` Component:

✅ **Purpose**: Display users, add new users, and delete users — all with **real-time client-side updates**.

### 🔹 State Management:

* `users`: local state array to store users fetched from the server.

### 🔹 `useEffect`:

* On mount (or when `userPromise` changes), fetch users using `userPromise.then(data => setUsers(data))`.

### 🔹 `handleAddUser`:

1. Form submit handler.
2. Creates a new user object: `{ name, email }`.
3. Sends a **POST** request to `http://localhost:3000/users`.
4. On success:

   * If `data.insertedId` exists:

     * Adds the new user to local state (`setUsers([...users, NewUser])`).
     * Alerts success.
     * Resets the form.

### 🔹 `handleDelete`:

1. Handles deleting a user by `_id`.
2. Sends a **DELETE** request to `http://localhost:3000/users/${_id}`.
3. On success:

   * Checks `data.deletedCount > 0`.
   * Removes user from local state (`setUsers(users.filter(...))`).

### 🔹 UI:

* Displays total users count (`users.length`).
* Form for adding users.
* List of users with delete button.

---

## 📌 **Server Side (Express + MongoDB)**

### General:

✅ **Purpose**: Provides a REST API to **Create**, **Read**, and **Delete** users.
✅ **Uses**:

* **Express** for routing.
* **CORS** and **JSON** parsing middleware.
* **MongoDB** (with `MongoClient` and `ObjectId`).

---

### 🔹 MongoDB Setup:

* Connection URI with username/password.
* Database: `userDB`.
* Collection: `users`.

---

### 🔹 API Endpoints:

1. **GET `/users`**

   * Fetch all users from the `users` collection.
   * Send as an array to the client.

2. **POST `/users`**

   * Accepts JSON `{ name, email }`.
   * Inserts new user into `users` collection.
   * Responds with insertion result (`insertedId`).

3. **DELETE `/users/:id`**

   * Deletes user with the provided `_id` from the URL param.
   * Uses `ObjectId(id)` to match MongoDB document.
   * Responds with deletion result (`deletedCount`).

---

### 🔹 Additional:

* `app.get('/')`: Root endpoint for server health check.

* `app.listen(port)`: Starts the Express server on port `3000`.

---

## 🚀 Summary:

| Feature      | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| **GET**      | Fetch all users                                                                   |
| **POST**     | Add a new user (name, email)                                                      |
| **DELETE**   | Delete a user by `_id`                                                            |
| **Frontend** | Fetches users, displays them, adds new users, deletes users (real-time UI update) |
| **Database** | MongoDB collection: `userDB.users`                                                |

---

## 📝 CRUD Coverage:

✅ **C**: Create (Add User)
✅ **R**: Read (Get Users)
✅ **D**: Delete (Delete User)
🚫 **U**: Update (Not implemented yet)

---

## 🔥 Key Points:

* **Real-time deletion**: Users disappear from the UI after deletion.
* **Optimistic Add**: New users appear immediately in the UI.
* **Simple and clean code**: Easy to extend (e.g., adding an update feature).

---

## 🌟 **Tip for Future:**

If you want to add **Update**, you’d add:

* **PATCH/PUT** endpoint on the server.
* A corresponding handler in the React component.

---

