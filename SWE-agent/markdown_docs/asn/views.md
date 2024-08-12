## ClassDef AsnListViewSet
**AsnListViewSet**: The function of AsnListViewSet is to provide a view set for the ASN list, allowing users to retrieve, list, create, and delete data lines.

**attributes**:
- `pagination_class`: Specifies the pagination class to be used for the ASN list view.
- `filter_backends`: Specifies the filter backends to be used for the ASN list view.
- `ordering_fields`: Specifies the fields that can be used for ordering the ASN list.
- `filter_class`: Specifies the filter class to be used for filtering the ASN list.

**Code Description**:
The `AsnListViewSet` class is a subclass of `ModelViewSet` and provides the functionality to retrieve, list, create, and delete data lines for the ASN list. It includes methods to get the project ID, get the queryset based on the project ID and user, get the serializer class based on the action, handle language for notifications, create a new data line, and delete a data line.

The `get_project` method retrieves the project ID from the URL parameters and returns it. If the project ID is not provided or an error occurs, it returns None.

The `get_queryset` method retrieves the project ID using the `get_project` method and filters the queryset of `AsnListModel` based on the project ID and user. It checks if the user is authenticated and filters the queryset accordingly. If the project ID is not provided, it returns the queryset of `AsnListModel` filtered by the user and excluding data lines with a supplier. If the project ID is provided, it returns the queryset of `AsnListModel` filtered by the user, the project ID, and excluding data lines with a supplier.

The `get_serializer_class` method determines the serializer class to be used based on the action. If the action is 'list', 'retrieve', or 'destroy', it returns the `ASNListGetSerializer` class. If the action is 'create', it returns the `ASNListPostSerializer` class. If the action is 'update', it returns the `ASNListUpdateSerializer` class. If the action is 'partial_update', it returns the `ASNListPartialUpdateSerializer` class. Otherwise, it returns the `http_method_not_allowed` method with the request as a parameter.

The `notice_lang` method retrieves the language from the request headers and returns an instance of the `FBMsg` class with the language as a parameter.

The `create` method handles the creation of a new data line. It retrieves the data from the request, adds the user's openid to the data, and generates an ASN code based on the current date and the user's previous ASN code. It then saves the data using the serializer and creates a new scanner object. Finally, it returns the serialized data with a success response.

The `destroy` method handles the deletion of a data line. It retrieves the data line based on the provided primary key (pk) and checks if the user is the owner of the data line. If the data line's ASN status is 1, it marks the data line and its associated detail lines as deleted and updates the stock quantities. Finally, it returns the serialized data with a success response.

In the context of the project, the `AsnListViewSet` class is utilized as the view set for the ASN list in `asn/views.py`. It integrates with the `MyPageNumberPaginationASNList` pagination class, `AsnListFilter` filter class, and other serializer classes to provide the necessary functionality for retrieving, listing, creating, and deleting data lines in the ASN list.

**Note**: The `AsnListViewSet` class can be customized further by modifying the queryset, serializer class, and other methods to suit specific project requirements.

**Output Example**:
```json
{
    "id": 1,
    "asn_code": "ASN202201010001",
    "asn_status": 1,
    "total_weight": 100,
    "total_volume": 50,
    "total_cost": 200,
    "supplier": "Supplier A",
    "creater": "User A",
    "is_delete": false,
    "create_time": "2022-01-01T10:00:00Z",
    "update_time": "2022-01-01T12:00:00Z"
}
```
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it. 

**parameters**: 
- No parameters are passed explicitly to this function.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None. In the calling context within the get_queryset function, the id obtained from get_project is used to filter AsnListModel objects based on certain conditions.

**Note**: 
- This function is designed to handle the retrieval of a specific key ('pk') from the self.kwargs dictionary.
- It is important to ensure that the 'pk' key exists in the self.kwargs dictionary to avoid potential errors.

**Output Example**: 
- If the 'pk' value exists in self.kwargs and is, for example, 123, the function will return 123. If the 'pk' value is not found or an error occurs, the function will return None.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter and return AsnListModel objects based on specific conditions, including the user's authentication status and the presence of a project ID.

**parameters**: 
- No explicit parameters are passed to this function.

**Code Description**: 
The get_queryset function first retrieves the project ID using the get_project method. It then checks the user's authentication status and filters AsnListModel objects accordingly. If the user is authenticated, it filters objects based on the project ID and certain conditions. If the user is not authenticated, an empty queryset is returned. The function also performs deletion of objects based on a date comparison.

The function utilizes the AsnListModel model to query and filter ASN data in the project. It interacts with the request object to access user authentication information and project ID for filtering data. Additionally, it leverages date comparison logic to delete specific objects from the queryset.

**Note**: 
- The get_queryset function is crucial for retrieving and filtering ASN data based on user authentication and project ID.
- It includes logic to handle empty querysets and deletion of objects based on date conditions.

**Output Example**: 
- Example output can vary based on the authentication status and project ID, returning filtered AsnListModel objects or an empty queryset.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action performed within the AsnListViewSet.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_serializer_class method in the AsnListViewSet class evaluates the action being performed. Depending on the action ('list', 'retrieve', 'destroy', 'create', 'update', 'partial_update'), it returns the corresponding serializer class for handling serialization tasks. If the action is 'list', 'retrieve', or 'destroy', the method returns the ASNListGetSerializer. For 'create', 'ASNListPostSerializer' is returned. 'ASNListUpdateSerializer' is returned for 'update', and 'ASNListPartialUpdateSerializer' is returned for 'partial_update'. In case of an unrecognized action, the method calls the http_method_not_allowed function.

The method plays a crucial role in dynamically selecting the appropriate serializer class to ensure the correct serialization of data based on the action requested within the AsnListViewSet.

**Note**:
Developers should ensure that the actions defined in the method align with the expected behavior of the serializers to maintain consistency in data serialization across different actions.

**Output Example**:
If the action is 'list', the method will return ASNListGetSerializer to handle the serialization of ASN list data for listing purposes.
***
### FunctionDef notice_lang(self)
**notice_lang**: The function of notice_lang is to retrieve the language from the request's HTTP headers and return it as a response.

**parameters**:
- None

**Code Description**:
The `notice_lang` function is a method of the `AsnListViewSet` class in the `views.py` file. It is responsible for retrieving the language from the HTTP headers of the request and returning it as a response. The function uses the `request.META.get('HTTP_LANGUAGE')` method to access the value of the 'HTTP_LANGUAGE' header from the request's metadata. This header is typically set by the client to indicate the preferred language for the response.

The function then passes the retrieved language value to the `FBMsg` class from the `utils/fbmsg.py` file. The `FBMsg` class is a utility class that provides a collection of error and success messages with corresponding codes. It is used to generate informative responses for various scenarios.

The `notice_lang` function returns the response generated by the `FBMsg` class, which includes the code, message, and data fields. The code represents the status of the operation, the message provides a description of the status, and the data field can be used to pass additional information.

**Note**:
- The `notice_lang` function relies on the `request.META.get('HTTP_LANGUAGE')` method to retrieve the language from the request's HTTP headers.
- The `FBMsg` class is used to generate informative responses with error and success messages.

**Output Example**:
```python
{
    "code": "200",
    "msg": "Success",
    "data": "en-US"
}
```
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of an ASN (Advanced Shipping Notice) entry by generating a unique ASN code, validating the data, saving the entry, and creating a corresponding scanner entry.

**parameters**:
- request: Represents the HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first extracts data from the request object and appends the 'openid' attribute with the authenticated user's openid. It then checks if a custom ASN code is provided in the request parameters. If a custom ASN code exists, it assigns it to the 'asn_code' attribute in the data. Otherwise, it generates a new ASN code based on the current date and the last ASN code in the database for the user.

After determining the ASN code, the function calculates the 'bar_code' attribute by hashing the ASN code using the Md5 class. It then initializes a serializer with the data, validates the serializer, and saves the data to the database. Additionally, it creates a scanner entry related to the ASN creation.

Finally, the function returns a response with the serialized data and a success status along with the appropriate headers.

**Note**: This function is a crucial part of the ASN creation process in the project. It ensures the generation of unique ASN codes, data validation, and database entry creation. The function interacts with the AsnListModel to fetch and manipulate ASN data and utilizes the Md5 class to generate a hashed barcode for the ASN.

**Output Example**:
```json
{
    "asn_code": "ASN2022010101",
    "bar_code": "2b3e4f5a6c..."
    // Other ASN data fields
}
```
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete an ASN (Advanced Shipping Notice) detail after performing necessary validations and updates.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the HTTP request.
- pk: The primary key of the ASN detail to be deleted.

