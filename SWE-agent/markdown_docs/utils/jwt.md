## FunctionDef create_token(payload)
**create_token**: The function of create_token is to generate a JWT token with the provided payload.

**parameters**:
- payload: A dictionary containing the data to be encoded into the token.

**Code Description**:
The create_token function takes a payload as input, adds a 'create_time' field to the payload with the current UTC time, and then encodes the payload into a JWT token using the HS256 algorithm. The encoded token is returned as the result.

In the calling code in scanner/views.py/ListViewSet/create, the create_token function is used to generate a token for the provided data. The generated token is then stored in the ListModel along with other relevant information.

**Note**:
- Make sure to provide a valid payload to the create_token function.
- Ensure that the JWT_SALT variable is defined and accessible where create_token is called.

**Output Example**:
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImRhdGEiOnsiY29kZSI6IjEyMzQ1Njc4OTAifX0sImNyZWF0ZV90aW1lIjoxNjMwNzEwNzEwLjIwMzQsImV4cGlyZXMiOjE2MzA3MTA3MTAuMjAzNCwiaWF0IjoxNjMwNzEwNzEwLjIwMzQsInN1YiI6ImFkbWluIn0.
## FunctionDef parse_payload(token)
**parse_payload**: The function of parse_payload is to decode a JWT token and verify its authenticity, returning the decoded payload along with the status and any potential errors.

**parameters**:
- token: A JWT token to be decoded and verified.

**Code Description**:
The parse_payload function takes a JWT token as input and attempts to decode it using the JWT library. If the decoding is successful and the token is verified, the function sets the status to True and returns the decoded payload in the 'data' field of the result dictionary. If the token has expired, a 'Token Expired' error is set in the 'error' field. If the token authentication fails or the token is invalid, corresponding error messages are set in the 'error' field. The function then returns the result dictionary containing the status, data, and error information.

This function is designed to handle JWT tokens and provide a structured response indicating the status of the token decoding process along with any potential errors that may have occurred.

**Note**:
- Make sure to handle the different error scenarios appropriately based on the exceptions raised during the token decoding process.
- Ensure that the JWT library and necessary exception classes are imported before using this function.

**Output Example**:
{
    "status": True,
    "data": {
        "user_id": 12345,
        "role": "admin"
    },
    "error": None
}
