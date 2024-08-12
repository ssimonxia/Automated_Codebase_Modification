## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to define various actions for interacting with ListModel objects through API endpoints.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The `APIViewSet` class extends `viewsets.ModelViewSet` and provides the following actions:
- retrieve: Response a data list (GET)
- list: Response a data list (all)
- create: Create a data line (POST)
- delete: Delete a data line (DELETE)
- partial_update: Partially update a data (PATCH)
- update: Update a data (PUT)

The class includes methods to handle CRUD operations such as creating, updating, partially updating, and deleting ListModel objects. It also defines methods to retrieve the queryset, serializer class based on the action, and specific actions for create, update, partial update, and delete operations.

The `APIViewSet` class utilizes the `MyPageNumberPagination` for pagination, `DjangoFilterBackend` and `OrderingFilter` for filtering, and defines filter options using the `Filter` class. It retrieves the queryset based on the authenticated user and specific conditions, and determines the serializer class based on the action performed.

The `create`, `update`, `partial_update`, and `destroy` methods handle the corresponding operations on ListModel objects, ensuring that the data is manipulated securely based on the authenticated user's permissions.

This class is an essential component in the API views of the project, providing a structured way to interact with ListModel objects through RESTful API endpoints.

**Note**: Developers can extend the functionality of the `APIViewSet` class by customizing the queryset retrieval, serializer classes, and actions based on their specific requirements in handling ListModel objects through API endpoints.

**Output Example**:
A successful response with the updated data and a status code of 200.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly to this function.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary, which typically holds the URL parameters. If successful, it returns the 'pk' value. If an exception occurs during the retrieval process, it returns None.

In the context of the project, this function is utilized within the get_queryset function of the APIViewSet class. In get_queryset, the get_project function is called to obtain the 'pk' value, which is then used to filter ListModel objects based on the 'openid', 'id', and 'is_delete' attributes.

**Note**: 
- It is important to handle exceptions appropriately when using this function to ensure robust error handling.
- Ensure that the self.kwargs dictionary contains the expected 'pk' key to avoid potential KeyError exceptions.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs:
```
1
```

If an exception occurs during the retrieval process:
```
None
```
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve data from the ListModel based on certain conditions involving the 'openid', 'id', and 'is_delete' attributes.

**parameters**: 
- No parameters are explicitly passed to this function.

**Code Description**: 
The get_queryset function first calls the get_project function to obtain the 'id' value. It then checks if the request user exists and filters ListModel objects accordingly. If 'id' is None, it filters objects based on 'openid' and 'is_delete' attributes. If 'id' is not None, it filters objects based on 'openid', 'id', and 'is_delete' attributes. If the request user does not exist, it returns an empty queryset.

The get_queryset function is a part of the APIViewSet class and relies on the get_project function to retrieve the necessary 'id' value for filtering ListModel objects.

**Note**: 
- Proper exception handling is essential when utilizing the get_project function to ensure robust error management.
- It is crucial to ensure that the 'pk' key is present in the self.kwargs dictionary to prevent potential KeyError exceptions.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs:
```
<QuerySet [<ListModel: object1>, <ListModel: object2>, ...]>
```

