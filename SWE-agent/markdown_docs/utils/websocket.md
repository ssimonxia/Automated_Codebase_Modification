## FunctionDef websocket_application(scope, receive, send)
**websocket_application**: The function of websocket_application is to handle WebSocket connections, including accepting, sending, and receiving messages between clients.

**parameters**:
- scope: a dictionary containing information about the WebSocket connection.
- receive: a coroutine function to receive WebSocket events.
- send: a coroutine function to send WebSocket events.

**Code Description**:
The websocket_application function is an asynchronous function that continuously listens for WebSocket events. It first checks the type of event received and performs different actions based on the event type. 
- If the event type is 'websocket.connect', it accepts the connection and stores the sender's information in the CONECTINGS dictionary.
- If the event type is 'websocket.receive', it processes the received message, checks if the sender is allowed to send messages to the receiver, and then sends the message to the appropriate recipient.
- If the event type is 'websocket.disconnect', it removes the sender's information from the CONECTINGS dictionary and breaks the loop to disconnect the WebSocket connection.
- For any other event type, it does nothing.

The function also parses query parameters from the scope to extract information such as 'openid', 'sender', and 'receiver' to handle message routing. It uses the CONECTINGS dictionary to store WebSocket connections based on sender information.

From a functional perspective, this websocket_application function is called by the ASGI application in the greaterwms/asgi.py file. The ASGI application determines the type of scope (HTTP or WebSocket) and calls the websocket_application function for WebSocket connections. This function plays a crucial role in managing WebSocket communication within the application.

**Note**: Developers using this function should ensure proper handling of WebSocket events and connections to maintain secure and efficient communication between clients.
