## FunctionDef file_headers
**file_headers**: The function of file_headers is to return a list of strings representing the headers for staff files, including 'staff_name', 'staff_type', 'create_time', and 'update_time'.
**parameters**: This Function does not take any parameters.
**Code Description**: The file_headers Function returns a predefined list of strings that represent the headers for staff files. These headers include staff information such as name, type, creation time, and update time. In the project, this function is called by FileRenderCN and FileRenderEN classes to set the headers for rendering Chinese and English versions of staff files.
**Note**: This function is a simple utility function that provides consistent headers for staff files across different renderers.
**Output Example**: 
['staff_name', 'staff_type', 'create_time', 'update_time']
## FunctionDef cn_data_header
**cn_data_header**: The function of cn_data_header is to return a dictionary containing keys for staff information in Chinese.

**parameters**: 
- None

**Code Description**: 
The `cn_data_header` function returns a dictionary with keys representing staff information such as staff name, staff type, create time, and update time. This function is designed to provide the Chinese translations for these specific keys.

In the project, the `cn_data_header` function is called within the `FileRenderCN` class in the `staff/files.py` file. The `labels` attribute of the `FileRenderCN` class is assigned the return value of the `cn_data_header` function. This indicates that the Chinese translations for staff information keys are used within the `FileRenderCN` class for rendering purposes.

**Note**: 
Developers can utilize the `cn_data_header` function to easily access the Chinese translations for staff information keys in their applications.

**Output Example**:
{
    'staff_name': '员工用户名',
    'staff_type': '员工类型',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef en_data_header
**en_data_header**: The function of en_data_header is to return a dictionary containing key-value pairs for staff-related data headers.

**parameters**: This Function does not take any parameters.

**Code Description**: The en_data_header function returns a dictionary with key-value pairs representing staff-related data headers such as staff name, staff type, create time, and update time. These headers are defined with corresponding string values in Unicode format.

In the project, the en_data_header function is called within the FileRenderEN class. The labels attribute of the FileRenderEN class is assigned the dictionary returned by the en_data_header function. This usage indicates that the en_data_header function is responsible for providing the labels for staff-related data in the context of file rendering in English.

**Note**: It is important to note that the en_data_header function specifically deals with defining data headers related to staff information. Any modifications to the data headers should be done within this function to ensure consistency in the application.

**Output Example**: 
{
    'staff_name': u'Staff Name',
    'staff_type': u'Staff Type',
    'create_time': u'Create Time',
    'update_time': u'Update Time'
}
## ClassDef FileRenderCN
**FileRenderCN**: The function of FileRenderCN is to render CSV files with Chinese headers and labels.

**attributes**:
- header: Represents the headers for the CSV file.
- labels: Contains Chinese translations for the data headers.

**Code Description**:
The `FileRenderCN` class inherits from `CSVStreamingRenderer` and is responsible for rendering CSV files with Chinese headers and labels. The `header` attribute is set by calling the `file_headers()` function from `staff/files.py/file_headers`, providing the headers for the CSV file. The `labels` attribute is assigned the Chinese translations for the data headers by calling the `cn_data_header()` function from `staff/files.py/cn_data_header`.

In the project, the `FileRenderCN` class is utilized within the `FileDownloadView` class in `staff/views.py` to determine the language for rendering the CSV file based on the `HTTP_LANGUAGE` header. If the language is set to 'zh-hans' (Simplified Chinese), the `FileRenderCN` instance is used to render the data; otherwise, the `FileRenderEN` instance is used for rendering (not shown in the provided code snippet).

**Note**:
Developers can leverage the `FileRenderCN` class to generate CSV files with Chinese headers, ensuring that the data is presented in the appropriate language for Chinese-speaking users.
## ClassDef FileRenderEN
**FileRenderEN**: The function of FileRenderEN is to render English versions of staff files with specific headers and labels.

**attributes**:
- header: Represents the headers for staff files in English.
- labels: Contains key-value pairs for staff-related data headers in English.

**Code Description**:
FileRenderEN is a class that extends CSVStreamingRenderer and is responsible for rendering staff files in English. The class utilizes the header attribute, which is set by calling the file_headers function to define the headers for the staff files. Additionally, the labels attribute is populated by invoking the en_data_header function to provide the English labels for staff-related data. This class ensures that the rendered staff files have consistent headers and labels in English format.

In the project, FileRenderEN is utilized within the FileDownloadView class to render English versions of staff files based on the language specified in the HTTP request. The get_lang method in FileDownloadView checks the language parameter and calls FileRenderEN to render the data accordingly. This demonstrates the integration of FileRenderEN in the file download functionality of the application.

**Note**:
It is essential to maintain the consistency of headers and labels for staff files by utilizing the file_headers and en_data_header functions when working with the FileRenderEN class. Any modifications to the headers or labels should be done within these functions to ensure uniformity in the English rendering of staff files.
