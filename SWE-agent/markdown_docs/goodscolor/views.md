## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to provide CRUD (Create, Read, Update, Delete) operations for the ListModel model with specific actions defined for each operation.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The APIViewSet class extends viewsets.ModelViewSet and implements various methods to handle different actions. It includes methods for retrieving, listing, creating, updating, partially updating, and deleting data. The class utilizes pagination, filtering, and ordering features for data manipulation. Additionally, it defines specific serializer classes based on the action being performed.

In the get_project method, the class retrieves the 'pk' parameter from the request's kwargs. The get_queryset method filters data based on the authenticated user and 'pk' value. The get_serializer_class method returns the appropriate serializer class based on the action type.

The create method creates a new data entry after validating and saving the serializer data. The update method updates an existing data entry, while the partial_update method partially updates an entry. The destroy method soft deletes a data entry by setting the 'is_delete' field to True.

The class also includes error handling for unauthorized actions and data ownership verification before performing updates or deletions.

The APIViewSet class interacts with the Filter class for defining filter options and the MyPageNumberPagination class for pagination settings.

**Note**:
Developers can customize the serializer classes, pagination settings, and filtering options by modifying the respective attributes in the APIViewSet class according to their requirements.

**Output Example**:
{
    "id": 1,
    "goods_color": "Red",
    "creater": "John",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T08:00:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value; otherwise, it returns None. This function is designed to be used within the APIViewSet class.

In the calling object get_queryset, the get_project function is utilized to obtain the 'id' value. Subsequently, based on the 'id' value and the user authentication status, the function filters and returns data from the ListModel queryset.

**Note**:
- The get_project function relies on the 'pk' value being present in the kwargs attribute of the object.
- It is essential to handle exceptions appropriately when using this function to ensure smooth operation.

**Output Example**:
If the 'pk' value is present in the kwargs attribute and equals 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve data from the ListModel queryset based on user authentication status and the 'id' value obtained from the get_project function.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_queryset function first calls the get_project function to obtain the 'id' value. It then checks the user authentication status. If the user is authenticated, it filters the ListModel queryset based on the 'id' value and the openid associated with the request. If the 'id' is None, it filters by openid and is_delete status. If the 'id' is not None, it filters by openid, 'id', and is_delete status. If the user is not authenticated, it returns an empty queryset.

This function is a part of the APIViewSet class in the views.py file of the project. It interacts with the ListModel to retrieve specific data based on user requests, ensuring data security and integrity.

**Note**:
- The get_queryset function relies on the get_project function to obtain the 'id' value.
- It performs different filtering operations on the ListModel queryset based on user authentication status and the 'id' value.
- Developers can customize this function further based on specific project requirements for data retrieval.

**Output Example**:
If the user is authenticated and the 'id' value is 1, the function will return a queryset filtered by openid, 'id' = 1, and is_delete = False.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on different actions within the APIViewSet class.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_serializer_class function contains conditional statements to select the serializer class based on the action being performed. If the action is 'list', 'retrieve', or 'destroy', the GoodscolorGetSerializer is returned. For 'create', GoodscolorPostSerializer is returned. For 'update', GoodscolorUpdateSerializer is returned. For 'partial_update', GoodscolorPartialUpdateSerializer is returned. If none of the specified actions match, it returns a method not allowed response.

This function plays a crucial role in dynamically selecting the appropriate serializer for different actions within the APIViewSet class, ensuring that data is serialized correctly based on the action being executed.

**Note**: Developers should ensure that the actions and corresponding serializers are aligned correctly to maintain consistency in data serialization. Understanding the logic behind selecting different serializers based on actions is essential for proper data handling within the APIViewSet class.

**Output Example**:
- If the action is 'list', the function returns GoodscolorGetSerializer.
- If the action is 'create', the function returns GoodscolorPostSerializer.
- If the action is 'update', the function returns GoodscolorUpdateSerializer.
- If the action is 'partial_update', the function returns GoodscolorPartialUpdateSerializer.
- For other actions, a method not allowed response is returned.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new entry in the ListModel table by validating the input data, checking for existing data, and saving the new entry if it meets the criteria.

**parameters**:
- request: Represents the incoming request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first extracts data from the incoming request, adds the 'openid' field from the request's authentication data, and then checks if a similar entry already exists in the ListModel table based on the 'openid' and 'goods_color' fields. If no duplicate entry is found, it proceeds to create a new entry using the provided serializer after validating the input data. Finally, it returns a response with the newly created data along with a success status and headers.

This function relies on the ListModel class to interact with the database table, specifically to query existing data and save new entries. It also utilizes the get_serializer and get_success_headers methods from the same APIViewSet class for data serialization and response headers generation.

**Note**:
Developers can use the create function as part of the APIViewSet class to handle POST requests for creating new entries in the ListModel table. It showcases data validation, error handling for duplicate entries, and response generation for successful creations.

**Output Example**:
{
    "goods_color": "Red",
    "creater": "John Doe",
    "openid": "abc123",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00Z",
    "update_time": "2022-01-01T12:00:00Z"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update an object if the authenticated user is the owner of the object.

**parameters**:
- request: The request object containing metadata about the HTTP request.
- pk: The primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the authenticated user matches the openid associated with the object. If they do not match, an APIException is raised indicating that the data cannot be updated as it does not belong to the user. If the user is the owner, the function proceeds to update the object with the data provided in the request. The function then validates the serializer with the updated data, saves the changes, retrieves the success headers, and returns a response with the updated data and a status code of 200.

**Note**: This function assumes that the request is authenticated and contains the necessary data for updating the object. It also relies on the get_object, get_serializer, and get_success_headers methods defined within the APIViewSet class.

**Output Example**:
{
    "id": 1,
    "name": "Updated Object",
    "description": "This object has been updated",
    "owner": "example_user",
    "updated_at": "2022-01-01T12:00:00Z"
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to update a specific object partially based on the provided data.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. Otherwise, the function proceeds to update the object with the provided data using a serializer with partial set to True. After validating the serializer, the changes are saved, and the function returns a response with the updated data and a success status code along with the appropriate headers.

**Note**:
It is crucial to ensure that the authentication mechanism is in place to prevent unauthorized updates to objects.

**Output Example**:
{
    "id": 1,
    "name": "Updated Name",
    "color": "Blue"
}
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object after checking if the request is authorized.

**parameters**:
- request: Represents the request made to the API.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised with a message indicating that the data cannot be deleted. If the openids match, the is_delete field of the object is set to True, and the object is saved. The function then serializes the updated object, retrieves the success headers, and returns a Response with the serialized data, a status of 200, and the success headers.

**Note**:
- This function is designed to delete objects based on specific criteria.
- It ensures that only authorized users can delete the object.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
