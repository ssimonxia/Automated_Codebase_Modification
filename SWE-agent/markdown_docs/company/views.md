## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to handle various HTTP methods for interacting with the ListModel data, including retrieving, listing, creating, updating, partially updating, and deleting data.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The `APIViewSet` class extends `viewsets.ModelViewSet` and provides methods to handle different actions on the ListModel data. It includes methods such as `get_project`, `get_queryset`, `get_serializer_class`, `create`, `update`, `partial_update`, and `destroy`.

The `get_project` method retrieves the 'pk' parameter from the request's kwargs. The `get_queryset` method filters the ListModel data based on the request user and 'pk' parameter. The `get_serializer_class` method returns the appropriate serializer class based on the action performed.

The `create` method creates a new data entry in the ListModel, checking for existing data and limiting the number of entries per user. The `update` method updates an existing data entry, while the `partial_update` method partially updates an entry. The `destroy` method soft deletes a data entry by setting the 'is_delete' flag to True.

The class also defines attributes such as pagination_class, filter_backends, ordering_fields, and filter_class to configure pagination, filtering, ordering, and filtering options for the ListModel data.

The `APIViewSet` class interacts with the `MyPageNumberPagination` class for pagination, the `Filter` class for filtering options, and various serializers for data serialization based on different actions.

**Note**: Developers can customize the behavior of the APIViewSet by extending its methods or modifying the attributes to suit specific requirements.

**Output Example**:
A Response object containing the serialized data and appropriate headers.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly to this function.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None. This function is used to extract the project ID from the request parameters.

In the get_queryset function within the APIViewSet class, the get_project function is called to obtain the project ID. Based on the retrieved project ID and the user making the request, different queries are executed on the ListModel objects. If the user is authenticated and a project ID is present, a filtered query is performed to retrieve specific ListModel objects. If the user is authenticated but no project ID is provided, a filtered query is retrieves ListModel objects based on the user's openid and is_delete status. If the user is not authenticated, an empty queryset is returned.

**Note**: 
- It's important to handle exceptions properly when using this function to ensure robust error handling.
- Ensure that the self.kwargs dictionary contains the 'pk' key before calling this function to avoid potential KeyError exceptions.

**Output Example**: 
- If the 'pk' value is successfully retrieved from self.kwargs:
    - Output: 123 (assuming 'pk' value is 123)
- If the 'pk' value is not found in self.kwargs:
    - Output: None
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a queryset of ListModel objects based on the user's authentication status and the project ID obtained from the get_project function.

**parameters**: 
- No explicit parameters are passed to this function.

**Code Description**: 
The get_queryset function first calls the get_project function to retrieve the project ID. It then checks if the user is authenticated. If the user is authenticated and a project ID is available, a filtered query is executed to fetch specific ListModel objects based on the openid, project ID, and is_delete status. If the user is authenticated but no project ID is provided, ListModel objects are filtered based on the user's openid and is_delete status. If the user is not authenticated, an empty queryset is returned.

This function is crucial for obtaining the necessary data from the ListModel based on the user's authentication status and the project ID. It ensures that the appropriate data is retrieved based on the user's permissions and request parameters.

**Note**: 
- Proper error handling should be implemented to manage exceptions effectively.
- It is essential to verify the presence of the 'pk' key in the self.kwargs dictionary before calling the get_project function to prevent potential KeyError exceptions.

**Output Example**: 
- If the user is authenticated and a project ID is provided:
    - Output: ListModel queryset filtered based on openid, project ID, and is_delete status.
- If the user is authenticated but no project ID is provided:
    - Output: ListModel queryset filtered based on openid and is_delete status.
- If the user is not authenticated:
    - Output: An empty ListModel queryset.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine and return the appropriate serializer class based on the action being performed.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The `get_serializer_class` method checks the action being performed and returns the corresponding serializer class. If the action is 'list', 'retrieve', or 'destroy', it returns the `CompanyGetSerializer`. For the 'create' action, it returns the `CompanyPostSerializer`. If the action is 'update', the method returns the `CompanyUpdateSerializer`. In the case of 'partial_update', the `CompanyPartialUpdateSerializer` is returned. If none of these conditions are met, it calls the `http_method_not_allowed` method.

This method is crucial in the APIViewSet class in the views.py file, as it ensures that the appropriate serializer is used for different actions related to company data. By returning the specific serializer class based on the action, the method facilitates the serialization of data according to the action requirements.

**Note**:
Developers should ensure that the actions defined in this method align with the expected behavior of the API endpoints to correctly serialize the data. Additionally, custom handling for unsupported actions should be implemented to maintain the integrity of the API responses.

**Output Example**:
- If the action is 'list', the method returns CompanyGetSerializer.
- If the action is 'create', the method returns CompanyPostSerializer.
- If the action is 'update', the method returns CompanyUpdateSerializer.
- If the action is 'partial_update', the method returns CompanyPartialUpdateSerializer.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new company while enforcing certain business rules and validations.

**parameters**:
- self: the instance of the class.
- request: the request object containing the data.
- *args: additional positional arguments.
- **kwargs: additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and then checks if a company with the same openid and company_name already exists. If it does, an exception is raised. Next, it verifies if the user can create only one company; otherwise, another exception is raised. If both conditions pass, the function proceeds to serialize the data, validate it, save it, and return a response with a success status.

**Note**: This function is responsible for creating a new company instance while ensuring data integrity and enforcing business rules. It is crucial to handle any exceptions raised during the process to provide meaningful feedback to the user.

**Output Example**:
{
    "id": 1,
    "company_name": "Example Company",
    "created_at": "2022-01-01T00:00:00Z",
    "updated_at": "2022-01-01T00:00:00Z"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update the data if the request is made by the authorized user.

**parameters**:
- request: Represents the request made to update the data.
- pk: Represents the primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authorized user. If they do not match, an APIException is raised indicating that the data cannot be updated as it does not belong to the user. If the openids match, the function proceeds to update the data by validating and saving the serializer with the provided data. Finally, it returns a response with the updated data and a success status code along with the appropriate headers.

**Note**:
- This function ensures that only the authorized user can update the data associated with their openid.
- It is important to handle the APIException appropriately when using this function to update data.

**Output Example**:
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to partially update data based on the provided request and primary key.

**parameters**:
- self: The instance of the class.
- request: The request object containing the data to update.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object based on the provided primary key. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. If the openids match, the function proceeds to update the data partially using the provided request data. The function validates the serializer with the partial data, saves the changes, and retrieves success headers. Finally, it returns a response with the updated data and a status code of 200 along with the success headers.

**Note**:
- This function is designed to update data partially, ensuring that only authorized users can update their own data.
- It is important to handle the APIException that is raised when trying to update data that does not belong to the authenticated user.

**Output Example**:
{
    "field1": "updated_value1",
    "field2": "updated_value2",
    ...
}
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object after checking if the requesting user has the permission to do so.

**parameters**:
- self: Refers to the instance of the class.
- request: Represents the request object.
- pk: Stands for the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the object matches the openid of the requesting user. If they do not match, an APIException is raised with a message indicating that the data cannot be deleted. If the openids match, the is_delete attribute of the object is set to True, and the object is saved. The function then retrieves the serializer for the object and generates success headers. Finally, it returns a response with the serialized data, a status code of 200, and the success headers.

**Note**: Ensure that proper authentication and authorization mechanisms are in place to prevent unauthorized deletion of data.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
