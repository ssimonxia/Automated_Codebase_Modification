## FunctionDef file_headers
**file_headers**: The function of file_headers is to return a list of file headers including 'capital_name', 'capital_qty', 'capital_cost', 'creater', 'create_time', and 'update_time'.
**parameters**: This Function does not take any parameters.
**Code Description**: The file_headers Function returns a list of predefined file headers commonly used in a data file related to capital information. These headers include the name of the capital, quantity, cost, creator, creation time, and update time. The purpose of this Function is to provide a standardized set of headers for data files.
In the project, the file_headers Function is called by two classes: FileRenderCN and FileRenderEN. Both classes are subclasses of CSVStreamingRenderer and use the headers returned by file_headers to define the structure of the data files they render. This ensures consistency in the file structure across different renditions of capital data in the project.
**Note**: Developers can modify the file_headers Function to include additional headers or customize the existing ones based on specific project requirements.
**Output Example**: 
['capital_name', 'capital_qty', 'capital_cost', 'creater', 'create_time', 'update_time']
## FunctionDef cn_data_header
**cn_data_header**: The function of cn_data_header is to return a dictionary containing keys and their corresponding Chinese translations for data headers commonly used in asset management.

**parameters**: 
- No parameters are required for this function.

**Code Description**: 
The cn_data_header function returns a dictionary with keys representing common data headers in asset management, along with their Chinese translations. The keys include 'capital_name', 'capital_qty', 'capital_cost', 'creater', 'create_time', and 'update_time', each paired with its Chinese translation.

This function is called in the FileRenderCN class in the files.py module of the capital project. In the FileRenderCN class, the labels attribute is assigned the dictionary returned by cn_data_header. This usage ensures that the Chinese translations of data headers are available for rendering CSV files in Chinese.

**Note**: 
Ensure that the keys in the dictionary returned by cn_data_header match the data headers used in the asset management system to maintain consistency in the rendered CSV files.

**Output Example**: 
{
    'capital_name': '资产名称',
    'capital_qty': '资产数量',
    'capital_cost': '资产成本',
    'creater': '创建人',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef en_data_header
**en_data_header**: The function of en_data_header is to return a dictionary containing key-value pairs for English data headers related to capital information.

**parameters**: 
- No parameters are required for this function.

**Code Description**: 
The en_data_header function returns a dictionary with key-value pairs representing English data headers for capital information. The keys include 'capital_name', 'capital_qty', 'capital_cost', 'creater', 'create_time', and 'update_time', each associated with its corresponding English header.

This function is called within the FileRenderEN class in the project. In the FileRenderEN class, the en_data_header function is used to set labels for the CSV file rendering process, providing clear and descriptive headers for the capital data.

**Note**: 
- The en_data_header function is specifically designed to provide English headers for capital data and should be used accordingly.
- Ensure that the keys in the returned dictionary match the expected headers in the context where the function is utilized.

**Output Example**: 
{
    'capital_name': 'Capital Name',
    'capital_qty': 'Capital Qty',
    'capital_cost': 'Capital Cost',
    'creater': 'Creater',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## ClassDef FileRenderCN
**FileRenderCN**: The function of FileRenderCN is to render CSV files with Chinese data headers based on the predefined headers and their Chinese translations.

**attributes**:
- header: Contains the predefined file headers for the CSV file.
- labels: Contains the dictionary with Chinese translations of the data headers.

**Code Description**:
The FileRenderCN class is responsible for rendering CSV files with Chinese data headers. It inherits from the CSVStreamingRenderer class. The class utilizes the `header` attribute to store the predefined file headers obtained from the `file_headers` function. These headers include 'capital_name', 'capital_qty', 'capital_cost', 'creater', 'create_time', and 'update_time'.

Moreover, the class uses the `labels` attribute to store a dictionary returned by the `cn_data_header` function. This dictionary contains the Chinese translations of the data headers, ensuring that the rendered CSV files have headers in Chinese.

In the project, the FileRenderCN class is called in the FileDownloadView class to determine the language for rendering the CSV file. Depending on the language specified in the request headers, either FileRenderCN or FileRenderEN is used to render the data accordingly.

**Note**:
Developers can customize the data headers and their translations by modifying the `file_headers` and `cn_data_header` functions to meet specific project requirements. Additionally, ensure consistency between the headers and translations to maintain accurate data representation in the rendered CSV files.
## ClassDef FileRenderEN
**FileRenderEN**: The function of FileRenderEN is to render CSV files with English data headers related to capital information.

**attributes**:
- header: A list of file headers including 'capital_name', 'capital_qty', 'capital_cost', 'creater', 'create_time', and 'update_time'.
- labels: A dictionary containing English data headers for capital information.

**Code Description**:
FileRenderEN is a class that extends CSVStreamingRenderer and defines the structure of CSV files with English headers for capital data rendering. The 'header' attribute is populated by calling the file_headers() function, which provides a predefined list of file headers. The 'labels' attribute is set using the en_data_header() function, which returns a dictionary of English data headers. By utilizing these attributes, FileRenderEN ensures consistent and descriptive headers for the rendered CSV files, enhancing readability and usability of the data.

This class plays a crucial role in standardizing the format of CSV files containing capital information within the project. It leverages the file_headers() and en_data_header() functions to maintain a uniform structure across different renditions of capital data. Additionally, FileRenderEN is called within the get_lang method of the FileDownloadView class to render CSV files based on the language specified in the HTTP request.

**Note**:
Developers can customize the file headers and English labels by modifying the file_headers() and en_data_header() functions to meet specific project requirements. It is essential to ensure consistency between the headers defined in these functions and their usage in FileRenderEN to avoid rendering issues.