**Code Description**:
The destroy function first retrieves the ASN detail object based on the provided primary key. It then checks if the owner of the ASN detail matches the authenticated user. If the ASN status is '1', it marks the ASN detail as deleted, updates related stock quantities, and saves the changes. Finally, it returns a response with the updated ASN detail data.

The function ensures data integrity by verifying ownership and ASN status before allowing deletion. It also updates related stock quantities to reflect the deletion of goods from the inventory.

**Note**: This function is crucial for managing ASN details and ensuring data consistency within the system.

**Output Example**:
```json
{
    "asn_code": "ASN123",
    "asn_status": 1,
    "supplier": "Supplier A",
    ...
    "is_delete": true,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T08:00:00"
}
```
***
## ClassDef AsnDetailViewSet
**AsnDetailViewSet**: The function of AsnDetailViewSet is to handle the CRUD (Create, Retrieve, Update, Delete) operations for the AsnDetailModel objects.

**Attributes**:
- pagination_class: Specifies the pagination class to be used for paginating the list view.
- filter_backends: Specifies the filter backends to be used for filtering the queryset.
- ordering_fields: Specifies the fields that can be used for ordering the queryset.
- filter_class: Specifies the filter class to be used for filtering the queryset.

**Code Description**:
The AsnDetailViewSet class is a subclass of the ModelViewSet class provided by the Django REST Framework. It provides the implementation for the various actions that can be performed on the AsnDetailModel objects.

The get_project method is a helper method that retrieves the project id from the request's kwargs. It is used to get the project id for filtering the queryset.

The get_queryset method is used to retrieve the queryset of AsnDetailModel objects that will be returned by the view. It checks if the user is authenticated and retrieves the objects based on the project id and the user's openid. If the user is not authenticated, an empty queryset is returned.

The get_serializer_class method is used to determine the serializer class to be used based on the action of the viewset. Different serializer classes are used for different actions such as list, retrieve, create, and update.

The create method is overridden to provide custom logic for creating the AsnDetailModel objects. It handles the creation of the objects based on the request data and performs additional checks and operations. It checks if the ASN code and supplier exist, and then creates the AsnDetailModel objects and updates the stocklist accordingly.

The update method is overridden to provide custom logic for updating the AsnDetailModel objects. It handles the update of the objects based on the request data and performs additional checks and operations. It checks if the ASN code, supplier, and ASN status are valid, and then updates the AsnDetailModel objects and stocklist accordingly.

**Note**: The AsnDetailViewSet class provides the implementation for handling the CRUD operations for the AsnDetailModel objects. It includes methods for retrieving, creating, and updating the objects, as well as helper methods for filtering and determining the serializer class. It also includes custom logic for handling the creation and update of the objects, including checks and operations on related models.

