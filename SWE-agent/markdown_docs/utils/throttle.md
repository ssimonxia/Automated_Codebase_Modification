## ClassDef VisitThrottle
**VisitThrottle**: The function of VisitThrottle is to control and limit the number of requests based on the HTTP method and specific criteria.

**attributes**:
- request: Represents the HTTP request object.
- view: Represents the view function associated with the request.

**Code Description**:
The VisitThrottle class implements request throttling based on different HTTP methods (GET, POST, PUT, PATCH, DELETE). It checks the request path and method, retrieves necessary information from the request object, and interacts with a ListModel to manage request limits. The throttling logic includes creating, deleting, and checking entries in the ListModel based on the request method, IP address, openid, appid, and time intervals. The class also calculates the time balance for subsequent requests.

**Note**: 
- The class relies on settings like ALLOCATION_SECONDS, GET_THROTTLE, POST_THROTTLE, PUT_THROTTLE, PATCH_THROTTLE, and DELETE_THROTTLE which are expected to be defined elsewhere in the project.
- The ListModel and Md5 classes are referenced within the class and should be properly implemented in the project for the throttling mechanism to work correctly.

**Output Example**:
- For allow_request method:
    - True: Indicates that the request is allowed based on the throttling criteria.
    - False: Indicates that the request is denied due to exceeding the allowed limits.
- For wait method:
    - A float value representing the remaining time (in seconds) before a new request can be made.
### FunctionDef allow_request(self, request, view)
**allow_request**: The function of allow_request is to determine whether a request should be allowed based on various conditions such as request path, method type, and throttling limits.

**parameters**:
- request: Represents the incoming request object.
- view: Represents the view associated with the request.

**Code Description**: 
The allow_request function first checks the request path to determine if it matches certain paths that should be denied. It then extracts the IP address, openid, and appid from the request object. Depending on the request method (GET, POST, PUT, PATCH, DELETE), it performs different operations such as creating, deleting, and checking entries in a ListModel database table. Throttling limits are enforced based on the request method and settings defined in the project.

The function interacts with the ListModel database to store and retrieve information about request allocations. It also utilizes the Md5 class from utils/md5.py to generate a unique code based on the IP address.

**Note**: 
- This function is designed to handle request throttling and access control based on specific criteria.
- Make sure the ListModel database table is properly configured and accessible for this function to work correctly.

**Output Example**: 
- True: The request is allowed.
- False: The request is denied.
***
### FunctionDef wait(self)
**wait**: The function of wait is to calculate the remaining time until the next visit check.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The wait function calculates the remaining time until the next visit check by subtracting the current time from the last visit check time. It then calculates the balance time until the next check by subtracting the wait time from 1 second.

**Note**:
Make sure to provide the necessary data such as the last visit check time in the data dictionary before calling this function.

**Output Example**:
If the wait time calculated is 0.5 seconds, the balance time until the next visit check will be 0.5 seconds.
***
