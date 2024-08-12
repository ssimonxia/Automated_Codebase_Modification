## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to handle various CRUD operations for the ListModel data, including retrieving, listing, creating, updating, partially updating, and deleting data.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', 'create_time', 'update_time']
- filter_class: Filter

**Code Description**:
The APIViewSet class extends viewsets.ModelViewSet and provides methods for handling different HTTP methods like GET, POST, PUT, PATCH, and DELETE. It defines specific actions for each method such as retrieving a data list, creating a data line, updating a data line, partially updating a data, and deleting a data line. The class also includes methods to customize queryset, serializer class based on the action, and perform data integrity checks during create, update, partial update, and delete operations.

The class utilizes the MyPageNumberPagination for pagination, DjangoFilterBackend for filtering, and OrderingFilter for ordering the data. It specifies the fields that can be used for ordering the data and the filtering options for the ListModel data using the Filter class. The get_project method retrieves the project ID from the request parameters, and the get_queryset method filters the ListModel data based on the user and project ID.

The get_serializer_class method returns the appropriate serializer class based on the action performed. The create, update, partial_update, and destroy methods handle the corresponding CRUD operations by validating the data, checking ownership, and saving the data while ensuring data integrity.

**Note**:
Developers can extend the APIViewSet class to customize additional actions or override existing methods to suit specific requirements for handling CRUD operations on ListModel data within the APIViewSet.

**Output Example**:
{
    "id": 1,
    "goods_class": "Electronics",
    "creater": "John Doe",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:00:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value; otherwise, it returns None.

In the get_queryset function within the APIViewSet class, the get_project function is called to obtain the 'id' value. Depending on the presence of the user in the request and the 'id' value, different queries are executed on the ListModel objects. If the user is present and 'id' is None, objects are filtered based on the openid and is_delete status. If 'id' has a value, objects are filtered based on openid, id, and is_delete status. If there is no user in the request, an empty queryset is returned.

**Note**:
It is important to handle exceptions properly when using the get_project function to ensure smooth execution.

**Output Example**:
If the 'pk' value is present in the kwargs attribute, the function may return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve data from the ListModel objects based on the presence of the user in the request and the 'id' value obtained from the get_project function.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. If the user is present in the request and 'id' is None, the function filters ListModel objects based on the openid and is_delete status. If 'id' has a value, the function filters objects based on openid, id, and is_delete status. If there is no user in the request, an empty queryset is returned.

**Note**:
Proper exception handling should be implemented when using the get_project function to ensure smooth execution.

**Output Example**:
If the user is present and 'id' is None, the function may return a queryset of ListModel objects filtered based on openid and is_delete status.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed in the APIViewSet.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The `get_serializer_class` function contains conditional statements that check the action being performed. Depending on the action ('list', 'retrieve', 'destroy', 'create', 'update', 'partial_update'), it returns the corresponding serializer class. If the action is related to retrieving goods class data (list, retrieve, destroy), it returns the `GoodsclassGetSerializer`. For create, update, and partial_update actions, it returns `GoodsclassPostSerializer`, `GoodsclassUpdateSerializer`, and `GoodsclassPartialUpdateSerializer` respectively. In case of an unsupported action, it calls `self.http_method_not_allowed` method.

This function plays a crucial role in dynamically selecting the appropriate serializer class to handle the serialization of data based on the specific action within the APIViewSet.

**Note**:
Developers should ensure that the actions and corresponding serializer classes are correctly mapped to maintain data consistency and integrity.

**Output Example**:
If the action is 'list', the function will return `GoodsclassGetSerializer`.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new object based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and adds the 'openid' value from the authentication information. It then checks if an object with the same 'openid' and 'goods_class' exists in the ListModel. If the object exists, it raises an APIException with a message. Otherwise, it proceeds to serialize the data, validate it, save the serializer data, and generate success headers. Finally, it returns a response with the serialized data and a status code of 200.

**Note**:
- This function assumes the existence of a ListModel for data storage.
- The function relies on the get_serializer and get_success_headers methods defined in the class.
- It enforces data validation by using serializer.is_valid(raise_exception=True).

**Output Example**:
{
    "id": 1,
    "name": "Product A",
    "price": 20.0,
    "goods_class": "Class A",
    "openid": "abc123",
    "created_at": "2022-01-01T12:00:00Z"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update the data of a specific object if the authenticated user owns the data.

**parameters**:
- request: Represents the request made to update the data.
- pk: Represents the primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the authenticated user matches the openid associated with the object. If they do not match, an APIException is raised with a message indicating that the data cannot be updated as it does not belong to the user. If the openids match, the function proceeds to update the data by validating the input data, saving the serialized data, and returning a response with the updated data and a success status code.

**Note**:
It is important to ensure that the request is authenticated before calling this function to prevent unauthorized updates of data.

**Output Example**:
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to partially update an object based on the provided data.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated user. If they do not match, an APIException is raised. If the openids match, the function proceeds to update the object with the provided data. The function uses the get_serializer method to serialize the data, validates it, and saves the changes. Finally, it generates success headers and returns a response with the updated data.

**Note**:
- This function is designed to handle partial updates, meaning only the fields provided in the request data will be updated, leaving other fields unchanged.
- It is important to ensure that the authentication mechanism is in place to prevent unauthorized updates.

**Output Example**:
```json
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
```
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object if the authenticated user is the owner of that object.

**parameters**:
- request: Represents the request made to the server.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object based on the provided primary key. It then checks if the authenticated user's openid matches the openid associated with the object. If they match, the function marks the object as deleted by setting the is_delete attribute to True and saves the changes. Next, it serializes the updated object and generates success headers. Finally, it returns a response with the serialized data, a status code of 200, and the success headers.

**Note**: This function ensures that only the owner of the object can delete it, preventing unauthorized deletion of data.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
