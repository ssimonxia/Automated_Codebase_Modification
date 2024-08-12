## FunctionDef language_prompt(default_language)
**language_prompt**: language_prompt函数的作用是接受用户输入的语言代码或语言名称，并返回对应的语言名称。

**参数**:
· default_language: 默认语言设置，用户未输入时将采用该默认语言。

**代码描述**:
language_prompt函数首先通过click.prompt方法获取用户输入的语言代码或语言名称，如果用户未输入，则采用默认语言设置。接着尝试匹配输入的语言代码或名称，并返回对应的语言名称。如果匹配失败，则会提示用户输入有效的ISO 639代码或语言名称，并引发异常。

在项目中，language_prompt函数被configure函数调用。在configure函数中，通过调用language_prompt函数获取用户设置的语言参数，用于配置项目的语言环境。

**注意**: 在调用language_prompt函数时，需要确保传入正确的默认语言设置，以便在用户未输入时使用默认值。

**输出示例**:
"English"
## FunctionDef cli
**cli**: cli函数的功能是LLM-Powered框架，用于生成存储库级别的代码文档。

**参数**：这个函数没有参数。

**代码描述**：cli函数是一个用于生成存储库级别代码文档的LLM-Powered框架。该函数本身并未实现具体功能，但作为一个框架，可以被调用并扩展以生成特定存储库的代码文档。在项目中，cli函数被repo_agent/__main__.py中的对象调用，用于启动文档生成流程。

**注意**：在使用该函数时，可以根据具体需求扩展其功能以生成特定存储库的代码文档。
## FunctionDef configure
Doc is waiting to be generated...
## FunctionDef run(model, temperature, request_timeout, base_url, target_repo_path, hierarchy_path, markdown_docs_path, ignore_list, language, log_level)
Doc is waiting to be generated...
## FunctionDef clean
Doc is waiting to be generated...
## FunctionDef print_hierarchy
Doc is waiting to be generated...
## FunctionDef diff
Doc is waiting to be generated...
## FunctionDef chat_with_repo
**chat_with_repo**: chat_with_repo函数的功能是自动问答问题和代码解释。
**参数**：该函数没有参数。
**代码描述**：chat_with_repo函数是一个用于自动问答问题和解释代码的函数。在函数内部，它调用了run_chat_with_repo函数来执行实际的问答和解释操作。
**注意**：在使用该函数时，需要确保run_chat_with_repo函数已经正确实现，以便chat_with_repo函数能够顺利执行。
