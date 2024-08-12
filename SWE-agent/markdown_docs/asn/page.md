## ClassDef MyPageNumberPaginationASNList
**MyPageNumberPaginationASNList**: The function of MyPageNumberPaginationASNList is to provide custom pagination for the ASN list view.

**attributes**:
- page_size: The number of items to include on a page.
- page_size_query_param: The query parameter to control the page size.
- max_page_size: The maximum number of items allowed per page.
- page_query_param: The query parameter to control the current page.

**Code Description**:
The `MyPageNumberPaginationASNList` class extends `PageNumberPagination` and provides custom pagination behavior for the ASN list view. It includes methods to get the previous and next page links based on the current page, handle paginated responses, and interact with the request object to build URLs. The `get_previous_link` and `get_next_link` methods construct the URLs for the previous and next pages, respectively, by manipulating the current URL and page number. The `get_paginated_response` method retrieves the supplier list data, constructs the paginated response structure, and includes the supplier list, count, next and previous page links, and the paginated data.

In the context of the project, the `MyPageNumberPaginationASNList` class is utilized as the pagination class for the `AsnListViewSet` view set in `asn/views.py`. This integration enables custom pagination behavior for the ASN list view, allowing users to navigate through the paginated data efficiently.

**Note**: Ensure to set the appropriate values for `page_size`, `page_size_query_param`, and `max_page_size` according to the desired pagination configuration.

**Output Example**:
```json
{
    "supplier_list": ["Supplier A", "Supplier B", "Supplier C"],
    "count": 100,
    "next": "https://example.com/api/asn?page=2",
    "previous": null,
    "results": [{}, {}, {}]
}
```
### FunctionDef get_previous_link(self)
**get_previous_link**: The function of get_previous_link is to generate the previous page link URL based on the current page number and request information.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_previous_link function first checks if there is a previous page available. If there is a previous page, it constructs the URL for the previous page by manipulating the current URL. It extracts the page number of the previous page, checks the URL structure, and then modifies the URL accordingly. If the page number is 1, it removes the page query parameter from the URL; otherwise, it replaces the page query parameter with the new page number. If the URL structure is incorrect, it raises an APIException with a message indicating a wrong API URL.

This function is called within the get_paginated_response function of the MyPageNumberPaginationASNList class. In the get_paginated_response function, the get_previous_link function is used to include the URL for the previous page in the paginated response along with other data such as the supplier list, count, and next page URL.

**Note**: 
- This function is dependent on the request, page, and page_query_param attributes of the class instance.
- The function assumes a specific URL structure and behavior for pagination.

**Output Example**:
"http://example.com/api/suppliers?page=2"
***
### FunctionDef get_next_link(self)
**get_next_link**: The function of get_next_link is to generate the URL for the next page in a paginated response.

**parameters**:
- self: The instance of the class.
  
**Code Description**: 
The get_next_link function first checks if there is a next page available. If there is a next page, it constructs the URL for the next page by appending the page number as a query parameter. The function extracts the base URL from the request, determines the page number, and then constructs the new URL with the updated page number. If the URL format is incorrect, it raises an APIException with a message indicating a wrong API URL format.

In the calling object get_paginated_response, the get_next_link function is used to retrieve the URL for the next page in the paginated response. The function is called within the Response creation to include the 'next' key in the response dictionary.

**Note**: 
- This function assumes a specific URL format and may raise an exception if the format is incorrect.
- The function relies on the availability of the next page in the pagination.

**Output Example**: 
"http://example.com/api/resource?page=2"
***
### FunctionDef get_paginated_response(self, data)
**get_paginated_response**: The function of get_paginated_response is to generate a paginated response containing supplier list data, count, next page URL, previous page URL, and results data.

**parameters**:
- self: The instance of the class.
- data: The data to be included in the paginated response.

**Code Description**:
The get_paginated_response function retrieves the supplier list data based on the request's authentication information. It then constructs a list of supplier names from the retrieved data. The function creates a Response object with an OrderedDict containing keys for 'supplier_list', 'count', 'next', 'previous', and 'results'. The 'supplier_list' key holds the list of supplier names, 'count' stores the total count of items, 'next' provides the URL for the next page using the get_next_link function, 'previous' includes the URL for the previous page using the get_previous_link function, and 'results' contains the original data passed to the function.

The get_paginated_response function relies on the supplier model, request authentication, and the get_next_link and get_previous_link functions within the same class for constructing the paginated response. By combining the supplier list, count, pagination URLs, and data, this function creates a comprehensive response for paginated results.

**Note**: 
- This function assumes a specific structure for the supplier model and request authentication.
- It depends on the availability and correct implementation of the get_next_link and get_previous_link functions for pagination functionality.

**Output Example**:
Response:
{
    'supplier_list': ['Supplier A', 'Supplier B', ...],
    'count': 100,
    'next': "http://example.com/api/resource?page=2",
    'previous': "http://example.com/api/resource?page=1",
    'results': [data]
}
***
