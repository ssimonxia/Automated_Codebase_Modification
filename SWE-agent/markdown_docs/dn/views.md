## ClassDef DnListViewSet
**DnListViewSet**: The function of DnListViewSet is to handle various actions related to retrieving, listing, creating, and deleting data lines within a Django REST framework viewset.

**attributes**:
- pagination_class: Specifies the pagination behavior for the data list.
- filter_backends: Defines the filter backends to be used for data filtering.
- ordering_fields: Specifies the fields based on which data ordering can be performed.
- filter_class: Indicates the filter class to be used for data filtering.

**Code Description**:
The `DnListViewSet` class extends `viewsets.ModelViewSet` and includes methods to retrieve a specific project, get the queryset based on the request user, determine the serializer class based on the action, create a new data line with customized logic, and delete a data line with specific conditions.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the queryset based on the request user and project ID, handling specific conditions for data deletion. The `get_serializer_class` method determines the serializer class based on the action performed.

The `create` method creates a new data line with customized logic for generating unique codes and handling related data. The `destroy` method deletes a data line with additional checks and updates related data accordingly.

This class utilizes the `MyPageNumberPaginationDNList` for pagination, `DnListFilter` for data filtering, and various serializer classes for data serialization based on different actions.

**Note**: Ensure that the necessary classes and functions like `Md5`, `APIException`, `stocklist`, `DnListModel`, `DnDetailModel`, `scanner`, and `Response` are correctly defined and imported for the methods in the `DnListViewSet` class to work as intended.

**Output Example**:
```json
{
    "detail": "success"
}
```
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it. 

**parameters**: This Function does not take any parameters.

**Code Description**: The get_project function first attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value. If an exception occurs during this process, it returns None.

In the project, the get_project function is called within the get_queryset function of the DnListViewSet class. In the get_queryset function, the id is obtained by calling get_project. Depending on the user authentication status, the function filters DnListModel objects based on certain conditions and returns the filtered queryset.

**Note**: It is important to handle exceptions appropriately when using the get_project function to ensure smooth execution.

**Output Example**: 
- If 'pk' value is found: 1
- If 'pk' value is not found or an exception occurs: None
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter DnListModel objects based on specific conditions and return the filtered queryset.

**parameters**: This function does not take any parameters.

**Code Description**: The get_queryset function first retrieves the 'id' by calling the get_project function. It then checks the user authentication status and filters DnListModel objects accordingly. If there are DnListModel objects that meet certain criteria, they are processed and potentially deleted. Finally, the function returns the filtered queryset based on the conditions.

In the project structure, the get_queryset function is a part of the DnListViewSet class and interacts with the get_project function to obtain the 'id' value. Depending on the user's authentication status and the presence of 'id', the function filters DnListModel objects and returns the appropriate queryset.

**Note**: Exception handling is crucial when using the get_project function to ensure smooth execution of the get_queryset function.

**Output Example**: 
- If user is authenticated and 'id' is present: Filtered DnListModel queryset based on specified conditions.
- If user is not authenticated: An empty queryset.

***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**parameters**: 
- self: The instance of the class.

**Code Description**:
The get_serializer_class function contains conditional statements that check the action being performed. Depending on the action ('list', 'retrieve', 'destroy', 'create', 'update', 'partial_update'), it returns the corresponding serializer class. If the action is not recognized, it calls the http_method_not_allowed method with the request parameter.

This function is crucial in dynamically selecting the serializer class based on the action, ensuring that the data is serialized appropriately for different operations within the DnListViewSet.

The function interacts with various serializer classes such as DNListGetSerializer, DNListPostSerializer, DNListUpdateSerializer, and DNListPartialUpdateSerializer based on the action performed, enabling the correct serialization of data for list, retrieve, create, update, and partial update actions.

**Note**:
Developers should ensure that the actions are correctly defined and mapped to the corresponding serializer classes to maintain consistency in data serialization.
Handle any unrecognized actions appropriately to avoid unexpected behavior.

**Output Example**:
If the action is 'list', the function returns DNListGetSerializer.
If the action is 'create', the function returns DNListPostSerializer.
If the action is 'update', the function returns DNListUpdateSerializer.
If the action is 'partial_update', the function returns DNListPartialUpdateSerializer.
***
### FunctionDef create(self, request)
**create**: The function of create is responsible for creating a new DN (Delivery Note) entry in the database based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and then processes it to generate a unique DN code. If a custom DN code is provided in the request, it is used; otherwise, a new DN code is generated based on the existing entries in the database. The function then calculates a barcode based on the DN code using an MD5 hashing algorithm. After validating the data, it saves the serialized data to the database and creates a corresponding entry in the 'scanner' table. Finally, it returns a response with the serialized data and a success status.

The create function interacts with the following components:
- self.request: Accesses data from the request object.
- DnListModel: Retrieves and manipulates DN entries in the database.
- Md5: Utilizes the md5 method from the Md5 class to generate a barcode.

**Note**:
- This function assumes a certain data structure in the request object for processing.
- It relies on the existence of the DnListModel and Md5 components for data manipulation and barcode generation.

**Output Example**:
{
    "dn_code": "DN20220101001",
    "bar_code": "2c6ee6a4f2d03f168f5a0b3f2d5c4e5e",
    "other_data": "..."
}
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific record based on certain conditions related to the DN status and ownership.

**parameters**:
- request: Represents the HTTP request.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted. It then checks if the owner of the object matches the authenticated user. If the DN status is 1, indicating the order is not confirmed or delivered, the function sets the is_delete flag to True, updates related records in the DnDetailModel, adjusts the stock quantity, and saves the changes. Finally, it returns a success response. If the DN status is not 1, an exception is raised indicating that the order has been confirmed or delivered.

The destroy function interacts with the DnDetailModel to retrieve and update related records based on the DN code and status. It also interacts with the stocklist model to adjust the stock quantity of goods related to the deleted DN record.

**Note**:
- This function performs a deletion operation based on specific conditions and ownership validation.
- It is crucial to ensure that the DN status is checked before deleting the record to maintain data integrity.

**Output Example**:
{"detail": "success"}
***
## ClassDef DnDetailViewSet
**DnDetailViewSet**: The DnDetailViewSet class is a viewset that handles the CRUD (Create, Retrieve, Update, Delete) operations for the DnDetailModel objects. It provides various methods to retrieve, create, update, and delete DN (Delivery Note) detail data.

**Attributes**:
- pagination_class: Specifies the pagination class to be used for paginating the retrieved data.
- filter_backends: Specifies the filter backends to be used for filtering the retrieved data.
- ordering_fields: Specifies the fields that can be used for ordering the retrieved data.
- filter_class: Specifies the filter class to be used for filtering the retrieved data.

**Code Description**:
The DnDetailViewSet class extends the ModelViewSet class from the viewsets module, which provides the default implementation for the CRUD operations. It overrides some of the methods to customize the behavior for the DN detail data.

The get_project method retrieves the project ID from the URL kwargs and returns it. If the project ID is not found, it returns None.

The get_queryset method retrieves the DN detail data based on the request user and project ID. If the user is authenticated and the project ID is provided, it filters the DN detail data based on the user's authentication and the provided project ID. Otherwise, it returns an empty queryset.

The get_serializer_class method returns the appropriate serializer class based on the action performed. If the action is 'list', 'retrieve', or 'destroy', it returns the DNDetailGetSerializer class. If the action is 'create', it returns the DNDetailPostSerializer class. If the action is 'update', it returns the DNDetailUpdateSerializer class. Otherwise, it returns the http_method_not_allowed method.

The create method handles the creation of DN detail data. It first checks if the DN code and customer exist in the database. If they exist, it retrieves the staff name and validates the goods codes. If the goods codes are valid, it calculates the goods weight, volume, and cost. It then updates the stocklist and creates the DN detail data. Finally, it calculates the total weight, volume, and cost, and retrieves the transportation fee based on the customer and warehouse cities. The DN detail data and transportation fee are saved, and a success response is returned.

The update method handles the update of DN detail data. It first checks if the DN code, customer, and staff exist in the database. If they exist, it validates the goods codes and calculates the goods weight, volume, and cost. It then updates the stocklist, deletes the existing DN detail data, creates the new DN detail data, and calculates the total weight, volume, and cost. The transportation fee is retrieved based on the customer and warehouse cities. The DN detail data and transportation fee are saved, and a success response is returned.

The destroy method handles the deletion of DN detail data. It first checks if the DN detail data belongs to the authenticated user. If it does, it updates the stocklist and marks the DN detail data as deleted. If the DN detail data is part of a back order, the back order stock and ordered stock are updated. Finally, a success response is returned.

**Note**: This class provides the functionality to handle the CRUD operations for DN detail data. It is used in various viewsets and views within the project to manage the DN detail data.