**Output Example**: 
{
    "detail": "success"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None. This function is used to extract the 'pk' value, which is typically an identifier for a specific project.

In the calling object get_queryset, the get_project function is invoked to obtain the 'id' value. Depending on the presence of the 'id' value and the authenticated user in the request, different queries are executed on the AsnDetailModel to filter and return specific project details.

**Note**: 
- The get_project function assumes that the 'pk' key exists in the self.kwargs dictionary. 
- It is important to handle the None return value appropriately in the calling code to avoid any unexpected behavior.

**Output Example**: 
If the 'pk' value exists in self.kwargs:
```
123
```
If the 'pk' value does not exist in self.kwargs:
```
None
```
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve the project ID from the self.get_project() method and filter the AsnDetailModel objects based on the ID, user authentication, and deletion status.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_queryset function first obtains the project ID by calling the self.get_project() method. It then checks if the request has an authenticated user. If the project ID is None, it filters the AsnDetailModel objects based on the authenticated user's OpenID and non-deleted status. If the project ID is not None, it further filters the objects based on the OpenID, ID, and non-deleted status. If there is no authenticated user, it returns an empty queryset.

This function is crucial for retrieving specific project details based on the project ID, user authentication, and deletion status. It ensures that only relevant and non-deleted data is fetched from the database.

**Note**:
- The get_queryset function relies on the self.get_project() method to obtain the project ID.
- It performs different filtering based on the presence of the project ID and user authentication.
- Developers should handle the returned queryset appropriately in the calling code to process the retrieved data effectively.

**Output Example**:
```
<QuerySet [<AsnDetailModel: ASN Detail object (1)>, <AsnDetailModel: ASN Detail object (2)>]>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_serializer_class function contains conditional statements to select the serializer class based on the action type. If the action is 'list' or 'retrieve', it returns the ASNDetailGetSerializer. For the 'create' action, it returns the ASNDetailPostSerializer. If the action is 'update', the function returns the ASNDetailUpdateSerializer. In case none of the specified actions match, it calls the http_method_not_allowed method with the request parameter.

This function plays a crucial role in dynamically selecting the appropriate serializer class for different actions within the AsnDetailViewSet. By returning specific serializers based on the action, it ensures that the data is serialized correctly for operations like listing, retrieving, creating, and updating ASN details.

**Note**:
Developers should ensure that the actions specified in this function align with the corresponding serializers to maintain consistency in data serialization and processing.

**Output Example**:
- ASNDetailGetSerializer (for 'list' and 'retrieve' actions)
- ASNDetailPostSerializer (for 'create' action)
- ASNDetailUpdateSerializer (for 'update' action)
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of an ASN (Advanced Shipping Notice) in the project.

**parameters**:
- request: The request object containing the HTTP request data.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function is responsible for creating an ASN in the project. It first retrieves the request data and checks if an ASN with the given ASN code exists for the authenticated user. If the ASN code exists, it further checks if the supplier specified in the request data exists for the user. If both conditions are met, it proceeds with the creation process.

Inside a loop, the function creates a check_data dictionary containing the necessary data for creating an AsnDetailModel object. It then validates the check_data using the serializer obtained from the get_serializer method. If the validation is successful, the function appends the check_data to the post_data_list.

After the loop, the function creates or updates the stocklist for each goods code in the request data. It calculates the goods weight, volume, and cost based on the goods details and quantity. If the stocklist for the goods code already exists, it updates the goods quantity and ASN stock. Otherwise, it creates a new stocklist entry.

Next, the function creates an AsnDetailModel object for each goods code in the request data. It calculates the goods weight, volume, and cost based on the goods details and quantity. The created AsnDetailModel objects are appended to the post_data_list.

The function then calculates the total weight, volume, and cost by summing the corresponding values from the weight_list, volume_list, and cost_list. It retrieves the supplier city and warehouse city for further calculations.

The function queries the transportation objects based on the supplier city and warehouse city. If there are transportation fees available, it calculates the transportation cost for each transportation supplier and appends the details to the transportation_res dictionary.

The function uses the bulk_create method to efficiently create the AsnDetailModel objects in the database. It then checks for duplicate goods codes in the created AsnDetailModel objects and combines their quantities, weights, volumes, and costs into a single entry.

Finally, the function updates the AsnListModel entry with the supplier, total weight, total volume, total cost, and transportation fee. It returns a success response if the creation process is completed successfully.

**Note**: This function relies on the existence of various models, such as AsnListModel, AsnDetailModel, supplier, goods, stocklist, and transportation. It performs validations, calculations, and database operations to create an ASN and update related data.

**Output Example**: 
{
    "detail": "success"
}
***
### FunctionDef update(self, request)
**update**: The function of update is to update the ASN (Advanced Shipping Notice) details based on the provided request data.

**Parameters**:
- request: The HTTP request object.
- *args: Variable length argument list.
- **kwargs: Arbitrary keyword arguments.

**Code Description**:
The update function is a method defined within the AsnDetailViewSet class in the views.py file. It is responsible for updating the ASN details based on the data provided in the request.

The function begins by retrieving the request data using `self.request.data`. It then checks if an ASN entry exists in the AsnListModel table with the specified openid, asn_code, asn_status, and is_delete values. If the entry exists, it proceeds to check if a supplier entry exists in the supplier table with the specified openid, supplier_name, and is_delete values.

Next, the function retrieves the staff_name from the staff table based on the provided openid and HTTP_OPERATOR value from the request's META data. It then iterates over the goods_code list in the request data and performs the following operations for each item:

1. Creates a check_data dictionary with the necessary details for the ASN detail entry.
2. Initializes a serializer object with the check_data and validates it.
3. Retrieves the ASN detail list based on the provided openid, asn_code, and is_delete values.
4. Updates the goods_qty and asn_stock values in the stocklist table based on the retrieved goods_qty_change object.
5. Marks the current ASN detail entry as deleted and saves the changes.
6. Retrieves the goods_detail object from the goods table based on the provided openid and goods_code values.
7. Calculates the goods_weight, goods_volume, and goods_cost based on the retrieved goods_detail and the corresponding goods_qty from the request data.
8. Updates the goods_qty and asn_stock values in the stocklist table if an entry exists for the current goods_code, otherwise creates a new entry.
9. Creates an AsnDetailModel object with the necessary details and appends it to the post_data_list.
10. Appends the goods_weight and goods_volume to the weight_list and volume_list, respectively.

After iterating over all the goods_code items, the function calculates the total_weight and total_volume by summing the values in the weight_list and volume_list, respectively. It retrieves the supplier_city and warehouse_city from the supplier and warehouse tables, respectively. It then retrieves the transportation_fee objects from the transportation table based on the send_city and receiver_city values matching the supplier_city and warehouse_city values, respectively.

If there are transportation_fee objects retrieved, the function iterates over them and calculates the transportation_cost based on the total_weight, total_volume, weight_fee, volume_fee, and min_payment values. It appends the transportation_supplier and transportation_cost to the transportation_list, which is then assigned to the transportation_res dictionary.

The function uses the bulk_create method to create the ASN detail entries in the AsnDetailModel table using the post_data_list. It then retrieves the check_data objects from the AsnDetailModel table based on the provided openid and asn_code values. If there are multiple check_data objects with the same goods_code, it combines their quantities, weights, volumes, and costs into a single entry and deletes the redundant entries.

Finally, the function updates the supplier, total_weight, total_volume, and transportation_fee fields in the AsnListModel table based on the provided openid and asn_code values. It returns a success response with a status code of 200.

**Note**: This function relies on the existence of related models such as AsnListModel, supplier, staff, goods, stocklist, and transportation. It performs various checks and validations to ensure the integrity of the data and updates the corresponding tables accordingly.

**Output Example**:
{
    "detail": "success"
}
***
## ClassDef AsnViewPrintViewSet
**AsnViewPrintViewSet**: The function of AsnViewPrintViewSet is to handle the retrieval of data and provide a response in a list format.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: 'id', 'create_time', 'update_time'
- filter_class: AsnListFilter

**Code Description**:
The `AsnViewPrintViewSet` class is a subclass of `viewsets.ModelViewSet` that facilitates the retrieval of data in a list format. It includes methods to retrieve a specific project, get the queryset based on user authentication and project ID, determine the serializer class based on the action, and retrieve detailed information for a specific object.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the queryset of `AsnListModel` based on user authentication and project ID. The `get_serializer_class` method determines the serializer class based on the action type. The `retrieve` method retrieves detailed information for a specific object, including related details such as ASN details, supplier details, and warehouse details.

The class attributes define the pagination, filtering, ordering, and filtering class to be used in the view set.

This class interacts with the `MyPageNumberPagination` class for pagination, `DjangoFilterBackend` and `OrderingFilter` for filtering, and `AsnListFilter` for custom filtering based on specified fields.

**Note**: The `AsnViewPrintViewSet` class is designed to handle data retrieval operations and provide responses in a structured list format. It integrates with various components to manage pagination, filtering, and detailed data retrieval functionalities.

**Output Example**:
{
    "asn_detail": [...],
    "supplier_detail": {
        "supplier_name": "Supplier ABC",
        "supplier_city": "City XYZ",
        "supplier_address": "123 Supplier St.",
        "supplier_contact": "123-456-7890"
    },
    "warehouse_detail": {
        "warehouse_name": "Warehouse 123",
        "warehouse_city": "City XYZ",
        "warehouse_address": "456 Warehouse St.",
        "warehouse_contact": "987-654-3210"
    }
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- self: Represents the instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during the process, it returns None.

In the code snippet provided, the get_project function is called within the get_queryset function of the AsnViewPrintViewSet class. In the get_queryset function, the id value is obtained by invoking get_project. Depending on the presence of the request user and the id value, different queries are executed on the AsnListModel model. If the id is None, all objects with a specific openid and is_delete=False are returned. Otherwise, the object with the matching id, openid, and is_delete=False is returned. If there is no request user, an empty queryset is returned.

**Note**: 
- Ensure that the 'pk' value is present in the self.kwargs dictionary to avoid potential exceptions.
- Handle exceptions appropriately if the 'pk' value is not found in self.kwargs.

**Output Example**: 
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve the 'id' value from the self.get_project() method and return a queryset based on certain conditions.

**parameters**:
- self: Represents the instance of the class.

**Code Description**:
The get_queryset function within the AsnViewPrintViewSet class retrieves the 'id' value by calling the self.get_project() method. It then checks if the request user exists. If the 'id' is None, the function filters AsnListModel objects based on the openid and is_delete=False conditions. If the 'id' is not None, it filters objects based on the openid, id, and is_delete=False conditions. If there is no request user, an empty queryset is returned using AsnListModel.objects.none().

The function utilizes the AsnListModel model to filter and return specific ASN objects based on the provided conditions. By leveraging the get_project method to obtain the 'id' value, it dynamically adjusts the queryset returned depending on the presence of the request user and the 'id' value.

**Note**:
- Ensure that the self.get_project() method returns a valid 'id' value to avoid unexpected behavior.
- The function handles different scenarios based on the existence of the request user and the 'id' value to tailor the queryset accordingly.

**Output Example**:
If the request user exists and the 'id' value is 1, the function will return a queryset containing the ASN object with the matching id, openid, and is_delete=False criteria.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**Code Description**:
The get_serializer_class function checks the action being performed and returns the ASNDetailGetSerializer if the action is 'retrieve'. This serializer is responsible for serializing ASN (Advanced Shipping Notice) detail data for retrieval purposes. It ensures that the data is formatted correctly for read-only operations, excluding sensitive fields and marking certain fields as read-only for security and data integrity. The ASNDetailGetSerializer is utilized in various views within the project to handle retrieval actions.

**Note**:
Developers can rely on the get_serializer_class function to dynamically select the appropriate serializer class based on the action, ensuring the proper serialization of ASN detail data for retrieval operations.

**Output Example**:
ASNDetailGetSerializer
***
### FunctionDef retrieve(self, request, pk)
**retrieve**: The function of retrieve is to fetch detailed information related to an Advanced Shipping Notice (ASN) based on the provided primary key (pk).

**parameters**:
- request: Represents the request object containing metadata about the HTTP request.
- pk: The primary key used to retrieve the specific ASN details.

**Code Description**:
The retrieve function first retrieves the ASN object based on the provided primary key (pk). It then performs a validation check to ensure that the user requesting the data matches the owner of the ASN (based on openid). If the ownership validation fails, an APIException is raised with a corresponding message. 

If the ownership validation passes, the function proceeds to gather additional details related to the ASN. It fetches ASN detail records, supplier details, and warehouse details based on the authenticated user's openid. The retrieved data is then structured into a context dictionary containing ASN details, supplier details, and warehouse details.

Finally, the function returns a response containing the structured context data with a success status code of 200.

**Note**:
Developers utilizing the retrieve function should ensure that the ownership validation logic aligns with the project's security requirements. Additionally, the function provides a structured approach to retrieve and present ASN details along with associated supplier and warehouse information.

**Output Example**:
```json
{
    "asn_detail": [
        {
            "asn_code": "ASN123",
            "goods_code": "G123",
            "goods_desc": "Product ABC",
            "goods_qty": 100,
            ...
        },
        ...
    ],
    "supplier_detail": {
        "supplier_name": "Supplier X",
        "supplier_city": "City A",
        ...
    },
    "warehouse_detail": {
        "warehouse_name": "Warehouse Y",
        "warehouse_city": "City B",
        ...
    }
}
```
***
## ClassDef AsnPreLoadViewSet
**AsnPreLoadViewSet**: The function of AsnPreLoadViewSet is to handle the retrieval of data lists and provide specific functionalities for creating and updating ASN (Advanced Shipping Notice) related information.

**attributes**:
- pagination_class: Specifies the pagination class to control the number of items displayed per page.
- filter_backends: Defines the filter backends to be used for filtering the queryset.
- ordering_fields: Specifies the fields based on which the queryset can be ordered.
- filter_class: Defines the filter class to be used for filtering the queryset based on specific fields.

**Code Description**:
The `AsnPreLoadViewSet` class extends `viewsets.ModelViewSet` and includes methods to retrieve data lists, get the project ID, get the queryset based on user authentication and project ID, determine the serializer class based on the action, and handle the creation of ASN data.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the queryset of `AsnListModel` based on the user authentication and project ID, returning specific data accordingly.

The `get_serializer_class` method determines the serializer class to be used based on the action performed. If the action is 'create', it returns a specific serializer; otherwise, it handles the method not allowed scenario.

The `create` method handles the creation of ASN data, performs validations, updates the ASN status, and adjusts the stock quantities accordingly. It also ensures data integrity and returns the updated data with appropriate status codes.

**Note**: The `AsnPreLoadViewSet` class provides a structured way to handle data retrieval, creation, and updates related to ASN information within the system.

**Output Example**:
```json
{
    "id": 1,
    "asn_code": "ASN001",
    "asn_status": 2,
    "total_weight": 100,
    "total_volume": 50,
    "total_cost": 500,
    "supplier": "Supplier A",
    "creater": "User123",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:00:00"
}
```
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value; otherwise, it returns None. This function is used to extract the 'pk' value which can be used to identify a specific project.

In the calling object get_queryset, the get_project function is invoked to obtain the 'id' value. This 'id' is then used to filter the AsnListModel objects based on certain conditions, such as the 'openid', 'id', and 'is_delete' attributes. If the request user is authenticated, the function filters the AsnListModel objects accordingly. If the 'id' is None, it filters based on 'openid' and 'is_delete' attributes. If the 'id' is not None, it filters based on 'openid', 'id', and 'is_delete' attributes. If the request user is not authenticated, an empty queryset is returned.

**Note**: 
- It is important to ensure that the 'pk' value is correctly passed to the get_project function to retrieve the desired project ID.
- Handle exceptions appropriately when using the get_project function to account for scenarios where the 'pk' value is not available.

**Output Example**: 
If the 'pk' value is 123, the get_project function will return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter AsnListModel objects based on specific conditions such as 'openid', 'id', and 'is_delete' attributes, depending on the authentication status of the request user.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_queryset function first retrieves the 'id' by calling the get_project method. It then checks if the request user is authenticated. If authenticated, it filters the AsnListModel objects based on the 'openid', 'id', and 'is_delete' attributes. If 'id' is None, it filters by 'openid' and 'is_delete'. If 'id' is not None, it filters by 'openid', 'id', and 'is_delete'. If the request user is not authenticated, an empty queryset is returned.

The function utilizes the AsnListModel model to perform the filtering operation, ensuring that only relevant ASN entries are retrieved based on the specified criteria.

**Note**:
- The get_queryset function is crucial for retrieving specific ASN entries based on the provided conditions, which helps in managing and displaying ASN data effectively.
- It is essential to handle user authentication properly to ensure the correct filtering of AsnListModel objects.
- Developers should understand the filtering logic implemented in get_queryset to customize it according to project requirements.

**Output Example**:
If the request user is authenticated and 'id' is 123, the function will return AsnListModel objects filtered by 'openid', 'id', and 'is_delete' attributes.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed.

**parameters**: 
- self: The instance of the class.
  
**Code Description**:
The get_serializer_class function checks the action being performed. If the action is 'create', it returns the ASNListPartialUpdateSerializer from the serializers module. Otherwise, it calls the http_method_not_allowed method with the request parameter.

The ASNListPartialUpdateSerializer is responsible for serializing and validating partial updates for ASN list data. It defines the 'asn_code' attribute as a character field that is not read-only and required. The 'asn_code' field is validated using the asn_data_validate function to ensure data integrity.

Within the Meta class of the ASNListPartialUpdateSerializer, the model is set to AsnListModel, and certain fields such as 'is_delete', 'id', 'create_time', and 'update_time' are specified as excluded or read-only.

The get_serializer_class function plays a crucial role in determining the appropriate serializer class based on the action being performed, ensuring that the data is processed correctly during partial updates to ASN list data.

**Note**:
Developers should ensure that the input data provided to the 'asn_code' field meets the validation criteria set by the asn_data_validate function to avoid errors during serialization. The proper functioning of the get_serializer_class method is essential for selecting the appropriate serializer class based on the action performed.

**Output Example**:
```python
return serializers.ASNListPartialUpdateSerializer
```
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to update the ASN status and related stock quantities based on certain conditions.

**parameters**:
- request: Represents the HTTP request object.
- pk: Represents the primary key of the object.

**Code Description**:
The create function first retrieves the object using the primary key (pk) and checks if the owner of the object matches the authenticated user. It then verifies the ASN status and updates it accordingly. If the ASN status is 1 and the required ASN details exist, the function updates the ASN status to 2 and adjusts the stock quantities related to the ASN details. Finally, it saves the changes, generates a response with the updated data, and returns a success status.

The function interacts with the AsnDetailModel class to retrieve and update ASN details, specifically related to stock quantities. It also utilizes the stocklist model to adjust the stock quantities based on the ASN details.

**Note**: This function is crucial for managing ASN statuses and stock quantities in the project. It performs validations and updates based on specific criteria to ensure data integrity and consistency.

**Output Example**:
```json
{
    "asn_code": "12345",
    "asn_status": 2,
    "supplier": "Supplier A",
    ...
}
```
***
## ClassDef AsnPreSortViewSet
**AsnPreSortViewSet**: The function of AsnPreSortViewSet is to handle the retrieval of data lists and provide specific actions based on the HTTP methods used.

**Attributes**:
- pagination_class: Specifies the pagination class to control the pagination of data.
- filter_backends: Defines the filter backends to be used for filtering data.
- ordering_fields: Specifies the fields based on which the data should be ordered.
- filter_class: Defines the filter class to be used for filtering the queryset.

**Code Description**:
The `AsnPreSortViewSet` class is a subclass of `viewsets.ModelViewSet` that provides functionality to retrieve data lists and perform specific actions based on the HTTP methods used. It includes methods to get the project ID, get the queryset based on the user and project ID, get the serializer class based on the action, and handle the creation of data with specific validations.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the queryset of `AsnListModel` based on the user and project ID, ensuring that only relevant data is returned. The `get_serializer_class` method determines the serializer class to be used based on the action performed.

The `create` method handles the creation of data, performs validations based on the user's authorization, updates the status of the data, and adjusts stock quantities accordingly. It also updates the status of related data and returns the serialized data with appropriate headers.

This class interacts with other components such as serializers, models, and filters to manage the retrieval and manipulation of data within the system effectively.

**Note**: The `AsnPreSortViewSet` class is designed to provide a structured way to handle data retrieval and manipulation operations within the system. It integrates with various components to ensure data consistency and security.

**Output Example**:
{
    "id": 1,
    "asn_code": "ASN001",
    "asn_status": 3,
    "total_weight": 100.5,
    ...
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object.

**parameters**:
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value; otherwise, it returns None. This function is used to extract the 'pk' value which is then utilized in other parts of the code logic.

In the code snippet provided, the get_project function is called within the get_queryset function of the AsnPreSortViewSet class. In get_queryset, the 'id' variable is assigned the value returned by get_project. Depending on the existence of the 'id' value and the authentication status of the user, different queries are executed on the AsnListModel objects.

**Note**: 
- The get_project function is designed to handle exceptions and return None if the 'pk' value cannot be retrieved.
- It is important to ensure that the 'pk' value is correctly passed to the get_project function for it to function as intended.

**Output Example**: 
If the 'pk' value is successfully retrieved, the function may return an integer value representing the 'pk'. If the retrieval fails, the function will return None.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve ASNListModel objects based on specific conditions related to the user's authentication status and the 'id' value obtained from the get_project function.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks the authentication status of the user. If the user is authenticated, it filters the ASNListModel objects based on the 'openid', 'id', and 'is_delete' fields. If the 'id' value is None, it filters by 'openid' and 'is_delete' only. If the user is not authenticated, it returns an empty queryset.

This function is a part of the AsnPreSortViewSet class and plays a crucial role in determining the queryset of ASNListModel objects to be returned based on the user's authentication status and the 'id' value.

**Note**:
- The get_queryset function relies on the get_project function to obtain the 'id' value, which influences the filtering of ASNListModel objects.
- It is essential to ensure proper user authentication to retrieve the correct queryset of ASNListModel objects.

**Output Example**:
An example output of the get_queryset function could be a filtered queryset of ASNListModel objects based on the specified conditions.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action performed. 

**parameters**: This Function does not take any parameters.

**Code Description**: The get_serializer_class function checks the action being performed. If the action is 'create', it returns the ASNListUpdateSerializer from asn/serializers.py. Otherwise, it calls the http_method_not_allowed method to handle the request.

The ASNListUpdateSerializer is responsible for serializing and validating data related to the AsnListModel model for updating ASN lists. It defines the 'asn_code' field as a required CharField and utilizes the asn_data_validate function for validation. The serializer class excludes the 'is_delete' field from serialization and sets 'id', 'create_time', and 'update_time' fields as read-only.

In the project, when the action is 'create', the get_serializer_class method returns the ASNListUpdateSerializer to handle the creation of ASN lists.

**Note**: Developers should ensure that data provided for updating ASN lists adheres to the validation rules set by the serializer to avoid processing errors.

**Output Example**:
```python
return serializers.ASNListUpdateSerializer
```
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to update the ASN status and related stock quantities based on certain conditions.

**parameters**:
- self: The instance of the class.
- request: The HTTP request object.
- pk: The primary key of the object.

**Code Description**:
The create function first retrieves the object using the primary key (pk) and checks if the owner of the object matches the authenticated user. If the conditions are met, and the ASN status is 2, the function updates the ASN status to 3 and performs stock quantity adjustments for related goods. It then saves the changes, generates a response with the updated data, and returns a success status.

The function utilizes the AsnDetailModel class to filter ASN details, update stock quantities, and manage the ASN status. It ensures data integrity by verifying ownership and ASN status before proceeding with the updates.

**Note**: This function is crucial for managing ASN statuses and stock quantities in the project. It should be used with caution and in conjunction with other components to maintain data consistency and integrity.

**Output Example**:
```json
{
    "asn_code": "12345",
    "asn_status": 3,
    "supplier": "Supplier A",
    ...
}
```
***
## ClassDef AsnSortedViewSet
**AsnSortedViewSet**: The AsnSortedViewSet class is a viewset that provides functionality for sorting and updating ASN (Advanced Shipping Notice) data.

**Attributes**:
- `pagination_class`: Specifies the pagination class to be used for the viewset.
- `filter_backends`: Defines the filter backends to be used for the viewset.
- `ordering_fields`: Specifies the fields that can be used for ordering the queryset.
- `filter_class`: Specifies the filter class to be used for filtering the queryset.

**Code Description**:
The AsnSortedViewSet class is a subclass of the ModelViewSet class provided by the Django REST Framework. It inherits the default CRUD (Create, Retrieve, Update, Delete) operations from the ModelViewSet class and adds additional functionality for sorting and updating ASN data.

The get_project method is used to retrieve the project ID from the URL parameters. It returns the project ID if it exists, otherwise it returns None.

The get_queryset method is used to retrieve the queryset of AsnListModel objects based on the user and project ID. If the user is authenticated and a project ID is provided, it filters the queryset based on the user's openid, project ID, and is_delete flag. If the user is not authenticated or no project ID is provided, it returns an empty queryset.

The get_serializer_class method is used to determine the serializer class to be used based on the action being performed. If the action is 'create' or 'update', it returns the ASNSortedPostSerializer class from the serializers module. Otherwise, it returns the http_method_not_allowed method with the current request as an argument.

The create method is used to handle the creation of sorted ASN data. It first retrieves the ASNListModel object based on the provided project ID. If the ASN status is not 3, it raises an APIException with a detail message. Otherwise, it processes the goodsData list from the request data and updates the corresponding ASNDetailModel and stocklist objects based on the provided goods actual quantity. It also updates the total cost of the ASNListModel object. Finally, it updates the ASN status based on the presence of ASNDetailModel objects with status 4 or 5. It returns a success response with a status code of 200.

The update method is used to handle the updating of sorted ASN data. It first retrieves the ASNListModel object based on the provided ASN code. If the ASN status is not 3, it raises an APIException with a detail message. Otherwise, it processes the goodsData list from the request data and updates the corresponding ASNDetailModel and stocklist objects based on the provided goods actual quantity. It also updates the total cost of the ASNListModel object. Finally, it updates the ASN status based on the presence of ASNDetailModel objects with status 4 or 5. It returns a success response with a status code of 200.

**Note**: The AsnSortedViewSet class provides functionality for sorting and updating ASN data. It uses the MyPageNumberPagination class for pagination, the DjangoFilterBackend and OrderingFilter classes for filtering, and the AsnListFilter class for custom filtering. The create and update methods handle the creation and updating of sorted ASN data, respectively.

**Output Example**:
{
    "detail": "success"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly, as the function accesses 'pk' from self.kwargs.

**Code Description**: 
The get_project function first attempts to retrieve the 'pk' value from self.kwargs. If successful, it returns the value. If an exception occurs during this process, it returns None.

This function is utilized within the get_queryset function of the AsnSortedViewSet class in asn/views.py. In get_queryset, the get_project function is called to obtain the 'id' value, which is then used to filter AsnListModel objects based on certain conditions.

**Note**: 
- Ensure that self.kwargs contains the 'pk' key to avoid any exceptions.
- Handle the returned value accordingly, considering the possibility of None.

**Output Example**: 
If 'pk' is present in self.kwargs and has a value of 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve ASNListModel objects based on specific conditions after obtaining the 'id' value from the get_project function.

**parameters**:
- No explicit parameters are passed to the function.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if the request user exists and filters the ASNListModel objects accordingly. If the 'id' is None, it filters objects based on the openid and deletion status. If the 'id' is not None, it filters objects based on openid, id, and deletion status. If the request user does not exist, it returns an empty queryset.

This function is a part of the AsnSortedViewSet class in asn/views.py. It interacts with the AsnListModel model to retrieve ASN data based on specific criteria. By utilizing the get_project function to obtain the 'id' value, get_queryset ensures the retrieval of relevant ASNListModel instances for further processing.

**Note**:
- Ensure that the get_project function is correctly implemented to retrieve the 'id' value.
- Understand the filtering logic based on the 'id' value and request user existence.
- Handle the returned queryset accordingly based on the business logic of the project.

**Output Example**:
If the request user exists and the 'id' is not None, the function may return a queryset of ASNListModel objects filtered by openid, id, and deletion status.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**parameters**: 
- self: The instance of the class.
  
**Code Description**:
The get_serializer_class function checks the action being performed. If the action is 'create' or 'update', it returns the ASNSortedPostSerializer class from the serializers module. Otherwise, it calls the http_method_not_allowed method with the request parameter.

This function plays a crucial role in dynamically selecting the serializer class based on the action, ensuring that the data is serialized and validated appropriately for further processing.

**Note**: Developers should ensure that the actions 'create' and 'update' are handled correctly to utilize the ASNSortedPostSerializer for serialization. Proper error handling for other actions is essential to maintain the integrity of the data processing flow.

**Output Example**:
ASNSortedPostSerializer
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to handle the creation of ASN details by processing the received data, updating quantities, costs, and statuses accordingly.

**parameters**:
- self: The instance of the class.
- request: The request object containing the data.
- pk: The primary key used to retrieve the object.

**Code Description**:
The create function first retrieves the object using the provided primary key. It then checks if the ASN status is not equal to 3, raising an exception if the condition is not met. Subsequently, the function processes the data received in the request, iterates over the goods data, and updates the ASN details based on the actual quantities provided.

For each goods item, the function calculates the shortage or excess quantities, adjusts costs, updates total costs, and modifies stock quantities accordingly. Depending on the quantity checks, the ASN status is updated to reflect the processing status. Finally, the function updates the overall ASN status and returns a success response.

The function interacts with the AsnDetailModel class to retrieve and update ASN details, goods class to retrieve goods information, and stocklist class to adjust stock quantities.

**Note**: This function is crucial for managing ASN details and should be used in conjunction with other components related to ASN processing and stock management to ensure data consistency and accuracy.

**Output Example**:
{"detail": "success"}
***
### FunctionDef update(self, request)
**update**: The function of update is to process and update the ASN (Advanced Shipping Notice) details based on the data provided in the request. It involves checking and modifying various fields related to goods quantities, costs, and statuses.

**parameters**:
- request: Represents the HTTP request object.
- *args: Represents positional arguments.
- **kwargs: Represents keyword arguments.

**Code Description**:
The update function first retrieves the data from the request and filters the queryset based on the ASN code. It then performs validations on the ASN status and iterates through the goods data to update the corresponding details. Depending on the actual quantity of goods, it adjusts the shortage, excess, and cost values, updates the total cost, and modifies the stock quantities. The function also handles different scenarios such as goods shortages, excess, and status updates. Finally, it updates the overall ASN status and returns a success response.

The update function interacts with the AsnDetailModel, stocklist, and goods models to fetch and update the necessary information related to goods and ASN details. It ensures data integrity and consistency by performing calculations and adjustments based on the provided goods data.

**Note**:
- Ensure that the request contains valid data for updating the ASN details.
- Verify the logic for goods quantity adjustments and cost calculations.
- Handle different ASN status updates based on the goods data provided.

**Output Example**:
{"detail": "success"}
***
## ClassDef MoveToBinViewSet
**MoveToBinViewSet**: The MoveToBinViewSet class is a viewset that handles the creation and updating of data lines in the MoveToBin model.

**Attributes**:
- pagination_class: Specifies the pagination class to be used for paginating the data lines.
- filter_backends: Specifies the filter backends to be used for filtering the data lines.
- ordering_fields: Specifies the fields that can be used for ordering the data lines.
- filter_class: Specifies the filter class to be used for filtering the data lines.

**Code Description**:
The MoveToBinViewSet class is a subclass of the ModelViewSet class provided by the Django REST Framework. It is used to handle the CRUD operations for the MoveToBin model.

The get_project method is a helper method that retrieves the project id from the request's kwargs.

The get_queryset method is used to retrieve the queryset of MoveToBinModel objects that will be filtered. It checks if the user is authenticated and retrieves the objects based on the project id and the user's openid. If the user is not authenticated, an empty queryset is returned.

The get_serializer_class method is used to determine the serializer class to be used based on the action of the viewset. Different serializer classes are used for different actions such as retrieve, create, and update.

The create method is overridden to provide custom logic for creating a data line in the MoveToBin model. It performs various checks and operations based on the request data and raises APIException with appropriate error messages if any validation fails. If all validations pass, the data line is created and related objects are updated accordingly.

The update method is overridden to provide custom logic for updating a data line in the MoveToBin model. It performs similar checks and operations as the create method but for updating an existing data line.

**Note**: The MoveToBinViewSet class provides a way to handle the creation and updating of data lines in the MoveToBin model. It includes custom logic for validation and updating related objects. This viewset can be used in conjunction with other components of the Django REST Framework to build a complete API for managing the MoveToBin data lines.

**Output Example**:
{
    "detail": "success"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the value; otherwise, it returns None. This function is used to extract the 'pk' value which is then utilized in other parts of the code for further processing.

In the context of the project, the get_project function is called within the get_queryset function of the MoveToBinViewSet class. In get_queryset, the id variable is assigned the value obtained from get_project. This id value is then used to filter AsnDetailModel objects based on certain conditions, such as the user authentication status and the 'pk' value.

**Note**:
It is important to handle exceptions properly when using this function to ensure robust error management.

**Output Example**:
If the 'pk' value is successfully retrieved and is, for example, 123, the function will return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The `get_queryset` function is responsible for retrieving the queryset of AsnDetailModel objects based on certain conditions.

**Parameters**:
- `self`: The instance of the class.

**Code Description**:
The `get_queryset` function is a method defined within the `MoveToBinViewSet` class in the `views.py` file. It is used to fetch the queryset of `AsnDetailModel` objects based on specific conditions.

The function first calls the `get_project` function to retrieve the `id` value. The `get_project` function attempts to extract the 'pk' value from the `self.kwargs` dictionary and returns it. This `id` value is then used in the subsequent filtering of the `AsnDetailModel` objects.

If the `request.user` is authenticated, the function checks if the `id` is `None`. If it is `None`, it filters the `AsnDetailModel` objects based on the `openid` and `is_delete` fields, returning the filtered queryset. If the `id` is not `None`, it filters the `AsnDetailModel` objects based on the `openid`, `id`, and `is_delete` fields, returning the filtered queryset.

If the `request.user` is not authenticated, the function returns an empty queryset using the `none()` method of the `AsnDetailModel` objects.

The `get_queryset` function is an important part of the `MoveToBinViewSet` class and is used to retrieve the appropriate queryset of `AsnDetailModel` objects based on the provided conditions. It is called within the viewset's other methods to perform further operations on the retrieved queryset.

**Note**:
It is important to note that the `get_queryset` function relies on the `get_project` function to retrieve the `id` value. Therefore, it is necessary to ensure that the `get_project` function is properly implemented and returns the expected value.

**Output Example**:
If the `request.user` is authenticated and the `id` is `None`, the function will return a queryset of `AsnDetailModel` objects filtered by `openid` and `is_delete` fields. For example:
```
<QuerySet [<AsnDetailModel: object1>, <AsnDetailModel: object2>, ...]>
```
If the `request.user` is authenticated and the `id` is not `None`, the function will return a queryset of `AsnDetailModel` objects filtered by `openid`, `id`, and `is_delete` fields. For example:
```
<QuerySet [<AsnDetailModel: object3>, <AsnDetailModel: object4>, ...]>
```
If the `request.user` is not authenticated, the function will return an empty queryset. For example:
```
<QuerySet []>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_serializer_class function checks the action being performed and returns the corresponding serializer class. If the action is 'retrieve', it returns the ASNDetailGetSerializer. If the action is 'create' or 'update', it returns the MoveToBinSerializer. Otherwise, it calls the http_method_not_allowed method.

This function plays a crucial role in selecting the appropriate serializer for different actions within the MoveToBinViewSet. By returning specific serializers based on the action, it ensures that the data is serialized correctly for retrieval, creation, or update operations.

**Note**:
Developers should ensure that the actions 'retrieve', 'create', and 'update' are handled appropriately in the views using this function. Understanding the logic behind selecting different serializers based on actions is essential for maintaining consistency and data integrity in the application.

**Output Example**:
- If the action is 'retrieve', the function returns ASNDetailGetSerializer.
- If the action is 'create' or 'update', the function returns MoveToBinSerializer.
- For other actions, an HTTP method not allowed error is raised.
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to move goods to a bin in the ASN (Advanced Shipping Notice) system.

**parameters**:
- request: The HTTP request object.
- pk: The primary key of the ASN object.

**Code Description**:
The create function is a method defined in the MoveToBinViewSet class in the views.py file. It is responsible for moving goods to a bin in the ASN system. The function takes two parameters: the HTTP request object and the primary key of the ASN object.

The function starts by retrieving the ASN object using the get_object method. It then checks if the openid of the ASN object matches the openid of the authenticated user. If not, it raises an APIException with the message "Cannot delete data which not yours".

Next, the function checks if the asn_status of the ASN object is 4. If not, it raises an APIException with the message "This ASN Status Is Not 4".

If the above conditions are met, the function proceeds to retrieve the data from the request object. It checks if the 'bin_name' key is present in the data. If not, it raises an APIException with the message "Please Enter the Bin Name".

The function then retrieves the bin_detail, asn_detail, and goods_qty_change objects based on the data provided. It also checks if the 'qty' value is greater than 0. If not, it raises an APIException with the message "Move QTY Must > 0".

Next, the function retrieves the staff_name based on the authenticated user's openid and the 'HTTP_OPERATOR' header from the request. It calculates the move_qty by subtracting the sorted_qty and 'qty' from the goods_actual_qty of the ASN object.

If move_qty is greater than 0, the function updates the sorted_qty, sorted_stock, onhand_stock, and other stock quantities of the goods_qty_change object based on the 'qty' value and the bin_property of the bin_detail object. It also updates the goods_damage_qty of the ASN object if the bin_property is 'Damage'. The function then saves the updated objects.

The function creates a new stockbin object with the provided data and other related information. It also creates a qtychangerecorder object to record the quantity change. It checks if there is an existing cyclecount object for the bin and goods combination. If so, it updates the goods_qty of the cyclecount object. Otherwise, it creates a new cyclecount object.

If the empty_label of the bin_detail object is True, it sets it to False and saves the bin_detail object.

If move_qty is equal to 0, the function updates the sorted_qty, asn_status, and other stock quantities similar to the previous case. It also updates the asn_status of the asn_detail object if there are no other ASN objects with the same asn_code and asn_status 4. It creates a new stockbin object, qtychangerecorder object, and cyclecount object similar to the previous case. It also updates the empty_label of the bin_detail object if necessary.

If move_qty is less than 0, the function raises an APIException with the message "Move Qty must < Actual Arrive Qty".

Finally, the function returns a Response object with the message "success" and status code 200.

**Note**: This function is part of the MoveToBinViewSet class, which handles various operations related to moving goods to bins in the ASN system. It interacts with other models and objects such as AsnListModel, stocklist, binset, stockbin, qtychangerecorder, and cyclecount to perform the necessary operations and update the relevant data.

**Output Example**:
{
    "detail": "success"
}
***
### FunctionDef update(self, request)
**update**: The function of update is to update the ASN (Advanced Shipping Notice) details based on the provided data.

**Parameters**:
- `self`: The instance of the class.
- `request`: The HTTP request object.
- `args`: Additional positional arguments.
- `kwargs`: Additional keyword arguments.

**Code Description**:
The `update` function is a method defined within the `MoveToBinViewSet` class in the `views.py` file. It is responsible for updating the ASN details based on the data provided in the request.

The function first retrieves the data from the request using `self.request.data`. It then filters the queryset of `AsnDetailModel` objects based on the `asn_code` field in the data.

Next, the function checks if the `openid` of the first object in the filtered queryset matches the `openid` of the authenticated user. If they do not match, an APIException is raised with the message "Cannot delete data which not yours".

If the `bin_name` is not present in the data, an APIException is raised with the message "Please Enter the Bin Name".

If the `bin_name` is present, the function retrieves the `binset` object based on the `openid`, `bin_name`, and `is_delete` fields. It also retrieves the `asn_detail` object based on the `openid` and `asn_code` fields.

The function then retrieves the `staff_name` from the `staff` object based on the `openid` and `HTTP_OPERATOR` header in the request.

Next, the function iterates over the `res_data` list in the data. For each item in the list, it retrieves the `goods_qty_change` object from the `stocklist` based on the `openid` and `goods_code` fields.

If the quantity in the `res_data` item is less than or equal to 0, the iteration continues to the next item.

If the quantity is greater than 0, the function retrieves the `qs` object from the filtered queryset based on the `goods_code` field in the `res_data` item. It calculates the `move_qty` by subtracting the `sorted_qty` and the quantity in the `res_data` item from the `goods_actual_qty` of the `qs` object.

If the `move_qty` is greater than 0, the function updates the `sorted_qty` of the `qs` object by adding the quantity in the `res_data` item. It also updates the `sorted_stock` and `onhand_stock` of the `goods_qty_change` object accordingly. Depending on the `bin_property` of the `bin_detail` object, it updates the corresponding stock field of the `goods_qty_change` object.

The function then saves the `qs` and `goods_qty_change` objects. It generates a `store_code` using the `Md5.md5` function from the `utils/md5.py` module. It creates a new `stockbin` object with the relevant information and a `qtychangerecorder` object to record the quantity change.

Next, the function retrieves the current date and filters the `cyclecount` objects based on the `bin_name` and `goods_code` fields. It also checks if the `stockbin` object exists for the same `bin_name` and `goods_code`. If it exists, it calculates the `bin_stock` by summing the `goods_qty` of the `stockbin` objects. If the `line_data` exists, it updates the `goods_qty` field with the calculated `bin_stock` plus the quantity in the `res_data` item. Otherwise, it creates a new `cyclecount` object.

If the `empty_label` of the `bin_detail` object is `True`, it updates it to `False` and saves the `bin_detail` object.

If the `move_qty` is equal to 0, the function updates the `sorted_qty` and `asn_status` fields of the `qs` object. It also updates the `sorted_stock` and `onhand_stock` of the `goods_qty_change` object. It retrieves the current date and filters the `cyclecount` objects and `stockbin` objects as before. If the `asn_detail` object exists with the specified `asn_code` and `asn_status`, it does nothing. Otherwise, it updates the `asn_status` of the `asn_detail` object to 5. It generates a `store_code` using the `Md5.md5` function and creates a new `stockbin` object and `qtychangerecorder` object. If the `empty_label` of the `bin_detail` object is `True`, it updates it to `False` and saves the `bin_detail` object.

Finally, the function returns a success response with the message "success".

**Note**: 
- The `update` function performs various checks and validations, such as verifying ownership, checking the presence of required
***
## ClassDef FileListDownloadView
**FileListDownloadView**: The function of FileListDownloadView is to handle the download of CSV files containing ASN (Advanced Shipping Notice) data based on specified filters and language preferences.

**attributes**:
- renderer_classes: A tuple of renderer classes for file rendering.
- filter_backends: A list of filter backends for queryset filtering.
- ordering_fields: A list of fields for result ordering.
- filter_class: Specifies the filter class for queryset filtering.

**Code Description**:
The FileListDownloadView class extends the ModelViewSet class and includes methods for retrieving projects, queryset filtering, serializer class determination, language selection for rendering, and file download functionality. 

The get_project method retrieves the project ID from the request parameters. The get_queryset method filters the queryset of AsnListModel based on user authentication, project ID, and other conditions. The get_serializer_class method determines the serializer class based on the action type. The get_lang method selects the language for rendering CSV files with ASN data headers.

The list method generates a CSV file by filtering the queryset, selecting the language for rendering, and setting the file headers and content. The rendered CSV file is then returned as a downloadable response with a filename based on the current date and time.

FileListDownloadView interacts with AsnListModel for data retrieval and filtering, and with FileListRenderCN and FileListRenderEN for language-specific CSV rendering. Additionally, the class utilizes Django components such as Q objects, timezone, and StreamingHttpResponse for data manipulation and response generation.

**Note**: Developers can utilize FileListDownloadView to facilitate the download of CSV files containing ASN data with customizable filters and language preferences, enhancing data presentation and localization in the project.

**Output Example**:
A downloadable CSV file containing ASN data with Chinese headers rendered based on the specified filters and language preferences.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it. 

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the value; otherwise, it returns None. This function is used to extract the 'pk' value, which is typically an identifier for a specific project.

In the context of the project, the get_project function is called within the get_queryset function of the FileListDownloadView class. In get_queryset, the get_project function is used to obtain the 'pk' value, which is then utilized to filter the AsnListModel queryset based on the project identifier. Depending on the presence of the 'pk' value and the user authentication status, different subsets of the AsnListModel queryset are returned.

**Note**: 
Developers should ensure that the 'pk' value is correctly passed to the get_project function to avoid potential errors in filtering the queryset based on project identifiers.

**Output Example**: 
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter and return a queryset of AsnListModel objects based on specific conditions.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_queryset function first retrieves the project identifier 'id' by calling the get_project method. It then checks the user authentication status and filters the AsnListModel queryset accordingly. If there are AsnListModel objects that meet certain criteria, such as having an empty 'supplier' field and a creation date older than a specific threshold, those objects are deleted from the queryset.

Depending on the presence of the project identifier 'id' and the user authentication status, different subsets of the AsnListModel queryset are returned. If 'id' is None, the queryset includes objects with a matching 'openid' and a non-empty 'supplier' field. Otherwise, the queryset is filtered based on 'id', 'openid', and 'supplier' criteria.

The get_queryset function is a crucial part of the FileListDownloadView class and plays a significant role in retrieving and filtering ASN data based on project identifiers and user authentication status.

**Note**:
Developers should ensure that the get_queryset function is used within the appropriate context and that the filtering logic aligns with the project's requirements.

**Output Example**:
If the function is called with a valid project identifier and user authentication, it returns a queryset of AsnListModel objects meeting the specified criteria.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. 

**parameters**: 
- self: The instance of the class.

**Code Description**:
The get_serializer_class function checks the action being performed. If the action is 'list', it returns the FileListRenderSerializer class from serializers.py. Otherwise, it calls the http_method_not_allowed method with the request parameter.

In the project structure, this function is located within the FileListDownloadView class in views.py. It plays a crucial role in selecting the appropriate serializer for data serialization based on the action being executed. By returning the FileListRenderSerializer class, it ensures that the data is serialized correctly for further processing or rendering.

**Note**:
Developers should ensure that the actions defined in the function align with the expected behavior of the serializers in the project. Any modifications to the action conditions should be carefully reviewed to maintain the integrity of data serialization.

**Output Example**:
FileListRenderSerializer
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language for rendering CSV files based on the 'HTTP_LANGUAGE' header in the request and select the appropriate renderer accordingly.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language information from the 'HTTP_LANGUAGE' header in the request. If the language is set to 'zh-hans' (Simplified Chinese), the function utilizes the FileListRenderCN class to render the data with Chinese headers. Otherwise, it uses the FileListRenderEN class to render the data in English. In case the language is not specified, the function defaults to using FileListRenderEN for rendering. This language-specific rendering mechanism ensures that the CSV files display the appropriate language for the ASN data headers, enhancing localization and user experience.

The get_lang function is called within the list method of the FileListDownloadView class to determine the renderer based on the language and generate a StreamingHttpResponse containing the rendered data. By integrating language-specific rendering logic, developers can efficiently manage multilingual data presentation within the project, catering to diverse language preferences of users.

**Note**:
Developers can leverage the get_lang function to dynamically select the appropriate renderer for CSV files based on the language specified in the request, enabling language-specific data presentation in the project.

**Output Example**:
A StreamingHttpResponse object containing the rendered CSV data based on the selected language.
***
### FunctionDef list(self, request)
**list**: The function of list is to serialize data related to file list rendering and generate a CSV file for download based on the serialized data.

**parameters**:
- self: The instance of the class.
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function within the FileListDownloadView class serializes instances of AsnListModel using the FileListRenderSerializer. It then renders the serialized data in a CSV format for download. The function generates a StreamingHttpResponse object with the rendered data and sets the content type to "text/csv". Additionally, it dynamically creates a filename for the downloaded CSV file based on the current date and time.

The function utilizes the get_queryset method to filter the queryset of AsnListModel objects and the get_lang method to determine the language for rendering the CSV file headers. By combining serialization, rendering, and response generation, the list function facilitates the efficient creation of downloadable CSV files containing file list render data.

**Note**:
Developers should ensure that the appropriate data is available for serialization and that the CSV rendering logic aligns with the project's requirements. The filename generation based on the current timestamp ensures uniqueness for each downloaded file.

**Output Example**:
A StreamingHttpResponse object containing the rendered CSV data ready for download.
***
## ClassDef FileDetailDownloadView
**FileDetailDownloadView**: The FileDetailDownloadView class is responsible for handling the download of file details in CSV format. It extends the ModelViewSet class from the viewsets module.

**attributes**:
- serializer_class: Specifies the serializer class to be used for data serialization and deserialization.
- renderer_classes: Defines the renderer classes to be used for rendering the response.
- filter_backends: Specifies the filter backends to be used for filtering the queryset.
- ordering_fields: Defines the fields that can be used for ordering the queryset.
- filter_class: Specifies the filter class to be used for filtering the queryset.

**Code Description**:
The FileDetailDownloadView class is a viewset that handles the download of file details in CSV format. It extends the ModelViewSet class, which provides CRUD (Create, Retrieve, Update, Delete) functionality for a model.

The serializer_class attribute is set to serializers.FileDetailRenderSerializer, which specifies the serializer class to be used for data serialization and deserialization. This serializer is responsible for defining the structure of the data serialization for file detail rendering.

The renderer_classes attribute is set to (FileDetailRenderCN, ) + tuple(api_settings.DEFAULT_RENDERER_CLASSES), which defines the renderer classes to be used for rendering the response. It includes the FileDetailRenderCN class, which is responsible for rendering CSV files with Chinese labels, and the default renderer classes specified in the api_settings module.

The filter_backends attribute is set to [DjangoFilterBackend, OrderingFilter], which specifies the filter backends to be used for filtering the queryset. It includes the DjangoFilterBackend, which allows filtering based on specified criteria, and the OrderingFilter, which allows ordering the queryset based on specified fields.

The ordering_fields attribute is set to ['id', "create_time", "update_time"], which defines the fields that can be used for ordering the queryset. The queryset can be ordered by the id, create_time, and update_time fields.

The filter_class attribute is set to AsnDetailFilter, which specifies the filter class to be used for filtering the queryset. The AsnDetailFilter class is responsible for filtering the AsnDetailModel objects based on specified criteria.

The get_project method is a helper method that retrieves the project id from the request's kwargs. It returns the project id if it exists, otherwise it returns None.

The get_queryset method is used to retrieve the queryset of AsnDetailModel objects that will be filtered. It first calls the get_project method to get the project id. If the request user is authenticated, it filters the queryset based on the openid and project id. If the request user is not authenticated, an empty queryset is returned.

The get_serializer_class method is used to determine the serializer class to be used based on the action of the viewset. If the action is 'list', it returns serializers.FileDetailRenderSerializer. Otherwise, it calls the http_method_not_allowed method to handle the unsupported action.

The get_lang method is used to determine the language for rendering the data. It retrieves the language from the request's META data. If the language is set to 'zh-hans', it returns the rendered data using FileDetailRenderCN. Otherwise, it returns the rendered data using FileDetailRenderEN.

The list method is overridden to handle the 'list' action. It generates a CSV response by serializing the queryset data using FileDetailRenderSerializer and rendering it based on the requested language. It sets the Content-Disposition header to specify the filename of the downloaded file.

**Note**: Developers can use the FileDetailDownloadView class to handle the download of file details in CSV format. They can customize the serializer class, renderer classes, filter backends, ordering fields, and filter class based on their requirements. The class provides flexibility in handling different actions and rendering the data in different languages.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly to this function.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary, which typically contains the URL parameters. If successful, it returns the 'pk' value. If an exception occurs during the retrieval process, the function returns None.

In the context of the project, the get_project function is called within the get_queryset function of the FileDetailDownloadView class. In the get_queryset function, the get_project function is used to obtain the 'id' value, which is then utilized to filter the AsnDetailModel queryset based on certain conditions.

**Note**: 
- It is important to handle exceptions properly when using this function to ensure robust error management.
- The 'pk' value is commonly used in Django to represent the primary key of an object.

**Output Example**: 
If the 'pk' value is successfully retrieved from the self.kwargs dictionary, the function may return an integer value representing the primary key. For example, if the 'pk' value is 123, the function would return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve ASN detail objects based on certain conditions, including filtering by OpenID, ID, and deletion status.

**parameters**: 
- No explicit parameters are passed to this function.

**Code Description**: 
The get_queryset function first obtains the 'id' by calling the get_project method. It then checks if the request user exists and filters the AsnDetailModel queryset accordingly. If the 'id' is None, it filters objects by OpenID and deletion status. If the 'id' is not None, it additionally filters by ID. If the request user does not exist, an empty queryset is returned.

This function is a part of the FileDetailDownloadView class in the views.py file of the project. It interacts with the AsnDetailModel class to retrieve ASN detail objects based on specific criteria.

**Note**: 
- Proper authentication and request user validation should be considered when using this function.
- Understanding the data structure and filtering logic of the AsnDetailModel class is crucial for utilizing this function effectively.

**Output Example**: 
An example output of this function could be a queryset of ASN detail objects filtered based on the specified conditions.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action, returning FileDetailRenderSerializer for the 'list' action.

**parameters**: This Function does not take any parameters.

**Code Description**: The get_serializer_class function is implemented within the FileDetailDownloadView class in views.py. It checks the action attribute of the class instance and returns the appropriate serializer class based on the action. If the action is 'list', it returns the FileDetailRenderSerializer class from serializers.py. Otherwise, it calls the http_method_not_allowed method to handle the request.

The FileDetailRenderSerializer class in serializers.py defines the structure for serializing and deserializing file detail data. It includes various fields such as asn_code, goods_qty, goods_weight, supplier, and others to represent the attributes of file details. This serializer is utilized to generate a CSV response for the 'list' action in the FileDetailDownloadView class.

**Note**: Developers can utilize the get_serializer_class method to dynamically select the appropriate serializer class based on the action in the FileDetailDownloadView class. Ensure that the serializer classes are correctly defined and configured to handle the serialization and deserialization of file detail data.

**Output Example**:
```python
return serializers.FileDetailRenderSerializer
```
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language for rendering CSV files based on the 'HTTP_LANGUAGE' header in the request. It utilizes FileDetailRenderCN to render data in Chinese if the language is set to 'zh-hans', otherwise, it uses FileDetailRenderEN to render data in English.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language from the 'HTTP_LANGUAGE' header in the request. If the language is 'zh-hans', it calls FileDetailRenderCN to render the data with Chinese labels. Otherwise, it utilizes FileDetailRenderEN to render the data with English labels. This function ensures that the CSV files generated align with the specified language for accurate representation of ASN data details.

In the project structure, the get_lang function is part of the FileDetailDownloadView class in asn/views.py. It is called within the list method of the same class to determine the language for rendering CSV files based on the request. By integrating with FileDetailRenderCN and FileDetailRenderEN, get_lang enhances the localization of CSV files by providing language-specific labels for ASN data.

**Note**: Developers should ensure that the 'HTTP_LANGUAGE' header is set correctly in the request to determine the language for rendering CSV files. Additionally, FileDetailRenderCN and FileDetailRenderEN classes should be properly implemented to maintain consistency in labeling ASN data details based on the specified language.

**Output Example**:
A rendered CSV file with Chinese or English labels based on the language specified in the request.
***
### FunctionDef list(self, request)
**list**: The function of list is to generate a CSV response containing file detail data serialized using FileDetailRenderSerializer and rendered based on the requested language for download.

**parameters**:
- self: The instance of the class.
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function within the FileDetailDownloadView class in asn/views.py processes the file detail data by serializing it using FileDetailRenderSerializer. It retrieves the queryset data by filtering based on specific conditions using get_queryset. The function then determines the language for rendering the CSV file through get_lang based on the 'HTTP_LANGUAGE' header in the request. Finally, it generates a StreamingHttpResponse with the rendered data as a downloadable CSV file with a timestamped filename for the user to download.

This function showcases a structured approach to handling file detail data rendering and download functionality within the project. By integrating with FileDetailRenderSerializer, get_queryset, and get_lang, the list function ensures accurate representation and language-specific rendering of ASN data details in a downloadable CSV format.

**Note**:
Developers utilizing the list function should ensure that the necessary request object is passed for proper functionality. Additionally, understanding the data serialization logic of FileDetailRenderSerializer and the language determination process in get_lang is crucial for generating correct CSV files for download.

**Output Example**:
A downloadable CSV file containing file detail data rendered in the specified language based on the request header.
***
