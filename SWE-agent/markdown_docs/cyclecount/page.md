## ClassDef CycleCountPageNumberPagination
**CycleCountPageNumberPagination**: The function of CycleCountPageNumberPagination is to define a custom pagination configuration for the Cycle Count page.

**attributes**:
- page_size: 10000
- page_size_query_param: "max_page"
- max_page_size: 20000
- page_query_param: 'page'

**Code Description**:
The CycleCountPageNumberPagination class extends the PageNumberPagination class and customizes the pagination settings for the Cycle Count page. It sets the default page size to 10000 items per page, allows the client to specify the maximum page size using the "max_page" query parameter, limits the maximum page size to 20000 items, and uses the "page" query parameter for pagination navigation.

**Note**:
Developers can utilize this class to control how pagination works on the Cycle Count page by adjusting the page size, maximum page size, and query parameters for page navigation.