**Output Example**: 
{
    "detail": "success"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly to this function.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during this process, it returns None.

In the calling object get_queryset, the get_project function is invoked to obtain the 'id' value. Subsequently, based on the presence of the request user and the 'id' value, different queries are executed on the DnDetailModel objects to filter the results accordingly.

**Note**: 
- It is important to handle exceptions appropriately when using this function to ensure robustness in case the 'pk' value is not found in self.kwargs.
- The function is designed to be used within the DnDetailViewSet class to retrieve project IDs.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve data from the DnDetailModel based on the conditions of the request user and project ID.

**parameters**: 
- No explicit parameters are passed to this function.

**Code Description**: 
The get_queryset function first calls the get_project method to obtain the project ID. It then checks if the request user exists. If the project ID is None, it filters DnDetailModel objects based on the request user's openid and is_delete status. If the project ID is not None, it filters the objects additionally based on the project ID. If the request user does not exist, an empty queryset is returned.

This function is crucial for customizing query results based on the request user and project ID within the DnDetailModel objects.

**Note**: 
- Proper handling of the project ID retrieval and request user existence is essential for the correct functioning of this method.
- The function is designed to be used within the DnDetailViewSet class to filter DnDetailModel objects.

**Output Example**: 
If the request user exists and the project ID is 1, the function will return DnDetailModel objects filtered by the request user's openid and project ID 1.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed within the Delivery Note Detail ViewSet.

**parameters**:
- self: The instance of the class.

**Code Description**:
The `get_serializer_class` function contains conditional statements to select the serializer class based on the action being executed. If the action is 'list', 'retrieve', or 'destroy', it returns the `DNDetailGetSerializer`. For the 'create' action, it returns the `DNDetailPostSerializer`, and for 'update' action, it returns the `DNDetailUpdateSerializer`. If none of these actions match, it calls the `http_method_not_allowed` method.

This function plays a crucial role in dynamically determining the appropriate serializer class to handle the serialization of data based on the specific action requested within the Delivery Note Detail ViewSet.

**Note**:
Developers should ensure that the actions defined in this function align with the corresponding serializer classes to maintain consistency and accuracy in data serialization within the Delivery Note Detail ViewSet.

**Output Example**:
- If the action is 'list', the function returns DNDetailGetSerializer.
- If the action is 'create', the function returns DNDetailPostSerializer.
- If the action is 'update', the function returns DNDetailUpdateSerializer.
***
### FunctionDef create(self, request)
**create**: The function of create is responsible for processing and creating new delivery notes based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and performs validation checks on the provided information. It then iterates over the goods data, validates each item, calculates weight, volume, and cost, updates stock quantities, and creates new delivery note details. The function also calculates total weight, volume, and cost, determines transportation fees, and handles duplicate goods entries. Finally, it updates the delivery note list with the calculated values and returns a success response.

This function interacts with various models and utility functions within the project to validate data, perform calculations, and update database records accordingly. It ensures the integrity of the delivery note creation process by handling data validation, stock updates, and transportation fee calculations.

**Note**: It is crucial to ensure that the provided data is accurate and complete to avoid any errors during the delivery note creation process.

**Output Example**:
{
    "detail": "success"
}
***
### FunctionDef update(self, request)
**update**: The function of update is to process and update the delivery note details based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The update function first retrieves the data from the request. It then validates the existence of the delivery note and customer. It proceeds to update the stock quantities, create new delivery note details, calculate transportation fees, and handle duplicate delivery note details. Finally, it updates the delivery note information and returns a success response.

This function interacts with various models and utility functions within the project:
- It interacts with DnListModel to check and update delivery note information.
- It interacts with DnDetailModel to create and manage delivery note details.
- It uses the sumOfList function from utils/datasolve.py to calculate totals.
- It utilizes the transportation_calculate function from utils/datasolve.py to calculate transportation costs.

**Note**: Ensure that the request contains the necessary data for updating the delivery note details. Handle exceptions if the customer or delivery note does not exist or has already been confirmed.

**Output Example**:
```json
{
    "detail": "success"
}
```
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific record based on certain conditions.

**parameters**:
- request: Represents the request object.
- pk: Represents the primary key of the record to be deleted.

**Code Description**:
The destroy function first retrieves the object based on the provided primary key. It then checks if the openid of the object matches the openid of the authenticated request. If the conditions are met, and the dn_status is 2 and back_order_label is true, the function updates the necessary stock quantities, marks the record as deleted, and checks for related records to update their status as well. Finally, it returns a success response. If the conditions are not met, an exception is raised indicating that the order is already confirmed or delivered.

The function interacts with the DnListModel, DnDetailModel, and stocklist objects to update stock quantities and check related records.

**Note**: Ensure that the conditions for deletion are met before calling this function to avoid errors.

**Output Example**:
{"detail": "success"}
***
## ClassDef DnViewPrintViewSet
**DnViewPrintViewSet**: The function of DnViewPrintViewSet is to handle the retrieval of data related to DNListModel and provide a response containing detailed information.

**attributes**:
- serializer_class: DNListGetSerializer for data serialization
- pagination_class: MyPageNumberPagination for pagination settings
- filter_backends: DjangoFilterBackend and OrderingFilter for filtering data
- ordering_fields: Fields for data ordering
- filter_class: DnListFilter for data filtering

**Code Description**:
The DnViewPrintViewSet class extends viewsets.ModelViewSet and includes methods to retrieve data, get the project ID, get the queryset based on user authentication, determine the serializer class based on the action, and retrieve detailed information for a specific DN record. The class utilizes serializers such as DNListGetSerializer for serialization, pagination settings from MyPageNumberPagination, filtering capabilities from DnListFilter, and specific data retrieval logic.

In the get_project method, the project ID is retrieved from the request parameters. The get_queryset method filters DNListModel data based on user authentication and project ID. The get_serializer_class method returns the appropriate serializer based on the action being performed. The retrieve method retrieves detailed information for a specific DN record, including related details such as customer and warehouse information.

This class plays a crucial role in handling data retrieval operations for DNListModel within the project, ensuring proper serialization, pagination, filtering, and detailed data retrieval functionalities.

**Note**:
Developers should ensure proper authentication and authorization mechanisms are in place to control access to sensitive data when using this class for data retrieval operations.

**Output Example**:
{
    "dn_detail": [...],
    "customer_detail": {
        "customer_name": "Example Customer",
        "customer_city": "Example City",
        "customer_address": "123 Example Street",
        "customer_contact": "example@example.com"
    },
    "warehouse_detail": {
        "warehouse_name": "Example Warehouse",
        "warehouse_city": "Example City",
        "warehouse_address": "456 Example Street",
        "warehouse_contact": "warehouse@example.com"
    }
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during the retrieval process, it returns None.

This function is utilized in the get_queryset method within the DnViewPrintViewSet class in views.py. In the get_queryset method, the get_project function is called to obtain the 'id' value. Depending on the presence of the request user and the 'id' value, different queries are executed on the DnListModel model to filter the results accordingly.

**Note**: 
- The get_project function is designed to handle exceptions that may occur during the retrieval of the 'pk' value.
- It is important to ensure that the 'pk' value is properly set in the self.kwargs dictionary before calling this function to avoid potential errors.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve the 'id' value based on certain conditions and filter the results from the DnListModel model accordingly. 

**parameters**: 
- No parameters.

**Code Description**: 
The get_queryset function first obtains the 'id' value by calling the get_project method. It then checks if there is a request user. If a user exists, it further checks if the 'id' is None. Depending on these conditions, different queries are executed on the DnListModel model to filter the results. If no user exists, an empty queryset is returned.

This function is an integral part of the DnViewPrintViewSet class in views.py. By utilizing the get_project method to retrieve the 'id' value, the get_queryset function dynamically filters the DnListModel objects based on the presence of a user and the 'id' value.

**Note**: 
- The get_queryset function plays a crucial role in determining the queryset based on specific conditions.
- It is essential to ensure that the get_project method functions correctly to obtain the 'id' value for proper filtering.

**Output Example**: 
If a request user exists and the 'id' is not None, the function will return a queryset of DnListModel objects filtered by the 'openid', 'id', and 'is_delete' fields.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The `get_serializer_class` function checks the action being performed. If the action is 'retrieve', it returns the `DNDetailGetSerializer` serializer class from the `dn/serializers.py` module. Otherwise, it calls the `http_method_not_allowed` method with the request parameter.

This function plays a crucial role in selecting the correct serializer for handling the serialization of Delivery Note details data. It ensures that the data is formatted appropriately based on the specific action being executed within the `DnViewPrintViewSet` view set.

**Note**: Developers can rely on this function to dynamically choose the serializer class, enhancing the flexibility and reusability of the serialization process.

**Output Example**:
```python
return serializers.DNDetailGetSerializer
```
***
### FunctionDef retrieve(self, request, pk)
**retrieve**: The function of retrieve is to fetch detailed information related to a Delivery Note, along with associated customer and warehouse details, based on the provided primary key (pk).

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key used to retrieve the specific Delivery Note details.

**Code Description**:
The `retrieve` function first validates the ownership of the requested Delivery Note by comparing the `openid` of the request with the `openid` associated with the Delivery Note. If the ownership is confirmed, the function proceeds to gather detailed information related to the Delivery Note, customer, and warehouse. This information includes Delivery Note details such as goods information, quantities, and timestamps, as well as customer and warehouse details. The function utilizes the `DnDetailModel`, `customer`, and `warehouse` models to retrieve the necessary data and the `DNDetailGetSerializer` serializer to format the Delivery Note details appropriately for the response.

The retrieved data is structured within a context dictionary containing keys for 'dn_detail', 'customer_detail', and 'warehouse_detail', each holding specific information related to the Delivery Note, customer, and warehouse respectively. Finally, the function returns a response containing the context data with a success status code of 200.

**Note**:
Developers can utilize the `retrieve` function to access and display detailed Delivery Note information along with associated customer and warehouse details. It ensures that the data is retrieved securely and presented in a structured format for further processing within the application.

**Output Example**:
```json
{
    "dn_detail": [
        {
            "dn_code": "DN001",
            "goods_desc": "Product A",
            "goods_qty": 100,
            ...
        },
        {
            "dn_code": "DN002",
            "goods_desc": "Product B",
            "goods_qty": 50,
            ...
        },
        ...
    ],
    "customer_detail": {
        "customer_name": "ABC Company",
        "customer_city": "City X",
        "customer_address": "123 Main Street",
        "customer_contact": "John Doe"
    },
    "warehouse_detail": {
        "warehouse_name": "Warehouse 1",
        "warehouse_city": "City Y",
        "warehouse_address": "456 Elm Street",
        "warehouse_contact": "Jane Smith"
    }
}
```
***
## ClassDef DnNewOrderViewSet
**DnNewOrderViewSet**: The function of DnNewOrderViewSet is to handle the viewset for creating, retrieving, updating, and deleting new orders in the DNListModel.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: 'id', 'create_time', 'update_time'
- filter_class: DnListFilter

**Code Description**:
The `DnNewOrderViewSet` class extends `viewsets.ModelViewSet` and provides the following functionalities:
- `get_project()`: Retrieves the project ID from the request parameters.
- `get_queryset()`: Returns the queryset based on the user and project ID, filtering DNListModel objects.
- `get_serializer_class()`: Determines the serializer class based on the action type.
- `create()`: Handles the creation of new orders, updating stock quantities, and changing the status of orders.

The class utilizes various filters, pagination, and serializers to manage the creation and retrieval of new orders in the DNListModel. It ensures that only authorized users can perform operations on the orders and maintains data integrity by updating stock quantities accordingly.

This class is called by the views in the project to handle the CRUD operations for new orders. It interacts with the `DnListModel`, `DnDetailModel`, `goods`, and `stocklist` models to manage order creation and stock updates.

**Note**:
Developers using this class should ensure proper authentication and authorization mechanisms are in place to control access to order creation and modification functionalities.

**Output Example**:
```python
{
    "id": 1,
    "dn_code": "DN001",
    "dn_status": 2,
    "total_weight": 100,
    "total_volume": 50,
    "customer": "ABC Company",
    "creater": "John Doe",
    "back_order_label": false,
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:00:00"
}
```
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during the process, it returns None.

In the calling object DnNewOrderViewSet's get_queryset function, the get_project function is utilized to obtain the 'id' value. Depending on the presence of the request user and the 'id' value, different queries are executed on the DnListModel model to filter the results accordingly.

**Note**: 
- The get_project function is designed to handle exceptions gracefully and return None if an error occurs.
- It is important to ensure that the 'pk' key exists in the self.kwargs dictionary before calling this function to avoid potential errors.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs:
```
123
```
If an exception occurs:
```
None
```
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve data from the DnListModel based on the presence of a request user and the 'id' value obtained from the get_project function.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if the request user exists. If the 'id' is None, it filters DnListModel objects based on the openid and is_delete fields. If the 'id' is not None, it filters objects based on openid, id, and is_delete fields. If there is no request user, it returns an empty queryset.

The function interacts with the DnListModel model to filter the data accordingly, ensuring that only relevant information is retrieved based on the conditions specified.

**Note**: 
- This function relies on the get_project function to obtain the 'id' value, which is crucial for filtering the queryset accurately.
- It is important to ensure that the request user is authenticated before calling this function to avoid unexpected behavior.

**Output Example**: 
If the request user exists and 'id' is None:
```
<DnListModel QuerySet>
```
If the request user exists and 'id' is not None:
```
<DnListModel QuerySet>
```
If there is no request user:
```
<DnListModel QuerySet>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. 

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_serializer_class function checks the action being performed. If the action is 'create', it returns the DNListPartialUpdateSerializer from dn/serializers.py. Otherwise, it calls the http_method_not_allowed method with the request parameter.

This function is crucial for dynamically selecting the appropriate serializer class based on the action being executed within the DnNewOrderViewSet class.

**Note**: 
- Ensure that the actions are correctly defined to match the serializer classes.
- Handle any additional actions by extending the conditional check in this function.

**Output Example**: 
DNListPartialUpdateSerializer
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to process a new order by updating the status of a delivery note (DN) and managing stock quantities based on the DN details.

**parameters**:
- request: Represents the request object.
- pk: Represents the primary key of the object.

**Code Description**:
The create function first retrieves the object based on the provided primary key. It then checks if the requester's openid matches the openid associated with the object. If the condition is met and the DN status is 1, it fetches DN details related to the openid, DN code, and status. If the DN details exist, it updates the DN status to 2 and iterates through each detail to manage stock quantities. For each detail, it checks if the goods exist in the stocklist. If not, it creates a new entry in the stocklist with relevant details. It then adjusts the stock quantities based on the DN detail information. Finally, it updates the DN details and the DN object itself, serializes the data, and returns a response with a success status.

**Note**: This function is designed to handle the creation of new orders within the system, ensuring proper stock management and DN status updates.

**Output Example**:
```json
{
    "dn_code": "DN123",
    "dn_status": 2,
    "customer": "Customer A",
    ...
}
```
***
## ClassDef DnOrderReleaseViewSet
**DnOrderReleaseViewSet**: The DnOrderReleaseViewSet class is responsible for handling the release of DN (Delivery Note) orders. It inherits from the ModelViewSet class provided by the viewsets module.

**Attributes**:
- pagination_class: An attribute that specifies the pagination class to be used for the view.
- filter_backends: An attribute that defines the filter backends to be used for the view.
- ordering_fields: An attribute that specifies the fields that can be used for ordering the queryset.
- filter_class: An attribute that specifies the filter class to be used for filtering the queryset.

**Code Description**:
The DnOrderReleaseViewSet class contains several methods that handle different actions related to DN order release. Let's analyze each method:

1. get_project(self):
   - This method retrieves the project ID from the URL parameters.
   - It returns the project ID if it exists, otherwise it returns None.

2. get_queryset(self):
   - This method retrieves the DNListModel queryset based on the request user and project ID.
   - If the user is authenticated and a project ID is provided, it filters the queryset based on the user's openid, dn_status, and project ID.
   - If the user is not authenticated or no project ID is provided, it returns an empty queryset.
   - The queryset is ordered by the create_time field in ascending order.
   - The filtered queryset is returned.

3. get_serializer_class(self):
   - This method returns the appropriate serializer class based on the action being performed.
   - If the action is 'create' or 'update', it returns the DNListUpdateSerializer class.
   - Otherwise, it returns the http_method_not_allowed method.

4. create(self, request, *args, **kwargs):
   - This method handles the creation of DN orders.
   - It retrieves the queryset using the get_queryset method.
   - It retrieves the staff name based on the authenticated user and operator ID.
   - It iterates over the queryset and performs various operations related to picking and back orders.
   - It creates picking list items and back order items based on the availability of stock.
   - It calculates transportation fees based on the total weight and volume of the order.
   - It creates a new DNListModel for the back order and updates the existing DNListModel.
   - It returns a success response.

5. update(self, request, pk):
   - This method handles the update of DN orders.
   - It retrieves the DNListModel object based on the provided primary key (pk).
   - If the openid of the DNListModel does not match the authenticated user's openid, it raises an APIException.
   - If the dn_status of the DNListModel is not 2 (release status), it raises an APIException.
   - It performs similar operations as the create method to handle picking and back orders.
   - It updates the existing DNListModel and returns a success response.

**Note**: The code contains some complex logic related to stock management, picking, and back orders. It is recommended to thoroughly review and test the code before using it in a production environment.

**Output Example**:
{
  "detail": "success"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary, which typically contains the parsed URL parameters. If successful, it returns the 'pk' value; otherwise, it returns None. This function is designed to be used within the DnOrderReleaseViewSet class to extract the project ID.

In the calling object get_queryset, the get_project function is invoked to obtain the project ID. Depending on the presence of the project ID and the authenticated user in the request, different queries are executed on the DnListModel model. If the user is authenticated and the project ID is available, a specific DnListModel instance is retrieved. Otherwise, a list of DnListModel instances with a specific dn_status and openid is returned.

**Note**:
- Ensure that the self.kwargs dictionary contains the 'pk' key when calling this function to retrieve the project ID accurately.

**Output Example**:
- If the 'pk' value is found in self.kwargs:
  - Output: 123
- If the 'pk' value is not found in self.kwargs:
  - Output: None
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a queryset of DnListModel instances based on certain conditions.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_queryset function is a method of the DnOrderReleaseViewSet class. It is used to retrieve a queryset of DnListModel instances based on certain conditions. 

The function first calls the get_project function to obtain the project ID. If the project ID is available and the user is authenticated, it filters the DnListModel instances based on the openid, dn_status, id, and is_delete fields. If the project ID is not available or the user is not authenticated, it filters the DnListModel instances based on the openid, dn_status, and is_delete fields.

The filtered queryset is then returned as the result of the function.

**Note**:
- The get_project function is called within this function to obtain the project ID. Make sure that the self.kwargs dictionary contains the 'pk' key when calling this function to retrieve the project ID accurately.

**Output Example**:
- If the project ID is available and the user is authenticated:
  - Output: Queryset of DnListModel instances filtered by openid, dn_status, id, and is_delete fields.
- If the project ID is not available or the user is not authenticated:
  - Output: Queryset of DnListModel instances filtered by openid, dn_status, and is_delete fields.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. 

**parameters**: 
- self: The instance of the class.

**Code Description**:
The get_serializer_class function checks the action being performed and returns the appropriate serializer class accordingly. If the action is 'create' or 'update', it returns the DNListUpdateSerializer from dn/serializers.py. Otherwise, it calls the http_method_not_allowed method with the request parameter.

The DNListUpdateSerializer is responsible for serializing and validating input data for updating DN list entries. It ensures that the dn_code field is provided and validated before updating the DN list entry. This serializer class is utilized in the DNListUpdateViewSet to handle update actions for DN list entries.

**Note**:
- Ensure that the appropriate actions are specified when calling get_serializer_class to get the correct serializer class.
- The DNListUpdateSerializer plays a crucial role in validating and processing input data for updating DN list entries.

**Output Example**:
DNListUpdateSerializer
***
### FunctionDef create(self, request)
**create**: The create function is responsible for processing the creation of picking lists and back orders based on the provided request and queryset.

**parameters**:
- self: The instance of the class.
- request: The HTTP request object.
- *args: Variable length argument list.
- **kwargs: Arbitrary keyword arguments.

**Code Description**:
The create function is a method of the DnOrderReleaseViewSet class. It is used to process the creation of picking lists and back orders based on the provided request and queryset.

The function first retrieves the queryset using the get_queryset method. It then iterates over the retrieved queryset and performs the following operations for each item:

1. Retrieves the staff name based on the provided request's authentication information.
2. Filters the DnDetailModel instances based on the provided request's authentication information, dn_code, dn_status, and is_delete fields.
3. Initializes variables for picking lists, back orders, back order goods weight, back order goods volume, back order goods cost, back order base code, dn last code, back order dn code, and bar code.
4. Retrieves the goods detail based on the provided request's authentication information and goods code.
5. Checks if the stocklist for the goods code exists. If not, creates a new stocklist instance.
6. Retrieves the goods quantity change based on the provided request's authentication information and goods code.
7. Retrieves the goods bin stock list based on the provided request's authentication information, goods code, bin property, and goods quantity.
8. Calculates the available quantity for picking based on the goods quantity change and other stock quantities.
9. If the available quantity is greater than 0, performs the picking process by updating the goods bin stock list, goods quantity change, and creating a new PickingListModel instance.
10. If the available quantity is less than the goods quantity, creates a back order by updating the goods bin stock list, goods quantity change, and creating a new DnDetailModel instance.
11. Updates the total weight, total volume, and total cost based on the picked or back ordered goods.
12. Saves the changes to the models and continues to the next item in the queryset.

After processing all items in the queryset, the function returns a success response.

**Note**: 
- The create function relies on other methods and models such as get_queryset, staff, DnDetailModel, stocklist, goods, stockbin, PickingListModel, and DnListModel to perform its operations.
- The function also handles transportation fees and bar code generation, but the details of these processes are not provided in the code snippet.

**Output Example**:
{
  "detail": "success"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to release an order by updating its status and performing various operations related to picking and backordering.

**Parameters**:
- `self`: The instance of the DnOrderReleaseViewSet class.
- `request`: The HTTP request object.
- `pk`: The primary key of the order to be updated.

**Code Description**:
The `update` function is a method of the `DnOrderReleaseViewSet` class. It is responsible for releasing an order by performing various operations related to picking and backordering. 

The function first retrieves the order object using the `get_object` method. It then checks if the `openid` of the order matches the `openid` of the authenticated user making the request. If they do not match, an APIException is raised with the message "Cannot Release Order Data Which Not Yours".

If the `openid` matches, the function checks if the `dn_status` of the order is 2 (indicating that the order is in the release status). If it is not, an APIException is raised with the message "This Order Does Not in Release Status".

If the `dn_status` is 2, the function proceeds to perform various operations related to picking and backordering. It first retrieves the `staff_name` of the user making the request from the `staff` model. It then retrieves a list of `DnDetailModel` objects that meet certain criteria, such as having the same `openid`, `dn_code`, `dn_status` of 2, and not being deleted.

The function initializes several variables to store picking and backordering information, such as `picking_list`, `picking_list_label`, `back_order_list`, `back_order_list_label`, `back_order_goods_weight_list`, `back_order_goods_volume_list`, and `back_order_goods_cost_list`.

Next, the function retrieves the `back_order_base_code` from the `DnListModel` model, which represents the latest DN code. It then extracts the numeric part of the `back_order_base_code` and increments it by 1 to generate a new DN code for the backordered items. The function also generates a `bar_code` for the backordered items using the `Md5.md5` function from the `Md5` class.

The function then iterates over the `dn_detail_list` and performs various operations related to picking and backordering for each item. It retrieves the `goods_detail` from the `goods` model based on the `goods_code` of the item. If the item is not present in the `stocklist` model, it creates a new entry with the `goods_code` and `dn_stock` values. 

The function then retrieves the `goods_qty_change` from the `stocklist` model based on the `goods_code` of the item. It also retrieves a list of `goods_bin_stock_list` from the `stockbin` model based on the `goods_code`, `bin_property` of "Normal", and `goods_qty` greater than 0.

The function calculates the `can_pick_qty` based on the available stock and other factors. If the `can_pick_qty` is greater than 0, it proceeds with the picking process. It iterates over the `goods_bin_stock_list` and picks the available quantity from each bin until the `can_pick_qty` is fulfilled. It updates the `pick_qty` and other related fields of the `dn_detail_list` and `goods_qty_change` objects accordingly. It also creates entries in the `PickingListModel` model to track the picking process.

If the `can_pick_qty` is less than the requested quantity, it checks if the order has a backorder label. If it does not, it creates a backorder entry in the `DnDetailModel` model for the remaining quantity. It also updates the `total_weight`, `total_volume`, and `total_cost` of the order accordingly. 

The function continues this process for each item in the `dn_detail_list`. If there are any picking or backordering operations, it creates a new entry in the `DnListModel` model to represent the backordered items. It also creates a new entry in the `scanner` model to track the backordered items.

Finally, the function updates the `total_weight`, `total_volume`, `total_cost`, `transportation_fee`, and `dn_status` of the order. It saves the changes and returns a response with the message "success".

**Note**: 
- The function relies on several models and functions from other parts of the project, such as `Md5.md5`, `sumOfList`, `transportation_calculate`, `DnListModel`, `DnDetailModel`, and `PickingListModel`. These models and functions are used to perform various calculations, retrieve data, and create entries in the database.
- The function also performs checks and raises exceptions in case of invalid conditions, such as mismatched `openid` or incorrect `dn_status`.
-
***
## ClassDef DnPickingListViewSet
**DnPickingListViewSet**: The function of DnPickingListViewSet is to handle the retrieval of a picklist for a specific primary key (pk).

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: 'id', 'create_time', 'update_time'
- filter_class: DnListFilter

**Code Description**:
The DnPickingListViewSet class is a viewset that extends ModelViewSet. It includes methods to retrieve a specific picklist based on the primary key, get the queryset based on the request user, determine the serializer class based on the action, and handle the retrieval of picklist data.

The get_project method retrieves the primary key from the request parameters. The get_queryset method filters the DnListModel objects based on the authenticated user and the provided primary key. The get_serializer_class method returns the appropriate serializer class based on the action, and the retrieve method retrieves the picklist data based on the primary key and the status of the picklist.

This class utilizes the MyPageNumberPagination class for pagination, the DnListFilter class for filtering, and the serializers.DNListGetSerializer and serializers.DNPickingListGetSerializer for serialization.

**Note**:
Developers using this class should ensure that the necessary dependencies such as MyPageNumberPagination, DjangoFilterBackend, OrderingFilter, DnListFilter, and the specified serializers are properly implemented and configured.

**Output Example**:
{
    "id": 1,
    "dn_code": "DN001",
    "dn_status": 3,
    "total_weight": 100,
    "total_volume": 50,
    "customer": "ABC Company",
    "creater": "John Doe",
    "back_order_label": false,
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00Z",
    "update_time": "2022-01-02T10:00:00Z"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the kwargs attribute of the object. If successful, it returns the 'pk' value; otherwise, it returns None. This function is used to extract the 'pk' value which is then utilized in other parts of the code logic.

In the calling object, get_queryset, the get_project function is invoked to obtain the 'id' value. Subsequently, based on the user authentication status, the function filters the DnListModel objects by 'openid' and 'id' attributes if the user is authenticated. If the user is not authenticated, an empty queryset is returned.

**Note**: 
- The get_project function is designed to handle exceptions and return None if the 'pk' value cannot be retrieved.
- It is important to ensure that the 'pk' value is correctly passed to this function for it to work as intended.

**Output Example**: 
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve the 'id' value based on user authentication status and filter DnListModel objects accordingly.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_queryset function first calls the get_project function to obtain the 'id' value. It then checks the authentication status of the user. If the user is authenticated, the function filters DnListModel objects by 'openid' and 'id'. If the user is not authenticated, an empty queryset is returned.

This function plays a crucial role in fetching specific DnListModel objects based on user authentication status and the 'id' value retrieved using the get_project function.

**Note**: 
- It is essential to ensure proper user authentication before calling this function to retrieve the desired queryset.
- The 'id' value is pivotal in filtering the DnListModel objects effectively.

**Output Example**: 
If the user is authenticated and the 'id' value is 1, the function will return a queryset of DnListModel objects filtered by 'openid' and 'id'.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine and return the appropriate serializer class based on the action being performed.

**parameters**: This Function does not take any parameters.

**Code Description**: The get_serializer_class function checks the action being performed and returns the DNListGetSerializer serializer class if the action is 'retrieve'. Otherwise, it calls the http_method_not_allowed method with the request parameter.

The DNListGetSerializer is responsible for serializing data related to the DNListModel for read-only purposes. It includes fields such as dn_code, dn_status, customer, creater, bar_code, create_time, and update_time. The serializer class is associated with the DnListModel model and excludes certain fields like openid and is_delete. This serializer is utilized in various views within the project for read-only operations.

In the DnPickingListViewSet class, the get_serializer_class method returns the DNListGetSerializer for the 'retrieve' action, ensuring appropriate serialization of DNListModel data.

**Note**: Developers should ensure that the DNListGetSerializer is used for read-only operations and not modified for read-write operations to maintain data integrity.

**Output Example**:
DNListGetSerializer
***
### FunctionDef retrieve(self, request, pk)
**retrieve**: The function of retrieve is to fetch and serialize picking list data based on the provided primary key (pk) after checking the dn_status of the object.

**parameters**:
- request: Represents the request object.
- pk: The primary key used to retrieve the specific picking list.

**Code Description**:
The retrieve function first retrieves the object based on the provided primary key (pk). It then checks if the dn_status of the object is less than 3. If the condition is met, an APIException is raised with a message indicating that no picking list has been created. Otherwise, the function filters the picking list data based on the authenticated user's openid and dn_code. The data is then serialized using the DNPickingListGetSerializer class and returned as a response with a status code of 200.

This function is part of the DnPickingListViewSet class in the views.py file and is crucial for retrieving and presenting picking list data to users based on specific criteria.

**Note**:
Developers should ensure that the dn_status of the object being retrieved is considered to determine the appropriate response. Additionally, the DNPickingListGetSerializer class should be used to serialize the picking list data accurately to avoid serialization errors.

**Output Example**:
```json
{
    "dn_code": "DN123",
    "bin_name": "Bin A",
    "goods_code": "Goods123",
    "picking_status": 1,
    "pick_qty": 100,
    "picked_qty": 50,
    "creater": "John Doe",
    "t_code": "T123",
    "create_time": "2022-01-01 10:00:00",
    "update_time": "2022-01-02 15:30:00"
}
```
***
## ClassDef DnPickingListFilterViewSet
**DnPickingListFilterViewSet**: The function of DnPickingListFilterViewSet is to handle the viewset for the PickingListFilter, providing filtering and ordering capabilities for the PickingListModel.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', 'create_time', 'update_time']
- filter_class: DnPickingListFilter

**Code Description**:
The DnPickingListFilterViewSet class extends viewsets.ModelViewSet and defines the behavior for handling the PickingListFilter. It specifies the pagination, filter backends, ordering fields, and filter class to be used. The get_queryset method customizes the queryset based on the request user, filtering by openid if the user is authenticated. The get_serializer_class method determines the serializer class based on the action performed, returning DNPickingCheckGetSerializer for the 'list' action.

This class interacts with the MyPageNumberPagination class for pagination and the DnPickingListFilter class for filtering options on the PickingListModel. It is part of the viewset structure in the project, providing endpoints for retrieving and filtering picklists.

**Note**:
Developers can utilize the DnPickingListFilterViewSet class to define the behavior of the viewset for handling picklist filtering and ordering. It offers flexibility in customizing queryset and serializer class based on different actions performed on the picklists.

**Output Example**:
An example output of the DnPickingListFilterViewSet class functionality could be a paginated list of filtered picklists based on specific criteria, with the ability to order the results by id, create time, or update time.
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a queryset of PickingListModel objects based on the request user's openid.

**Code Description**: The get_queryset function checks if there is a user in the request. If a user exists, it filters the PickingListModel objects based on the openid associated with the request's authentication. If there is no user in the request, it returns an empty queryset.

The function utilizes the PickingListModel class to filter picking lists by the openid of the authenticated user. This ensures that only picking lists associated with the authenticated user are returned in the queryset.

**Note**: This function is crucial for filtering picking lists based on the authenticated user's openid, ensuring data security and access control.

**Output Example**:
```
<QuerySet [<PickingListModel: Picking List Object 1>, <PickingListModel: Picking List Object 2>, ...]>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. 

**Code Description**: 
The `get_serializer_class` function checks the action being performed and returns the appropriate serializer class accordingly. If the action is 'list', it returns the `DNPickingCheckGetSerializer` serializer class from the `dn/serializers.py` module. Otherwise, it calls the `http_method_not_allowed` method to handle the request.

This function ensures that the correct serializer is used for serializing data related to picking checks when the 'list' action is triggered in the `DnPickingListFilterViewSet` class.

**Note**: Developers can rely on this function to dynamically select the serializer class based on the action, ensuring proper serialization of data in the context of picking list filtering.

**Output Example**:
```python
return serializers.DNPickingCheckGetSerializer
```
***
## ClassDef DnPickedViewSet
**DnPickedViewSet**: The function of DnPickedViewSet is to handle the creation and update of "Picked" objects in the DnListModel.

**Attributes**:
- pagination_class: An attribute that specifies the pagination class to be used for the view.
- filter_backends: An attribute that specifies the filter backends to be used for the view.
- ordering_fields: An attribute that specifies the fields that can be used for ordering the queryset.
- filter_class: An attribute that specifies the filter class to be used for the view.

**Code Description**:
The DnPickedViewSet class is a subclass of the ModelViewSet class provided by the viewsets module. It handles the creation and update of "Picked" objects in the DnListModel. The class defines several methods to handle different actions.

The get_project method retrieves the project ID from the URL kwargs. It returns the project ID if it exists, otherwise it returns None.

The get_queryset method retrieves the queryset of DnListModel objects based on the request user and project ID. If the request user is authenticated and a project ID is provided, it filters the queryset to include only the DnListModel object with the specified project ID. Otherwise, it returns an empty queryset.

The get_serializer_class method returns the serializer class to be used based on the action. If the action is 'create' or 'update', it returns the DNListUpdateSerializer class from the serializers module. Otherwise, it returns the http_method_not_allowed method.

The create method handles the creation of "Picked" objects. It first deletes any stockbin objects that have zero quantities. Then, it retrieves the DnListModel object based on the provided project ID. If the dn_status of the object is not 3, it raises an APIException with the message "This dn Status Not Pre Pick". Otherwise, it processes the data provided in the request and updates the quantities of various related objects. Finally, it saves the DnListModel object and returns a success response.

The update method handles the update of "Picked" objects. It first deletes any stockbin objects that have zero quantities. Then, it retrieves the DnListModel object based on the provided dn_code. If the dn_status of the object is not 3, it raises an APIException with the message "This dn Status Not Pre Pick". Otherwise, it processes the data provided in the request and updates the quantities of various related objects. If there are any PickingListModel objects with picking_status 0, it saves the DnListModel object. Otherwise, it updates the dn_status of the DnListModel object to 4 and saves it. Finally, it returns a success response.

**Note**: This code relies on the existence of other objects such as MyPageNumberPagination and DnListFilter. Please make sure these objects are properly implemented and available in the project.

**Output Example**:
{
    "Detail": "success"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly to this function.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during this process, it returns None.

In the calling object DnPickedViewSet's get_queryset function, the get_project function is utilized to obtain the 'id' value. Depending on the presence of the 'id' value and the user making the request, different queries are executed on the DnListModel objects. If the user is authenticated and 'id' is None, the function filters DnListModel objects based on the 'openid' and 'is_delete' fields. If the user is authenticated and 'id' is not None, the function filters DnListModel objects based on 'openid', 'id', and 'is_delete' fields. If the user is not authenticated, an empty queryset is returned.

**Note**: 
- It is important to handle exceptions properly when using the get_project function to ensure robustness in case the 'pk' value is not found in self.kwargs.
- The get_project function is designed to be used within the DnPickedViewSet class and may not be suitable for standalone usage.

**Output Example**: 
- If the 'pk' value is found in self.kwargs and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve DnListModel objects based on specific conditions depending on the user's authentication status and the presence of the 'id' value.

**parameters**: 
- No parameters are explicitly passed to this function.

**Code Description**: 
The get_queryset function first obtains the 'id' value by calling the get_project function. It then checks if the user is authenticated. If the user is authenticated and 'id' is None, the function filters DnListModel objects by 'openid' and 'is_delete' fields. If the user is authenticated and 'id' is not None, the function filters DnListModel objects by 'openid', 'id', and 'is_delete' fields. If the user is not authenticated, an empty queryset is returned.

This function is utilized within the DnPickedViewSet class to customize queryset retrieval based on different conditions, ensuring proper data filtering and access control.

**Note**: 
- Proper exception handling is essential when using the get_project function to handle cases where the 'pk' value is not found in self.kwargs.
- The get_queryset function is designed to be used within the DnPickedViewSet class and is tailored for querying DnListModel objects based on specific criteria.

**Output Example**: 
- If the user is authenticated and 'id' is None, the function will return DnListModel objects filtered by 'openid' and 'is_delete' fields.
- If the user is authenticated and 'id' is not None, the function will return DnListModel objects filtered by 'openid', 'id', and 'is_delete' fields.
- If the user is not authenticated, an empty queryset will be returned.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. 

**parameters**: 
- self: The instance of the class.

**Code Description**:
The get_serializer_class function checks the action being performed and returns the appropriate serializer class accordingly. If the action is 'create' or 'update', it returns the DNListUpdateSerializer from dn/serializers.py. Otherwise, it calls the http_method_not_allowed method with the request parameter.

The DNListUpdateSerializer is responsible for serializing and validating input data for updating DN list entries. It ensures that the dn_code field is provided and validated before updating the DN list entry. This function plays a crucial role in determining the serializer class based on the action, ensuring the correct handling of data during create and update operations.

**Note**:
- Ensure that the action is correctly set to 'create' or 'update' to utilize the DNListUpdateSerializer.
- The DNListUpdateSerializer enforces validation rules for updating DN list entries, particularly the dn_code field.

**Output Example**:
DNListUpdateSerializer
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to process and update picking information based on specific criteria provided in the request data.

**parameters**:
- request: Represents the request object containing data for processing.
- pk: Represents the primary key used to retrieve the object.

**Code Description**:
The create function first filters and deletes specific data entries from the stockbin model. It then retrieves the object based on the provided primary key. If the dn_status of the object is not equal to 3, an APIException is raised. Otherwise, the function processes the request data by iterating over the goodsData array. It validates and updates the pick_qty for each item, ensuring it meets certain criteria. 

The function then updates various models including staff, stocklist, DnDetailModel, stockbin, PickingListModel, qtychangerecorder, and cyclecount based on the provided data. It calculates and updates stock quantities, picking statuses, and other relevant information. Finally, it saves the updated object if certain conditions are met and returns a success response.

The create function is crucial for handling the pre-picking process and updating relevant models to reflect the changes made during the picking operation.

**Note**: This function involves complex data processing and validation logic to ensure accurate handling of picking operations and stock quantity updates.

**Output Example**:
{"Detail": "success"}
***
### FunctionDef update(self, request)
**update**: The function of update is to update the status and quantities of goods in a picking list based on the provided data.

**parameters**:
- request: The request object containing the HTTP request information.
- args: Additional positional arguments.
- kwargs: Additional keyword arguments.

**Code Description**:
The update function begins by retrieving the picking lists from the stockbin table that meet the specified conditions. If any matching records are found, they are deleted. 

Next, the function retrieves the data from the request object. It then retrieves the picking list from the queryset based on the provided 'dn_code'. If the 'dn_status' of the picking list is not equal to 3, an APIException is raised with the message "This dn Status Not Pre Pick".

The function then iterates over the 'goodsData' list in the provided data. For each item in the list, it retrieves the corresponding picking list from the PickingListModel table based on the 'openid', 'dn_code', 'picking_status', and 't_code' fields. 

If the 'picked_qty' of the current item is less than 0, an APIException is raised with the message "<goods_code> Picked Qty Must >= 0". 

If the 'picked_qty' of the current item is greater than the 'pick_qty' of the corresponding picking list, an APIException is raised with the message "<goods_code> Picked Qty Must Less Than Pick Qty".

After validating the 'picked_qty' for each item, the function updates the 'dn_status' of the picking list to 4. It then retrieves the staff name from the staff table based on the 'openid' and 'HTTP_OPERATOR' fields of the request object.

Next, the function iterates over the 'goodsData' list again. For each item, it retrieves the corresponding stocklist, DnDetailModel, stockbin, and PickingListModel objects based on the provided data.

The function then creates a new record in the qtychangerecorder table with the necessary information, including the 'openid', 'mode_code', 'bin_name', 'goods_code', 'goods_desc', 'goods_qty', 'store_code', and 'creater' fields.

The function calculates the current date and retrieves the sum of 'goods_qty' from the stockbin table based on the 'openid', 'bin_name', and 'goods_code' fields. It then calculates the 'cycle_qty' by subtracting the 'picked_qty' of the current item from the 'bin_stock'.

If the 'picked_qty' of the current item is equal to the 'pick_qty' of the corresponding picking list, the function updates the 'onhand_stock', 'pick_stock', 'picked_stock', and 'picked_qty' fields of the stocklist, PickingListModel, and stockbin objects accordingly.

If the 'picked_qty' of the current item is less than the 'pick_qty' of the corresponding picking list, the function updates the 'onhand_stock', 'pick_stock', 'picked_stock', 'can_order_stock', 'picked_qty', and 'picking_status' fields of the stocklist, PickingListModel, and stockbin objects accordingly.

The function then updates the 'picked_qty' and 'pick_qty' fields of the DnDetailModel object based on the provided data. If the 'pick_qty' is greater than 0, it is set to 0. If there are still picking lists with a 'picking_status' of 0 for the same 'dn_code', the DnDetailModel object is saved. Otherwise, the DnDetailModel object is saved and its 'dn_status' is set to 4.

Finally, the function returns a response with the message "success" and a status code of 200.

**Note**: 
- The update function performs various operations related to updating the status and quantities of goods in a picking list based on the provided data.
- It interacts with the stockbin, PickingListModel, stocklist, DnDetailModel, and qtychangerecorder objects to retrieve and update the necessary information.
- Proper exception handling is implemented to handle cases where the provided data is invalid or does not meet the required conditions.

**Output Example**: 
{
    "Detail": "success"
}
***
## ClassDef DnDispatchViewSet
**DnDispatchViewSet**: The function of DnDispatchViewSet is to handle the confirmation of dispatch for a specific item.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: 'id', 'create_time', 'update_time'
- filter_class: DnListFilter

**Code Description**:
The `DnDispatchViewSet` class defines methods to confirm dispatch, retrieve a specific project, get the queryset based on user authentication, determine the serializer class based on the action, and create a dispatch with necessary validations and updates.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the queryset based on the user and project ID. The `get_serializer_class` method selects the serializer class based on the action type. The `create` method handles the creation of a dispatch, updates related models, and returns a success response upon successful dispatch confirmation.

This class interacts with the `MyPageNumberPagination` class for pagination, `DjangoFilterBackend` and `OrderingFilter` for filtering, and `DnListFilter` for specific filtering criteria.

**Note**:
- Ensure proper authentication and authorization mechanisms are in place to control access to dispatch confirmation functionality.
- Validate input data thoroughly to prevent any unauthorized dispatch confirmations.

**Output Example**:
{"detail": "success"}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during the process, it returns None.

In the calling object, get_queryset, the get_project function is invoked to obtain the 'id' value. This 'id' value is then used to filter DnListModel objects based on specific conditions related to the request user and model attributes.

**Note**: 
- The get_project function is designed to handle exceptions gracefully and return None if an error occurs during the retrieval of the 'pk' value.

**Output Example**: 
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a queryset of DnListModel objects based on specific conditions related to the request user and model attributes.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_queryset function first obtains the 'id' by calling the get_project method. It then checks if there is a request user. If there is a user, it filters DnListModel objects based on the openid, id, and is_delete attributes. If there is no user, an empty queryset is returned. This function is crucial for fetching filtered data based on user authentication and model attributes.

**Note**: 
- This function is designed to handle different scenarios based on the presence of a request user.
- It utilizes the get_project method to retrieve the 'id' value necessary for filtering DnListModel objects.

**Output Example**: 
If the request user is authenticated and the conditions are met, the function will return a queryset of DnListModel objects filtered based on specific attributes.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_serializer_class function checks the action being performed. If the action is 'create', it returns the DNListUpdateSerializer from dn/serializers.py. Otherwise, it calls the http_method_not_allowed method with the request parameter.

This function is crucial in the DnDispatchViewSet class in dn/views.py as it helps in dynamically selecting the appropriate serializer class based on the action being executed. By returning the correct serializer class, it ensures that the data is serialized and validated appropriately for further processing.

**Note**: 
- Ensure that the actions are correctly defined to handle the serializer selection logic.
- The return value of this function is the serializer class to be used for the current action.

**Output Example**:
DNListUpdateSerializer
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to handle the creation of a new dispatch for a delivery note (DN) in the system.

**parameters**:
- request: Represents the HTTP request object.
- pk: Represents the primary key of the object.

**Code Description**:
The create function first retrieves the DN object based on the provided primary key (pk). It then checks if the DN status is not equal to 4, in which case it raises an APIException indicating that the DN status is not picked. If the status is 4, it updates the DN status to 5 and proceeds to process the dispatch details.

The function retrieves the necessary data from the request object and fetches the staff name based on the authentication details. It then validates the existence of the driver in the system. If the driver exists, it updates the DN details, stock quantities, and bin quantities accordingly. It also manages the deletion of stock items if needed.

After processing the dispatch details, the function creates a new driver dispatch entry in the system and saves the changes to the DN object. Finally, it returns a success response with a status code of 200.

The create function interacts with various models and performs operations such as data retrieval, validation, updates, and creation of new entries. It ensures the proper handling of dispatch-related tasks within the system.

**Note**: This function is crucial for managing dispatch operations related to delivery notes and involves complex data processing and validation logic.

**Output Example**:
```json
{
    "detail": "success"
}
```
***
## ClassDef DnPODViewSet
**DnPODViewSet**: The function of DnPODViewSet is to handle operations related to confirming dispatch for a specific project.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: DnListFilter

**Code Description**:
The `DnPODViewSet` class is a subclass of `viewsets.ModelViewSet` that provides functionality for confirming dispatch. It includes the following methods:
- `get_project`: Retrieves the project ID from the request parameters.
- `get_queryset`: Retrieves the queryset of `DnListModel` objects based on the authenticated user and project ID.
- `get_serializer_class`: Determines the serializer class based on the action being performed.
- `create`: Handles the creation of a dispatch confirmation, updating related `DnDetailModel` objects based on the provided data.

The class utilizes various attributes such as pagination, filtering, and ordering to manage the data effectively. It interacts with the `DnListModel` and `DnDetailModel` models to process dispatch confirmation requests.

This class is called by other components within the project to facilitate the confirmation of dispatch operations. Additionally, it interacts with serializers and model classes to handle data processing and validation.

**Note**:
Developers should ensure that the necessary request parameters are provided when utilizing the methods of this class to avoid errors in processing dispatch confirmations.

**Output Example**:
{"detail": "success"}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None. This function is used to extract the 'pk' value which is then used in the get_queryset function to filter DnListModel objects based on the extracted 'pk' value and other conditions.

In the get_queryset function, the get_project function is called to obtain the 'pk' value. Subsequently, the function checks if there is a user in the request. If a user exists, it filters DnListModel objects based on the openid from the request's auth attribute, the extracted 'pk' value, and the condition is_delete=False. If no user exists, an empty queryset is returned.

**Note**: 
Developers should ensure that the 'pk' value is present in the self.kwargs dictionary before calling the get_project function to avoid potential errors.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs as 123, the function will return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a specific DnListModel object based on the 'openid', 'id', and 'is_delete' conditions.

**parameters**: 
- self: The instance of the class.

**Code Description**: 
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if there is a user in the request. If a user exists, the function filters DnListModel objects based on the 'openid' from the request's auth attribute, the extracted 'id' value, and the condition is_delete=False. If no user exists, an empty queryset is returned.

In this function, the 'id' value is crucial for filtering DnListModel objects, ensuring that only the relevant object is retrieved based on the specified conditions.

**Note**: Developers should ensure that the 'id' value is correctly extracted by calling the get_project function before invoking get_queryset to avoid any potential errors related to filtering DnListModel objects.

**Output Example**: 
If the 'id' value is successfully retrieved and a user exists in the request, the function will return a queryset containing the specific DnListModel object that meets the filtering criteria.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class to be used based on the action performed.

**Code Description**:
The get_serializer_class function checks the action being performed. If the action is 'create', it returns the DNListUpdateSerializer from dn/serializers.py, which is responsible for serializing and validating input data for updating DN list entries. Otherwise, it calls the http_method_not_allowed method to handle the request.

The DNListUpdateSerializer class defines a field dn_code, which is required for updating DN list entries. This serializer is used to ensure that the input data is properly validated and processed before updating the DN list entry.

When an action triggers the need for a serializer class in the DNPODViewSet, the get_serializer_class function is called to determine the appropriate serializer based on the action type.

**Note**:
- The get_serializer_class function is crucial for selecting the appropriate serializer class based on the action.
- Ensure that the DNListUpdateSerializer is used for updating DN list entries to validate input data accurately.

**Output Example**:
DNListUpdateSerializer
***
### FunctionDef create(self, request, pk)
**create**: The function of create is to process the delivery note (DN) status update and handle the delivery details based on the provided data.

**parameters**:
- request: Represents the request object.
- pk: Represents the primary key of the object.

**Code Description**:
The create function first retrieves the DN object based on the provided primary key (pk). It then checks if the DN status is not equal to 5, raising an exception if it is not. Next, the function updates the DN status to 6 and processes the delivery details provided in the request data. It validates the delivery quantities and updates the DN details accordingly. Finally, the function saves the changes to the DN object and returns a success response.

The function interacts with the DnDetailModel to fetch and update delivery details based on the provided data and DN information.

**Note**: Ensure that the request data follows the expected format to avoid errors during processing.

**Output Example**:
{"detail": "success"}
***
## ClassDef FileListDownloadView
**FileListDownloadView**: The function of FileListDownloadView is to handle the download of a CSV file containing delivery note data based on user permissions and language preferences.

**attributes**:
- renderer_classes: Specifies the renderer classes for the view.
- filter_backends: Defines the filter backends for data filtering.
- ordering_fields: Specifies the fields for data ordering.
- filter_class: Defines the filter class for data filtering.

**Code Description**:
FileListDownloadView is a class that extends viewsets.ModelViewSet and provides methods for retrieving project details, querying data based on user permissions, determining the serializer class, selecting the language for rendering, and generating a CSV file for download. The get_project method retrieves the project ID, while the get_queryset method filters and retrieves data based on user authentication and project ID. The get_serializer_class method selects the appropriate serializer class based on the action type. The get_lang method determines the language for rendering the CSV file. The list method generates and returns a CSV file for download with the appropriate language settings.

This class utilizes the FileListRenderCN and FileListRenderEN classes from files.py to render CSV files with Chinese or English labels based on the 'HTTP_LANGUAGE' header. Additionally, it relies on the DnListFilter class from filter.py to filter delivery note data effectively.

**Note**: Developers should ensure that the language handling logic in the get_lang method aligns with the language preferences of users to provide accurate CSV file rendering. Understanding the filter_backends, ordering_fields, and filter_class attributes is essential for customizing data filtering and ordering behavior in the view.

**Output Example**:
A CSV file containing delivery note data with appropriate language labels based on user preferences.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: This function does not take any parameters.

**Code Description**: The get_project function first attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the value. If an exception occurs during the retrieval process, it returns None.

In the calling object get_queryset, the get_project function is used to obtain the 'id' value, which is then used to filter DnListModel objects based on certain conditions. If the 'id' is None, the function filters objects based on the request user's openid and other criteria. If the 'id' is not None, it filters objects based on the request user's openid, the specific 'id', and other criteria. If the request user is not available, an empty queryset is returned.

**Note**: It is important to handle exceptions properly when using the get_project function to ensure that unexpected errors are caught and managed effectively.

**Output Example**: 
- If 'pk' value is present in self.kwargs: 123
- If 'pk' value is not present in self.kwargs: None
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter DnListModel objects based on specific criteria, including the request user's openid, the 'id' value, and other conditions. If the request user is not available, an empty queryset is returned.

**parameters**: This function does not take any parameters.

**Code Description**: The get_queryset function first retrieves the 'id' value by calling the get_project function. It then checks if the request user is available. If so, it filters DnListModel objects based on various conditions. If there are DnListModel objects with empty 'customer' fields older than a certain date, they are deleted. Depending on the 'id' value, the function filters objects differently. If 'id' is None, objects are filtered based on the request user's openid and other criteria. If 'id' is not None, objects are filtered based on the request user's openid, the specific 'id', and other criteria. If the request user is not available, an empty queryset is returned.

**Note**: Proper exception handling is crucial when using the get_project function to ensure smooth operation and error management.

**Output Example**: 
- If request user is available and 'id' is None: DnListModel queryset filtered based on openid and other criteria.
- If request user is available and 'id' is not None: DnListModel queryset filtered based on openid, specific id, and other criteria.
- If request user is not available: Empty DnListModel queryset.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed.

**parameters**: This function does not take any parameters.

**Code Description**: The get_serializer_class function checks the action being performed, and if the action is 'list', it returns the FileListRenderSerializer for serialization. This serializer class is responsible for serializing data related to a file list render, including fields such as code, status, weight, volume, cost, customer information, creator, back order label, create time, and update time. The FileListRenderSerializer is utilized to serialize instances of the queryset in the list method of the FileListDownloadView class. The serialized data is then rendered in a CSV format for download, with the file being named based on the current date and time.

**Note**: Developers can use this function to dynamically select the appropriate serializer class based on the action being performed within the FileListDownloadView class. The FileListRenderSerializer provides a structured way to serialize data related to file list renders, ensuring consistency and ease of data representation.

**Output Example**:
```python
return serializers.FileListRenderSerializer
```
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language for rendering a CSV file based on the 'HTTP_LANGUAGE' header and utilize the appropriate renderer to render the file with the corresponding labels.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language from the 'HTTP_LANGUAGE' header in the request metadata. If the language is set to 'zh-hans' (Simplified Chinese), the function calls the FileListRenderCN class to render the CSV file with Chinese labels. Otherwise, it uses the FileListRenderEN class to render the file with English labels. This language handling mechanism ensures that the CSV files are displayed in the correct language based on the user's preference.

In the project structure, the get_lang function is called within the list method of the FileListDownloadView class in views.py. It receives the data to be rendered, determines the language setting, selects the appropriate renderer, and returns the rendered CSV file based on the language specified. This function plays a crucial role in providing multilingual support for CSV file generation in the delivery note system.

**Note**:
Developers should ensure that the 'HTTP_LANGUAGE' header is set correctly to trigger the language-based rendering logic in the get_lang function. Understanding the language handling mechanism in this function is essential for generating CSV files with the appropriate labels based on language preferences.

**Output Example**:
A rendered CSV file with data headers displayed in the selected language based on the 'HTTP_LANGUAGE' header.
***
### FunctionDef list(self, request)
**list**: The function of list is to serialize instances of queryset data using FileListRenderSerializer and render the data in a CSV format for download with a dynamically named file based on the current date and time.
**parameters**:
- self: The instance of the class.
- request: The request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**: The list function within the FileListDownloadView class serializes instances of the queryset data using the FileListRenderSerializer class. It then generates a CSV file for download by rendering the serialized data. The function dynamically names the file with the prefix 'dnlist_' followed by the current date and time in the format 'YYYYMMDDHHMMSSffffff'. The rendered CSV file is returned as a StreamingHttpResponse object for the user to download.

The function utilizes the FileListRenderSerializer class to serialize the data related to file list renders. It also interacts with the get_queryset method to filter the queryset data and the get_lang method to determine the language for rendering the CSV file. By combining these components, the list function provides a seamless process for generating and downloading CSV files containing file list render data.

**Note**: Developers can customize the file naming convention or the CSV content based on specific project requirements by modifying the list function. Additionally, understanding the flow of data serialization, rendering, and response generation is essential for utilizing this function effectively in a Django project.

**Output Example**:
A CSV file named 'dnlist_20220101120030500000.csv' containing serialized data related to file list renders for download.
***
## ClassDef FileDetailDownloadView
**FileDetailDownloadView**: The function of FileDetailDownloadView is to handle the download of file details, including rendering CSV files with detailed information about delivery notes based on language preferences.

**attributes**:
- renderer_classes: A tuple of renderer classes for file rendering.
- filter_backends: A list of filter backends for queryset filtering.
- ordering_fields: A list of fields for result ordering.
- filter_class: The filter class for queryset filtering.

**Code Description**:
FileDetailDownloadView is a class that extends viewsets.ModelViewSet and provides functionality for downloading file details. It includes methods for obtaining project details, filtering querysets based on user and project information, determining the serializer class based on actions, selecting the language for rendering, and generating CSV file downloads.

The get_project method retrieves the project ID from the request parameters. The get_queryset method filters the queryset based on the user and project details. The get_serializer_class method selects the serializer class based on the action type. The get_lang method determines the language for rendering based on the 'HTTP_LANGUAGE' header. The list method generates a CSV file response with the appropriate language and file name.

FileDetailDownloadView utilizes the FileDetailRenderCN and FileDetailRenderEN classes for rendering CSV files in Chinese or English based on the language header in the request. It also uses the DnDetailFilter class for queryset filtering based on specified fields and lookup types.

This class is called in the project by various objects such as SalesViewSet, DnDetailViewSet, and SannerDnDetailPickingListView, where the DnDetailFilter is used as the filter_class attribute to enable filtering of file details based on specific fields and lookup types.

**Note**: Ensure that the necessary headers and labels are provided by the detail_file_headers and detail_cn_data_header functions for consistent rendering of CSV files. Handle language selection appropriately in the get_lang method to ensure correct language-specific rendering. Developers should refer to the fields attribute of DnDetailFilter for available filtering options when using this class.

**Output Example**:
A CSV file containing detailed information about delivery notes in Chinese or English based on the language preference.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters.

**Code Description**: 
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during the process, it returns None.

In the context of the project, the get_project function is called within the get_queryset function of the FileDetailDownloadView class. In the get_queryset function, the get_project function is used to obtain the 'id' value, which is then utilized to filter DnDetailModel objects based on certain conditions.

**Note**: 
- It is important to handle exceptions properly when using this function to ensure robust error handling.
- Ensure that the self.kwargs dictionary contains the 'pk' key before calling this function to avoid potential errors.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs:
```
123
```

If an exception occurs during the process:
```
None
```
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter DnDetailModel objects based on specific conditions related to the 'id' value obtained from the get_project function and the authenticated user.

**parameters**: 
- No parameters.

**Code Description**: 
The get_queryset function first retrieves the 'id' value by calling the get_project function. It then checks if the request user is authenticated. If authenticated, it filters DnDetailModel objects based on the 'openid', 'id' (if available), and 'is_delete' fields. If the user is not authenticated, an empty queryset is returned.

This function is utilized within the FileDetailDownloadView class to customize the queryset based on the user's authentication status and the 'id' value obtained from the get_project function.

**Note**: 
- Proper authentication checks should be in place before utilizing this function to ensure data security.
- Ensure the get_project function is functioning correctly to retrieve the 'id' value for proper queryset filtering.

**Output Example**: 
If the request user is authenticated and 'id' is available:
```
<QuerySet [<DnDetailModel: Object1>, <DnDetailModel: Object2>, ...]>
```

If the request user is not authenticated:
```
<QuerySet []>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine and return the appropriate serializer class based on the action type.

**parameters**: This function does not take any parameters.

**Code Description**:
The get_serializer_class function is a method within the FileDetailDownloadView class. It checks the action type to decide which serializer class to return. If the action is 'list', it returns the FileDetailRenderSerializer class from the serializers module. Otherwise, it calls the http_method_not_allowed method with the request parameter.

The FileDetailRenderSerializer is responsible for serializing file detail render data, including fields such as codes, quantities, timestamps, and boolean values related to file details. It is a ModelSerializer that specifies the model to be used and excludes certain fields like 'openid' and 'is_delete' from serialization.

In the context of the project, this function plays a crucial role in determining the serializer class to handle data serialization based on the action type. It ensures that the appropriate serializer is used to format the data correctly for further processing or output.

**Note**: Developers can extend the functionality of this function by adding more conditions to handle different action types or by customizing the serializer classes based on specific requirements.

**Output Example**:
```python
return serializers.FileDetailRenderSerializer
```
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language for rendering CSV files based on the 'HTTP_LANGUAGE' header in the request and utilize the appropriate renderer for either Chinese or English data.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language information from the 'HTTP_LANGUAGE' header in the request. If the language is set to 'zh-hans' (Simplified Chinese), the function calls FileDetailRenderCN().render(data) to render the CSV file with Chinese data. Otherwise, it uses FileDetailRenderEN().render(data) to render the file in English format. If the language is not specified, the function defaults to rendering the file in English using FileDetailRenderEN().render(data).

This function is an essential part of the FileDetailDownloadView class in the views.py module, ensuring that the appropriate language-specific renderer is selected for rendering the CSV files based on the user's language preference.

**Note**: Developers should ensure that the 'HTTP_LANGUAGE' header is correctly set in the request to determine the language for rendering the CSV files accurately. Additionally, maintain consistency in the data provided to the renderers (FileDetailRenderCN and FileDetailRenderEN) to ensure the proper display of information in the CSV files.

**Output Example**:
A rendered CSV file with detailed information about delivery notes in the selected language.
***
### FunctionDef list(self, request)
**list**: The function of list is to serialize instances of queryset data using the FileDetailRenderSerializer and render the data in a CSV format for download with a dynamically generated file name based on the current date and time.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function within the FileDetailDownloadView class first retrieves instances of queryset data by filtering DnDetailModel objects using the get_queryset method. It then serializes the data using the FileDetailRenderSerializer, generates a CSV renderer based on the user's language preference with the get_lang method, and creates a StreamingHttpResponse object for downloading the CSV file. The file name is dynamically generated using the current date and time, ensuring uniqueness for each download request.

This function plays a crucial role in providing users with the ability to download file detail render data in a CSV format, enhancing data accessibility and usability within the application.

**Note**:
Developers can customize the serialization behavior by modifying the FileDetailRenderSerializer attributes and Meta options as needed. Ensure proper authentication and language settings are in place for accurate data rendering and downloading.

**Output Example**:
A CSV file named 'dndetail_20220101120000.csv' containing detailed information about file detail renders.
***
