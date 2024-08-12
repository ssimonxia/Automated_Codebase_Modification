## ClassDef Normalpermission
**Normalpermission**: The function of Normalpermission is to provide permission checks for user access.

**attributes**: 
- request: Represents the request made by the user.
- view: Represents the view being accessed.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The `has_permission` method checks if the user has permission to access a particular view. It currently returns True unconditionally. The `has_object_permission` method is intended to check object-specific permissions but also returns True unconditionally in the provided code snippet.

**Note**: 
- The code snippet provided contains placeholder logic and does not perform actual permission checks based on user attributes.
- Developers should implement actual permission logic within the methods to make them functional.

**Output Example**: 
True
### FunctionDef has_permission(self, request, view)
**has_permission**: The function of has_permission is to check if a user has permission to access a certain view.

**parameters**:
- request: Represents the HTTP request made by the user.
- view: Represents the view that the user is trying to access.

**Code Description**:
The function checks if the user has permission to access a specific view. It first verifies if the user exists in the database and is not marked for deletion. Then, it checks the user's VIP status and returns True if the user is allowed access.

**Note**:
- This function assumes that the user information is stored in a database table named Users.
- The function always returns True, which might need to be adjusted based on the specific permission logic required in the application.

**Output Example**:
True
***
### FunctionDef has_object_permission(self, request)
**has_object_permission**: The function of has_object_permission is to check if a user has permission to access an object.

**parameters**:
- self: The instance of the class.
- request: The request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The function checks if a user with a specific user_id and is_delete flag equal to 0 exists in the Users table. If the user exists, it retrieves the vip status of the user. If the vip status is 0, the function returns True, indicating permission is granted. Otherwise, it also returns True.

**Note**:
- The code snippet provided is simplified and may not cover all possible scenarios or error handling.
- The function always returns True in the given code, which may not be the desired behavior in a real-world application.

**Output Example**:
True
***
