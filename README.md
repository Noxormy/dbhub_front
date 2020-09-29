## Create database in one click

DBhub - it is easy-use application for creation databases for your project.
Now, you don't have to waste a lot of time for set up your environment.

1. Just open [dbhub site](https://dbhub.site/)
2. Click "Create Database" button
3. Choose nodeJS or python version and use it in your code.

### For python
1. Install pip package "dbhub" by using this command in terminal:
```
pip install dbhub
```
2. Import dbhub in your code by writing this code:
```
from dbhub import get_database
```
3. Copy **api-key** from site and paste it in constans or variable in your code.
```
api_key = '9ab75642-f0a6-24b4-8143-f9844261aedd'
```
4. Get database control interface:
```
db = get_database(api_key)
```
5. Creating collections:
```
collection_name = 'example'
collection = db.get_collection(collection_name)
```
6. Create/Read/Update/Delete items in this collection:
```
collection.create(element)
collection.read(id)
collection.update(id, element)
collection.delete(id)
```

### For nodeJs
1. Install npm package "dbhub" by using this command in terminal:
```
npm install dbhub -s
```
##### "-s" - it's attribute for saving package requirement in package json 
2. Import dbhub in your code by writing this code:
```
const {getDatabase} = require('dbhub');
```
3. Copy **api-key** from site and paste it in constans or variable in your code.
```
let apiKey = '9ab75642-f0a6-24b4-8143-f9844261aedd';
```
4. Get database control interface:
```
let db = getDatabase(apiKey);
```
5. Creating collections:
```
let collectionName = 'example';
let collection = db.getCollection(collectionName);
```
6. Create/Read/Update/Delete items in this collection:
```
collection.create(element).then((id) => {});
collection.read(id).then((element) => {});
collection.update(id, element).then((success) => {});
collection.delete(id).then((success) => {});
```

#### Thanks for using!

###### If you have any problem you can contact me for email noxormy@gmail.com
