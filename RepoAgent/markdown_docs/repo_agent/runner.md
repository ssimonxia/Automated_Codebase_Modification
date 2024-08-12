## ClassDef Runner
Doc is waiting to be generated...
### FunctionDef __init__(self)
Doc is waiting to be generated...
***
### FunctionDef get_all_pys(self, directory)
**get_all_pys**: get_all_pys函数的功能是在给定目录中获取所有的Python文件。

**参数**:
· directory: 待搜索的目录路径。

**代码描述**:
该函数通过os.walk(directory)遍历给定目录及其子目录中的所有文件，将所有以".py"结尾的文件路径添加到python_files列表中，并最终返回该列表。

**注意**: 在调用该函数时，确保传入正确的目录路径。

**输出示例**:
['/path/to/directory/file1.py', '/path/to/directory/subdirectory/file2.py', ...]
***
### FunctionDef generate_doc_for_a_single_item(self, doc_item)
Doc is waiting to be generated...
***
### FunctionDef first_generate(self)
Doc is waiting to be generated...
***
### FunctionDef markdown_refresh(self)
Doc is waiting to be generated...
#### FunctionDef recursive_check(doc_item)
Doc is waiting to be generated...
***
#### FunctionDef to_markdown(item, now_level)
Doc is waiting to be generated...
***
***
### FunctionDef git_commit(self, commit_message)
**git_commit**: git_commit函数的作用是执行git提交操作并附带提交信息。

**参数**:
· commit_message: 提交信息，用于描述本次提交的内容。

**代码描述**:
git_commit函数通过subprocess模块调用系统命令"git commit"来提交更改，并附带提交信息。如果提交过程中出现异常，会捕获CalledProcessError异常并打印错误信息。

**注意**: 在调用git_commit函数时，确保commit_message参数是一个描述性的字符串，以便清晰地记录本次提交的内容。
***
### FunctionDef run(self)
Doc is waiting to be generated...
***
### FunctionDef add_new_item(self, file_handler, json_data)
Doc is waiting to be generated...
***
### FunctionDef process_file_changes(self, repo_path, file_path, is_new_file)
Doc is waiting to be generated...
***
### FunctionDef update_existing_item(self, file_dict, file_handler, changes_in_pyfile)
Doc is waiting to be generated...
***
### FunctionDef update_object(self, file_dict, file_handler, obj_name, obj_referencer_list)
Doc is waiting to be generated...
***
### FunctionDef get_new_objects(self, file_handler)
**get_new_objects**: get_new_objects函数的功能是通过比较.py文件的当前版本和上一个版本，获取添加和删除的对象。

**参数**:
· file_handler (FileHandler): 文件处理器对象。

**代码描述**:
该函数首先通过file_handler.get_modified_file_versions()获取当前版本和上一个版本的文件内容。然后，解析当前版本和上一个版本的.py文件，获取函数和类信息。接着，通过集合运算找出新增的对象和删除的对象，分别存储在new_obj和del_obj中，并以元组的形式返回。

在项目中，get_new_objects方法被Runner类的update_existing_item方法调用。update_existing_item方法用于更新现有项目，在处理被删除的对象后，调用get_new_objects方法获取新增的对象，进而更新文件结构信息。

**注意**:
- 对于文件可能是新添加且不在先前提交中的情况，previous_version会被设置为None。

**输出示例**:
('new_obj', 'del_obj')
***
