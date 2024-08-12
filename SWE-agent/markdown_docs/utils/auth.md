## ClassDef Authtication
**Authtication**: The function of Authtication is to authenticate a user based on the request received.

**attributes**:
- request: Represents the request object containing information like path and headers.

**Code Description**:
The Authtication class provides two methods:
1. authenticate(self, request): This method checks if the request path is not in a specific list, then extracts the token from the request headers. It validates the token against the Users model and returns a tuple indicating authentication status and the user object if authenticated. If the token is invalid or the user does not exist, it raises an APIException.
   
2. authenticate_header(self, request): This method is a placeholder and currently does not have any implementation.

**Note**:
- Ensure the request object contains necessary information for authentication.
- Handle APIException to manage authentication errors gracefully.

**Output Example**:
- If the user is successfully authenticated:
    (True, user_object)
- If the request path is in the restricted list:
    (False, None)
- If the token is missing in the request headers:
    APIException: {"detail": "Please Add Token To Your Request Headers"}
- If the user does not exist:
    APIException: {"detail": "User Does Not Exists"}
### FunctionDef authenticate(self, request)
**authenticate**: The function of authenticate is to verify the user's token in the request and return the user if it exists in the Users model.

**parameters**:
- self: The instance of the class.
- request: The request object containing the token in the META headers.

**Code Description**:
The authenticate function first checks if the request path is not in the specified paths for exclusion. If the path is valid, it retrieves the token from the request headers. It then queries the Users model to check if a user with the provided token exists. If the user exists, it returns a tuple with True and the user object. If the token is missing or the user does not exist, it raises an APIException with the corresponding error message.

The function relies on the Users model to validate the user's token and retrieve user information for authentication purposes.

**Note**: Ensure that the request object contains the necessary token in the headers for successful authentication.

**Output Example**:
- (True, user_object)
***
### FunctionDef authenticate_header(self, request)
**authenticate_header**: The function of authenticate_header is to authenticate a request header.

**parameters**:
- self: The reference to the current instance of the class.
- request: The request object to be authenticated.

**Code Description**:
The authenticate_header function takes in a request object and is responsible for authenticating the header of the request. However, the specific implementation details of the authentication process are not provided in the code snippet.

**Note**:
Developers using this function should ensure that the necessary authentication logic is implemented within this function to authenticate the request header properly.
***