If an exception occurs during the retrieval process:
```
<QuerySet []>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action performed in the APIViewSet.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The `get_serializer_class` function is a method defined within the APIViewSet class. It checks the value of the `action` attribute to decide which serializer class to return. Depending on the action ('list', 'retrieve', 'destroy', 'create', 'update', 'partial_update'), the function returns the corresponding serializer class: `CapitalGetSerializer`, `CapitalPostSerializer`, `CapitalUpdateSerializer`, or `CapitalPartialUpdateSerializer`. If the action does not match any of the predefined cases, it calls the `http_method_not_allowed` method with the request parameter.

This function ensures that the appropriate serializer is used for different actions within the APIViewSet, allowing for proper serialization and validation of data based on the specific operation being performed.

**Note**:
Developers should ensure that the actions defined in the APIViewSet align with the expected behavior to retrieve the correct serializer class. Proper mapping of actions to serializer classes is crucial for maintaining data consistency and integrity in the application.

**Output Example**:
- If the action is 'list', the function returns `CapitalGetSerializer`.
- If the action is 'create', the function returns `CapitalPostSerializer`.
- If the action is 'update', the function returns `CapitalUpdateSerializer`.
- If the action is 'partial_update', the function returns `CapitalPartialUpdateSerializer`.
- For any other action, the function calls `http_method_not_allowed`.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new object by processing the incoming request data, validating it, and saving it using a serializer.

**parameters**:
- self: The instance of the class.
- request: The incoming request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first extracts the request data using self.request.data. It then adds the 'openid' field to the data by accessing self.request.auth.openid. Next, a serializer is initialized with the extracted data using self.get_serializer(data=data). The function checks if the serializer is valid, raising an exception if not. If the serializer is valid, the data is saved using serializer.save(). Finally, the function generates success headers using self.get_success_headers(serializer.data) and returns a response with the serialized data, a status code of 200, and the generated headers.

**Note**:
- This function is typically used in API views to handle the creation of new objects.
- It is important to ensure that the serializer used in this function is properly configured to handle the data being processed.

**Output Example**:
{
    "id": 1,
    "name": "Example",
    "created_at": "2022-01-01T00:00:00Z"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update a specific object instance.

**parameters**:
- self: The instance of the class.
- request: The request object.
- pk: The primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object does not match the openid of the authenticated request user. If the condition is met, an APIException is raised with a message indicating that the data cannot be updated as it does not belong to the user. If the condition is not met, the function proceeds to update the object with the data from the request. It validates the serializer with the provided data, saves the serializer, retrieves success headers, and returns a response with the updated data and a status code of 200.

**Note**:
- This function assumes the presence of a get_object method, a get_serializer method, and a get_success_headers method within the class.
- The function relies on the request object and the request data for updating the object.
- It is important to ensure that proper authentication and authorization mechanisms are in place to prevent unauthorized updates.

**Output Example**:
{
    "id": 1,
    "name": "Updated Object",
    "description": "This object has been updated",
    ...
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to update a specific object partially based on the provided data.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. Otherwise, the function proceeds to extract the data from the request, create a serializer with partial update enabled, validate the serializer, save the updated data, and retrieve success headers. Finally, it returns a response with the updated data, a status code of 200, and the success headers.

**Note**:
- This function is designed to update only specific fields of an object, rather than replacing the entire object.
- It enforces a check to ensure that the user can only update their own data.

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
- request: Represents the request made to delete the object.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the object matches the openid of the requesting user. If they do not match, an APIException is raised with a message indicating that the data cannot be deleted as it does not belong to the user. If the openids match, the is_delete attribute of the object is set to True, and the object is saved. The function then retrieves the serializer for the object and generates success headers. Finally, it returns a Response with the serialized data, a status code of 200, and the success headers.

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
## ClassDef FileDownloadView
**FileDownloadView**: The function of FileDownloadView is to handle file downloads by rendering CSV files with data based on specific criteria and language preferences.

**attributes**:
- renderer_classes: Specifies the renderer classes for the view.
- filter_backends: Defines the filter backends for queryset filtering.
- ordering_fields: Specifies the fields for ordering the queryset.
- filter_class: Indicates the filter class to be used for filtering.

**Code Description**:
The FileDownloadView class extends the ModelViewSet class and includes methods to manage file downloads. It utilizes renderer_classes to set the rendering class for CSV files, filter_backends to define filtering options, ordering_fields to specify ordering fields, and filter_class to set the filter class for queryset filtering.

The get_project method retrieves the project ID from the request parameters. The get_queryset method filters the queryset based on the user and project ID, ensuring only valid data is retrieved. The get_serializer_class method determines the serializer class based on the action type, returning the appropriate serializer.

Additionally, the get_lang method determines the language for rendering the CSV file headers. The list method generates the CSV file content, applies language preferences, and initiates the file download response with the appropriate headers and content type.

In the project, the FileDownloadView class interacts with the FileRenderCN and FileRenderEN classes to render CSV files with Chinese or English headers based on language preferences. It also utilizes the Filter class for queryset filtering based on specific fields.

**Note**: Developers can customize the rendering logic, filtering options, and language preferences in the FileDownloadView class to tailor file downloads according to project requirements.

**Output Example**:
A CSV file is generated with Chinese or English headers based on language preferences, containing data filtered according to specific criteria.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value. If an exception occurs during the process, it returns None.

In the calling object get_queryset, the get_project function is utilized to obtain the 'id' value. Depending on the presence of the user in the request and the 'id' value, different queries are executed on the ListModel objects to filter the results accordingly.

**Note**: 
- The get_project function is designed to handle exceptions that may arise during the retrieval of the 'pk' value.
- It is important to ensure that the 'pk' value is correctly passed to the function to avoid potential errors.

**Output Example**: 
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve data from the ListModel based on the presence of a user in the request and the 'id' value obtained from the get_project function.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if a user is present in the request. Depending on the 'id' value and user presence, different queries are executed on the ListModel objects to filter and return the results accordingly. If no user is found in the request, an empty queryset is returned.

The get_queryset function is an essential part of the FileDownloadView class as it determines the data retrieval logic based on the user's presence and the 'id' value. By utilizing the get_project function, the get_queryset function ensures that the correct data is fetched from the ListModel objects.

**Note**: 
- It is crucial to ensure that the get_project function is functioning correctly to obtain the 'id' value for proper data filtering.
- Understanding the flow of user presence and 'id' value is essential to comprehend the behavior of the get_queryset function accurately.

**Output Example**: 
If a user is present in the request and the 'id' value is 1, the function will return a queryset containing data from ListModel objects filtered by openid, id, and is_delete criteria.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine and return the appropriate serializer class based on the action being performed.

**parameters**: This Function does not take any parameters.

**Code Description**: The get_serializer_class function checks the action being performed. If the action is 'list', it returns the FileRenderSerializer class from serializers.py. Otherwise, it calls the http_method_not_allowed method to handle the request.

The FileRenderSerializer class is responsible for serializing capital-related data for rendering in a file format. It defines fields such as capital_name, capital_qty, capital_cost, creater, create_time, and update_time. The Meta class within the serializer specifies the model to be serialized, sets a reference name, and excludes certain fields like 'openid' and 'is_delete'.

In the context of the project, the get_serializer_class function is utilized in the FileDownloadView class within views.py. This function ensures that the appropriate serializer is used based on the action, enabling the data to be processed and rendered correctly for file download.

**Note**: Developers can customize the serializer behavior by adjusting the attributes and Meta class parameters as needed.

**Output Example**:
- When the action is 'list':
    - Return FileRenderSerializer class for serializing capital data.
- For other actions:
    - Handle the request using the http_method_not_allowed method.
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language specified in the request headers and render CSV files with the appropriate language headers.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language specified in the request headers using the 'HTTP_LANGUAGE' key from the request's META data. If a language is found, it checks if the language is 'zh-hans'. If it is, the function calls the FileRenderCN class to render the data with Chinese headers using the render method. Otherwise, it utilizes the FileRenderEN class to render the data with English headers. If no language is specified, the function defaults to using FileRenderEN for rendering.

This function plays a crucial role in determining the language context for rendering CSV files based on the user's language preference. It ensures that the headers in the rendered CSV files match the language specified in the request, providing a localized experience for users accessing the capital data.

In the project structure, the get_lang function is called within the list method of the FileDownloadView class to generate the appropriate renderer based on the language context. By dynamically selecting the renderer based on the language, this function enhances the flexibility and localization capabilities of the CSV file rendering process.

**Note**:
Developers can extend the language support by adding additional language checks and corresponding renderers as needed. It is essential to maintain consistency between the language detection logic in get_lang and the rendering classes (FileRenderCN and FileRenderEN) to ensure accurate language-specific CSV file generation.

**Output Example**:
A sample output of the get_lang function could be a rendered CSV file with Chinese or English headers based on the language specified in the request.
***
### FunctionDef list(self, request)
**list**: The function of list is to generate a CSV file for download containing serialized data related to capital information.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function within the FileDownloadView class processes data by serializing instances of FileRenderSerializer. It filters the queryset based on the get_queryset method, then determines the language context for rendering the data in a CSV format using the get_lang function. The function generates a StreamingHttpResponse object with the CSV data and sets the appropriate content type and file name for download. Finally, it returns the response containing the CSV file with the current timestamp in the file name.

The list function serves as a crucial step in the file download process within the FileDownloadView class, orchestrating the serialization, data filtering, language-based rendering, and response generation for CSV file downloads.

**Note**:
Developers can customize the behavior of the list function by adjusting the queryset filtering, data serialization, and response settings as needed to meet specific requirements.

**Output Example**:
A sample output of the list function would be a CSV file ready for download, containing serialized capital data with a file name like 'capital_20220101120000.csv'.
***
