## 🏫 Instructors

- **Theory Instructor:** [Aniqa Shirazi](https://www.linkedin.com/in/aniqa-shirazi/)
- **Lab Instructor:** Saira Shaheen

## 👥 Team Members

- **[Atif Ijaz](https://www.instagram.com/atif_ijaz.2)**
- **Hassan Raza**
- **Umair Farooq**
- **Muhammad Ramish**

---

## 🚀 Introduction

**Aughr** is a powerful **Database Management System (DBMS)** that enables users to efficiently manage structured data. With Aughr, you can:  

✅ **Create and manage databases**  
✅ **Switch between databases**  
✅ **Define and manipulate tables**  
✅ **Insert, update, and delete data**  
✅ **Drop tables and databases**

It uses its own structured query language, **Aughr Query Language (AQL)**, similar to SQL.

---

## 🛠️ How to Use Aughr

To get started with Aughr, follow a structured approach to creating, managing, and manipulating databases.

### 📌 What is AQL?

**AQL (Aughr Query Language)** is a structured query language for Aughr DBMS. It provides commands for database operations like creating databases, managing tables, and handling data.

---

## 🔑 AQL Reserved Keywords

Aughr supports the following **keywords**:

| Command         | Description                  |
| --------------- | ---------------------------- |
| `create`        | Create a new database        |
| `show`          | Show all databases           |
| `use`           | Select a database            |
| `createtable`   | Create a new table           |
| `showtables`    | List all tables              |
| `showtabledata` | View table records           |
| `insertinto`    | Insert data into a table     |
| `updateinto`    | Update an existing record    |
| `deletefrom`    | Delete a record from a table |
| `droptable`     | Remove a table permanently   |
| `closedb`       | Close the current database   |
| `dropdatabase`  | Delete an entire database    |
| `exit`          | Exit the Aughr DBMS          |

---

## 📖 Example Queries

### 1️⃣ **Creating a Database**

```sql
create college;
```

### 2️⃣ **Viewing All Databases**

```sql
show;
```

### 3️⃣ **Switching Databases**

```sql
use college;
```

### 4️⃣ **Creating a Table**

```sql
createtable faculty name:string age:int department:string;
```

### 5️⃣ **Viewing All Tables**

```sql
showtables;
```

### 6️⃣ **Viewing Table Data**

```sql
showtabledata faculty;
```

### 7️⃣ **Inserting Data into a Table**

#### ➤ Method 1: Insert with Just Values

```sql
insertinto faculty Ghaffar 20 IT;
```

#### ➤ Method 2: Insert with Name-Value Pairs

```sql
insertinto faculty age:20 department:IT name:Ghaffar;
```

### 8️⃣ **Updating Data in a Table**

```sql
updateinto faculty 1 age:21;
```

### 9️⃣ **Deleting a Record from a Table**

```sql
deletefrom faculty 1;
```

### 🔟 **Dropping a Table**

```sql
droptable faculty;
```

### 1️⃣1️⃣ **Closing a Database**

```sql
closedb;
```

### 1️⃣2️⃣ **Deleting a Database**

```sql
dropdatabase college;
```

### 1️⃣3️⃣ **Exiting the Program**

```sql
exit;
```

---

## 🎯 Conclusion

Aughr provides an **efficient** and **user-friendly** way to manage databases using AQL. Whether you're a **beginner** or an **experienced developer**, Aughr simplifies database operations with **intuitive** commands.

> 🔹 **Tip:** Always end your AQL commands with a semicolon (`;`) to ensure successful execution! ✅

---
