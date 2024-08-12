## FunctionDef api_tags(data)
**api_tags**: The function of api_tags is to return a list of API tags based on the language provided in the input data.

**parameters**:
- data: The input data containing language information.

**Code Description**:
The `api_tags` function takes the input data and uses a regular expression to find the language specified (in this case, 'zh-CN' for Chinese). If the language is Chinese, it returns a list of API tags with Chinese descriptions. If the language is not Chinese, it returns a list of API tags with English descriptions.

**Note**:
- Make sure the input data contains language information in order to get the appropriate API tags.
- The function uses regular expressions to match the language, so ensure the language format is consistent.

**Output Example**:
```python
[
    {
        "name": "asn",
        "description": "到货通知书"
    },
    {
        "name": "binproperty",
        "description": "库位属性"
    },
    ...
]
```
