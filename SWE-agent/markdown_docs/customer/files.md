## FunctionDef file_headers
**file_headers**: The function of file_headers is to return a list of specific headers related to customer information.
**parameters**: This Function does not take any parameters.
**Code Description**: This Function returns a list of headers including 'customer_name', 'customer_city', 'customer_address', 'customer_contact', 'customer_manager', 'customer_level', 'creater', 'create_time', and 'update_time'. These headers are essential for organizing and displaying customer data.
In the project, the function file_headers is called by two classes: FileRenderCN and FileRenderEN. Both classes are responsible for rendering CSV files with specific headers for Chinese and English data respectively. The file_headers function provides the necessary headers for these renderers to correctly structure the CSV files based on customer information.
**Note**: It is important to ensure that the order and spelling of the headers returned by this function match the expected format in the calling classes.
**Output Example**: 
['customer_name', 'customer_city', 'customer_address', 'customer_contact', 'customer_manager', 'customer_level', 'creater', 'create_time', 'update_time']
## FunctionDef cn_data_header
**cn_data_header**: The function of cn_data_header is to return a dictionary containing Chinese translations for various customer data headers.

**parameters**: 
- None

**Code Description**: 
The `cn_data_header` function returns a dictionary with key-value pairs where the keys represent different customer data headers in English, and the values are the corresponding Chinese translations. The function includes translations for headers such as customer name, city, address, contact, manager, level, creator, create time, and update time.

This function is called in multiple places within the project:
1. In the `FileRenderCN` class located in `customer/files.py/FileRenderCN`, the `cn_data_header` function is used to set the labels for rendering a CSV file in Chinese.
2. In the `get_lang` method of both `CustomerfileViewSet` and `CustomerfileAddViewSet` classes in `uploadfile/views.py`, the `cn_data_header` function is used to retrieve the data headers in Chinese based on the language specified in the request.

**Note**: 
- The `cn_data_header` function specifically provides Chinese translations for customer data headers and is designed to be used in multilingual applications where Chinese translations are required.
- Ensure that the function is called in the appropriate context to retrieve the Chinese translations for customer data headers accurately.

**Output Example**: 
```
{
    'customer_name': '客户名称',
    'customer_city': '客户城市',
    'customer_address': '详细地址',
    'customer_contact': '联系电话',
    'customer_manager': '负责人',
    'customer_level': '客户等级',
    'creater': '创建人',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
```
## FunctionDef en_data_header
**en_data_header**: The function of en_data_header is to return a dictionary containing English labels for customer data fields.

**parameters**: This Function does not take any parameters.

**Code Description**: The en_data_header function returns a dictionary with English labels for various customer data fields such as customer name, city, address, contact, manager, level, creator, create time, and update time. These labels are used to represent the corresponding data fields in English.

In the project, the en_data_header function is called in multiple places. In the FileRenderEN class in files.py, the en_data_header function is used to set labels for CSV file headers. Additionally, in the get_lang method of CustomerfileViewSet and CustomerfileAddViewSet in views.py, the en_data_header function is used to retrieve English data headers based on the language specified in the request.

**Note**: Developers can utilize the en_data_header function to easily access English labels for customer data fields in their applications.

**Output Example**:
{
    'customer_name': 'Customer Name',
    'customer_city': 'Customer City',
    'customer_address': 'Customer Address',
    'customer_contact': 'Customer Contact',
    'customer_manager': 'Customer Manager',
    'customer_level': 'Customer Level',
    'creater': 'Creater',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## ClassDef FileRenderCN
**FileRenderCN**: The function of FileRenderCN is to render CSV files with specific headers for Chinese data.

**attributes**:
- header: Contains the headers for the CSV file.
- labels: Contains the Chinese translations for the headers.

**Code Description**:
FileRenderCN is a class that extends CSVStreamingRenderer and is responsible for rendering CSV files with specific headers tailored for Chinese data. The class utilizes the file_headers function to set the header attribute, which includes essential customer information such as customer name, city, address, contact, manager, level, creator, create time, and update time. Additionally, the class uses the cn_data_header function to populate the labels attribute with Chinese translations for each header. This ensures that the CSV files generated by FileRenderCN have the appropriate headers in Chinese for better readability and understanding of customer data.

In the project structure, FileRenderCN is called within the FileDownloadView class in views.py to determine the language specified in the request and render the CSV file accordingly. By checking the language parameter, FileRenderCN selects the appropriate renderer (either itself for Chinese or FileRenderEN for other languages) to generate the CSV file with the correct headers.

**Note**: It is crucial to maintain consistency between the headers provided by the file_headers function and the translations returned by the cn_data_header function to ensure accurate rendering of Chinese CSV files. Additionally, when using FileRenderCN in conjunction with the FileDownloadView class, make sure to set the language parameter correctly to generate the desired CSV output.
## ClassDef FileRenderEN
**FileRenderEN**: The function of FileRenderEN is to render CSV files with specific English headers for customer data.
**attributes**: 
- header: Contains the list of file headers for customer information.
- labels: Contains a dictionary of English labels for customer data fields.

**Code Description**: 
FileRenderEN is a class that extends CSVStreamingRenderer and is responsible for rendering CSV files with English headers for customer data. The class utilizes the file_headers function from file_headers.py to set the necessary headers for organizing and displaying customer information in English. Additionally, it uses the en_data_header function from en_data_header.py to assign English labels to the customer data fields. By combining these headers and labels, FileRenderEN ensures that the CSV files are structured correctly for English data representation.

In the project, FileRenderEN is called in the context of generating CSV files with English headers. It works in conjunction with the get_lang method in CustomerfileViewSet and CustomerfileAddViewSet in views.py to provide language-specific rendering based on the request's language parameter. The class plays a crucial role in maintaining consistency and clarity in displaying customer data in English format.

**Note**: Developers should ensure that the order and naming of headers and labels match the expected format to maintain the integrity of the CSV files. Additionally, FileRenderEN can be used as a reference for rendering CSV files with English headers in applications dealing with customer data.
