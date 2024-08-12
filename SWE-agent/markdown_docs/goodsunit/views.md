## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to provide CRUD (Create, Retrieve, Update, Delete) operations for the ListModel data through API endpoints.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The `APIViewSet` class extends `viewsets.ModelViewSet` to handle various actions on the ListModel data. It defines methods for retrieving, listing, creating, updating, and deleting data. The class utilizes different serializers based on the action type to ensure proper data handling. Additionally, it includes methods to customize queryset filtering based on user authentication and specific fields. The class also implements data validation and manipulation logic to ensure data integrity and security.

The `APIViewSet` class uses `MyPageNumberPagination` for pagination, `DjangoFilterBackend` and `OrderingFilter` for filtering, and `Filter` class for defining filter options. By assigning the `Filter` class to the `filter_class` attribute, the API views can apply the specified filtering options to the ListModel data.

In the project structure, the `APIViewSet` class is located within the `views.py` file of the `goodsunit` app. It serves as a crucial component for handling API requests related to the ListModel data, providing a structured approach to data management and interaction.

**Note**: Developers can leverage the `APIViewSet` class to create robust API endpoints for performing CRUD operations on the ListModel data, incorporating pagination, filtering, and data validation mechanisms to enhance the functionality and security of the API services.

**Output Example**:
```json
{
    "id": 1,
    "goods_unit": "kg",
    "creater": "John",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:30:00"
}
```
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**: 
- self: The reference to the current instance of the class.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value. If an exception occurs during this process, it returns None.

In the calling object get_queryset, the get_project function is utilized to obtain the 'id' value. Depending on the existence of the 'id' value and the user making the request, different filtering conditions are applied to the ListModel queryset.

**Note**: 
Developers using this function should ensure that the 'pk' value is correctly passed to the function to avoid potential exceptions.

**Output Example**: 
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a queryset from the ListModel based on the 'id' value obtained using the get_project function and the user making the request.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if a user is making the request. If a user exists, it further checks if the 'id' value is None. Depending on these conditions, different filtering criteria are applied to the ListModel queryset. If no user is found, an empty queryset is returned.

The get_queryset function ensures that the ListModel queryset is filtered based on the 'openid', 'id', and 'is_delete' fields, providing the necessary data based on the user's request.

**Note**:
Developers should ensure that the get_project function is correctly implemented to retrieve the 'id' value for proper queryset filtering in the get_queryset function.

**Output Example**:
If the 'id' value is 1 and a user is making the request, the function will return a queryset filtered by 'openid', 'id', and 'is_delete' fields from the ListModel.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed within the APIViewSet.

**parameters**:
- No parameters are passed explicitly, as the method operates on the instance attributes.

**Code Description**:
The get_serializer_class method checks the action attribute of the APIViewSet instance to decide which serializer class to return. Depending on the action ('list', 'retrieve', 'destroy', 'create', 'update', 'partial_update'), a specific serializer class (GoodsunitGetSerializer, GoodsunitPostSerializer, GoodsunitUpdateSerializer, GoodsunitPartialUpdateSerializer) is returned accordingly. If the action does not match any predefined actions, it calls the http_method_not_allowed method with the request attribute.

This method plays a crucial role in dynamically selecting the appropriate serializer for serializing data based on the type of action being performed within the APIViewSet. By returning the correct serializer, it ensures that the data is processed and formatted correctly for the specific action.

**Note**:
Developers should ensure that the actions defined in the if-elif conditions align with the expected behavior of the APIViewSet. It is essential to maintain consistency between the actions and the corresponding serializers to avoid serialization errors.

**Output Example**:
- If the action is 'list', the method returns GoodsunitGetSerializer.
- If the action is 'create', the method returns GoodsunitPostSerializer.
- If the action is 'update', the method returns GoodsunitUpdateSerializer.
- If the action is 'partial_update', the method returns GoodsunitPartialUpdateSerializer.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new object based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and adds the 'openid' value from the authentication data. It then checks if an object with the same 'openid' and 'goods_unit' values already exists in the ListModel. If the object exists, it raises an APIException with a message. Otherwise, it proceeds to serialize the data, validate it, save the serializer, and return a response with the serialized data along with success headers.

**Note**:
- This function assumes the existence of a ListModel for data storage and retrieval.
- The 'openid' and 'goods_unit' fields are crucial for checking the existence of data.
- The function uses serializers for data validation and saving.

**Output Example**:
{
    "id": 1,
    "goods_unit": "example_unit",
    "quantity": 10,
    "price": 50.0,
    "created_at": "2022-01-01T00:00:00Z",
    "updated_at": "2022-01-01T00:00:00Z"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update an object if the requesting user is the owner of the object.

**parameters**:
- request: The HTTP request object.
- pk: The primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the requesting user's openid matches the openid associated with the object. If they do not match, an APIException is raised with a message indicating that the data cannot be updated as it does not belong to the requesting user. If the openids match, the function proceeds to update the object with the data provided in the request. The data is validated using the serializer obtained from get_serializer method, and if valid, the changes are saved. Finally, the function returns a Response with the updated data, a status code of 200, and any additional headers obtained from get_success_headers method.

**Note**:
- This function assumes that the requesting user is authenticated and the object being updated has an 'openid' attribute to compare ownership.
- It is important to handle the APIException appropriately in the calling code to provide a meaningful response to the user.

**Output Example**:
{
    "id": 1,
    "name": "Updated Object",
    "description": "This object has been updated",
    "owner": "example_owner",
    "updated_at": "2022-01-01T12:00:00Z"
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to partially update an object based on the provided data.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated user. If they do not match, an APIException is raised. Otherwise, the function proceeds to update the object with the provided data. The data is validated using the serializer, and if valid, the changes are saved. Finally, the function returns a response with the updated data and a success status code along with any necessary headers.

**Note**:
It is important to ensure that the user has the necessary permissions to update the object before calling this function.

**Output Example**:
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object after checking if the user has the permission to delete it.

**parameters**:
- request: Represents the request made to delete the object.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the user making the request matches the openid associated with the object. If they do not match, an APIException is raised indicating that the data cannot be deleted as it does not belong to the user. If the openids match, the is_delete field of the object is set to True, and the object is saved. The function then serializes the updated object, generates success headers, and returns a response with the serialized data and a status code of 200.

**Note**:
- This function is designed to ensure that only the owner of the data can delete it.
- Make sure to handle the APIException appropriately in your code.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
