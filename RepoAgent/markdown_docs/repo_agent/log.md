## ClassDef InterceptHandler
Doc is waiting to be generated...
### FunctionDef emit(self, record)
**emit**: emit函数的作用是将日志记录传递给Loguru进行处理。

**参数**:
· self: 表示类实例本身。
· record: 表示日志记录的内容。

**代码描述**:
在这个函数中，首先尝试获取与记录级别对应的Loguru级别。然后通过追溯调用堆栈，找到记录消息来源的调用者。最后，使用Loguru记录器将日志记录传递给Loguru进行处理。

**注意**: 在使用该函数时，需要确保已经正确配置了Loguru记录器，并且了解日志记录的级别和来源。
***
## FunctionDef set_logger_level_from_config(log_level)
Doc is waiting to be generated...
