## ClassDef MyPageNumberPagination
**MyPageNumberPagination**: The function of MyPageNumberPagination is to provide custom pagination behavior for paginated responses in Django REST framework.

**attributes**:
- page_size: The number of items to include on a page.
- page_size_query_param: The query parameter to control the page size.
- max_page_size: The maximum number of items allowed on a page.
- page_query_param: The query parameter to control the page number.

**Code Description**:
The `MyPageNumberPagination` class extends the `PageNumberPagination` class in Django REST framework to customize pagination behavior. It includes the following methods:

- `get_previous_link`: Generates the previous page link based on the current page.
- `get_next_link`: Generates the next page link based on the current page.
- `get_paginated_response`: Constructs the paginated response with additional data like bin size list, bin property list, count, next link, previous link, and results.

The `get_previous_link` and `get_next_link` methods handle the logic for generating previous and next page links respectively. They also handle SSL checks and query parameter manipulation.

The `get_paginated_response` method retrieves bin property and bin size data based on the request's authentication, constructs the response data, and returns a paginated response with the necessary information.

In the context of the project, the `MyPageNumberPagination` class is utilized as the `pagination_class` for the `ScannerBinsetTagView` and `APIViewSet` classes in the `binset/views.py` file. This ensures that paginated responses in these views are formatted according to the custom pagination behavior defined in `MyPageNumberPagination`.

**Note**:
Developers using the `MyPageNumberPagination` class should ensure that the pagination behavior aligns with the requirements of their API endpoints and adjust the page size, query parameters, and maximum page size as needed.

**Output Example**:
```json
{
    "bin_size_list": ["small", "medium", "large"],
    "bin_property_list": ["property1", "property2", "property3"],
    "count": 100,
    "next": "http://example.com/api/resource?page=3",
    "previous": "http://example.com/api/resource?page=1",
    "results": [...]
}
```
### FunctionDef get_previous_link(self)
**get_previous_link**: The function of get_previous_link is to generate the previous page link URL based on the current page number.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_previous_link function first checks if the current page has a previous page. If it does, it constructs the previous page URL by manipulating the current URL. It extracts the page number of the previous page and modifies the URL accordingly. If the URL format is incorrect, it raises an APIException. The function then handles the case where the page number is 1 by removing the page query parameter. Finally, it replaces the page query parameter with the new page number in the URL.

In the calling object get_paginated_response, the get_previous_link function is used to retrieve the previous page link for the paginated response. It is included in the response along with other data such as bin size list, bin property list, count, next page link, and the actual data results.

**Note**:
- This function assumes a specific URL format and may not work correctly with URLs that do not follow the expected structure.
- The function relies on the existence of certain attributes and methods in the class instance (self), such as page, request, previous_page_number, build_absolute_uri, META, remove_query_param, replace_query_param, and page_query_param.

**Output Example**:
"http://example.com/api/resource?page=2"
***
### FunctionDef get_next_link(self)
**get_next_link**: The function of get_next_link is to generate the URL for the next page in a paginated response.

**parameters**:
- self: The instance of the class.
  
**Code Description**: 
The get_next_link function first checks if there is a next page available. If there is, it constructs the URL for the next page by appending the page number as a query parameter. The function extracts the base URL from the request, determines the page number, and then constructs the new URL with the updated page number. If the URL format is incorrect, it raises an APIException.

In the calling object get_paginated_response, the get_next_link function is used to retrieve the URL for the next page in the paginated response. The function is called within the Response construction to include the next page URL in the response data.

**Note**: 
- This function assumes a specific URL format and may raise an exception if the format is incorrect.
- The function relies on the availability of the next page in the pagination.

**Output Example**: 
"https://example.com/api/data?page=3"
***
### FunctionDef get_paginated_response(self, data)
**get_paginated_response**: The function of get_paginated_response is to generate a paginated response containing bin size list, bin property list, count, next page link, previous page link, and the actual data results.

**parameters**:
- self: The instance of the class.
- data: The data to be included in the paginated response.

**Code Description**:
The get_paginated_response function retrieves bin property and bin size lists based on specific criteria. It then constructs a Response object containing the retrieved lists, count of items, next and previous page links, and the provided data. The function utilizes the get_next_link and get_previous_link functions to determine the next and previous page URLs respectively. By combining all these elements, it creates a structured paginated response.

In the context of the project, get_paginated_response is a crucial part of the pagination process within the MyPageNumberPagination class. It orchestrates the assembly of the paginated response by incorporating data retrieval, link generation, and response construction. The function plays a central role in organizing and presenting paginated data to clients consuming the API.

**Note**:
- The function relies on the presence of binproperty and binsize objects in the database to fetch the required lists.
- It assumes the availability of specific attributes and methods in the class instance (self) such as request, page, paginator, get_next_link, and get_previous_link.

**Output Example**:
{
    "bin_size_list": ["Small", "Medium", "Large"],
    "bin_property_list": ["Recyclable", "Compostable", "Non-recyclable"],
    "count": 100,
    "next": "http://example.com/api/data?page=3",
    "previous": "http://example.com/api/data?page=1",
    "results": [actual data results]
}
***
