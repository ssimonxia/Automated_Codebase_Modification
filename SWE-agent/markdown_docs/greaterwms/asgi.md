## FunctionDef application(scope, receive, send)
**application**: The function of application is to handle different types of ASGI scope events by calling the appropriate sub-functions based on the event type.

**parameters**:
- scope: a dictionary containing information about the ASGI scope event.
- receive: a coroutine function to receive ASGI events.
- send: a coroutine function to send ASGI events.

**Code Description**:
The application function is an asynchronous function that first checks the type of ASGI event received through the scope parameter. Depending on the event type, it either calls the ASGIHandler.asgi_get_handler function and then the http_application function for HTTP/HTTPS events, or directly calls the websocket_application function for WebSocket events. If the event type is not recognized, it raises an exception indicating an unknown type.

From a functional perspective, this application function acts as a central dispatcher for handling different types of ASGI events within the greaterwms application. It delegates the processing of HTTP/HTTPS events to the http_application function and WebSocket events to the websocket_application function, ensuring proper event handling based on the event type.

**Note**: Developers using the application function should ensure that the appropriate sub-functions (http_application and websocket_application) are implemented correctly to handle specific ASGI event types. Additionally, proper error handling should be in place to manage any unexpected event types that may arise during the application's execution.
