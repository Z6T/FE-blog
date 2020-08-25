# 技术要点总结

## type 的使用(type 语句中还可以使用 typeof 获取实例的 类型进行赋值)

```javascript
 const TodoForm: React.FC<Props>

const axios = <T>(url: Url, payload?: any): Promise<T> | never => {


type Url = "/api/todos" | "/api/toggle" | "/api/add";

```
