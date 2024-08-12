## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to provide CRUD (Create, Read, Update, Delete) operations for ListModel data with specific actions like retrieve, list, create, delete, partial_update, and update.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The APIViewSet class extends viewsets.ModelViewSet and implements various methods for handling different actions on ListModel data. It includes methods like get_project, get_queryset, get_serializer_class, create, update, partial_update, and destroy. The class utilizes the Filter class for defining filter options and the MyPageNumberPagination class for pagination. The get_project method retrieves the project ID, get_queryset filters ListModel data based on the user and project ID, and get_serializer_class selects the appropriate serializer based on the action. The create, update, partial_update, and destroy methods handle the corresponding CRUD operations with necessary validations.

In the project, APIViewSet is used as a viewset in the views.py file of the goodsshape app to interact with ListModel data through API endpoints. It specifies the pagination, filter backends, ordering fields, and filter class to manage data retrieval and manipulation efficiently.

**Note**:
Developers can customize the behavior of APIViewSet by extending its methods or overriding them as needed to suit specific requirements.

**Output Example**:
A successful response with data and headers after creating a new data line:
{
    "id": 1,
    "goods_shape": "Square",
    "creater": "User123",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-01T12:00:00"
}
Headers:
{
    "Content-Type": "application/json",
    "Status": 200
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None. This function is designed to be used within the APIViewSet class to fetch the 'pk' value for further processing.

In the calling object get_queryset, the get_project function is invoked to obtain the 'id' value. Subsequently, based on the 'id' value and the authenticated user in the request, different queries are executed on the ListModel objects. If the user is authenticated and 'id' is None, the function filters ListModel objects by 'openid' and 'is_delete' attributes. If the user is authenticated and 'id' is not None, the function filters ListModel objects by 'openid', 'id', and 'is_delete' attributes. If the user is not authenticated, an empty queryset is returned.

**Note**:
It is important to handle exceptions appropriately when using the get_project function to ensure smooth execution and error handling.

**Output Example**:
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter ListModel instances based on the request user and project ID. If the user is authenticated and the project ID is provided, the function filters ListModel objects by 'openid', 'id', and 'is_delete' attributes. If the user is not authenticated, an empty queryset is returned.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_queryset method first calls the get_project function to retrieve the project ID. It then checks if the request user is authenticated. If authenticated and the project ID is None, the function filters ListModel objects by 'openid' and 'is_delete' attributes. If the project ID is provided, it filters ListModel objects by 'openid', 'id', and 'is_delete' attributes. If the user is not authenticated, an empty queryset is returned using ListModel.objects.none().

This function ensures that only relevant ListModel instances are retrieved based on the user's authentication status and the project ID, providing controlled access to goods shape data.

**Note**:
Developers should ensure proper authentication handling to control access to goods shape data effectively.

**Output Example**:
If the user is authenticated and the project ID is provided, the function may return a queryset of ListModel instances filtered by 'openid', 'id', and 'is_delete' attributes.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action performed in the APIViewSet.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_serializer_class function contains conditional statements to select the serializer class based on the action being executed. If the action is 'list', 'retrieve', or 'destroy', the GoodsshapeGetSerializer is returned. For 'create', GoodsshapePostSerializer is returned, for 'update', GoodsshapeUpdateSerializer is returned, and for 'partial_update', GoodsshapePartialUpdateSerializer is returned. In case the action does not match any of these predefined actions, a method not allowed response is returned.

This function plays a crucial role in dynamically selecting the appropriate serializer class to handle data serialization and validation based on the specific action being performed within the APIViewSet.

**Note**:
Developers can leverage the get_serializer_class function to ensure that the correct serializer is used for different actions within the APIViewSet, maintaining consistency and data integrity throughout the serialization process.

**Output Example**:
```python
return serializers.GoodsshapeGetSerializer
```
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new ListModel instance by validating the provided data and saving it if it meets the criteria.

**parameters**:
- self: The instance of the class.
- request: The request object containing the data to be processed.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and adds the openid from the request authentication. It then checks if a ListModel instance with the same openid, goods_shape, and is_delete status does not already exist. If the data passes the validation, a serializer is instantiated with the provided data, validated, and saved. Finally, the function returns a response with the serialized data and appropriate headers.

The create function interacts with the ListModel class to check for existing instances and create new ones based on the provided data. It utilizes serializers for data validation and saving, ensuring data integrity and consistency within the system.

**Note**:
Developers using the create function should ensure that the data provided adheres to the validation rules defined in the ListModel and associated serializers to prevent data inconsistencies. Proper handling of responses and error messages is crucial for effective communication with the client-side application.

**Output Example**:
```json
{
    "goods_shape": "Square",
    "creater": "John Doe",
    "openid": "abc123",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00Z",
    "update_time": "2022-01-01T12:00:00Z"
}
```
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update a specific object instance.

**parameters**:
- request: Represents the request made to update the object.
- pk: Represents the primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised with a message indicating that the data cannot be updated as it does not belong to the requester. If the openids match, the function proceeds to update the object with the data provided in the request. The data is validated using the serializer, and if valid, the changes are saved. Finally, the function returns a Response with the updated data, a status code of 200, and any additional headers specified by get_success_headers.

**Note**:
- This function assumes the presence of a get_object method, a get_serializer method, and an auth attribute in the request object.
- It is important to ensure that the request is authenticated before calling this function to prevent unauthorized updates.

**Output Example**:
```json
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
```
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to partially update data based on the provided request and primary key.

**parameters**:
- self: The instance of the class.
- request: The request object containing the data to update.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the primary key. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. If the openids match, the function proceeds to update the object with the provided data. The function uses a serializer to validate and save the updated data. Finally, it returns a response with the updated data and a success status code along with the appropriate headers.

**Note**:
- This function is designed to update only a subset of fields in the object, hence the use of partial=True in the serializer.
- It is important to ensure that the request is authenticated before calling this function to prevent unauthorized updates.

**Output Example**:
```json
{
    "field1": "updated_value1",
    "field2": "updated_value2",
    ...
}
```
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object if the requesting user has the necessary permissions.

**parameters**:
- request: Represents the request made to the server.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the requesting user's openid matches the openid associated with the object. If they do not match, an APIException is raised indicating that the data cannot be deleted as it does not belong to the requesting user. If the openids match, the is_delete attribute of the object is set to True, and the object is saved. The function then serializes the updated object, retrieves the success headers, and returns a response with the serialized data and a status code of 200.

**Note**:
- This function is designed to ensure that only the owner of the data can delete it.
- Make sure the requesting user has the necessary permissions before calling this function.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
