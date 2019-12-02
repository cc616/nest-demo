#!/bin/bash

host='localhost'
port='3306'
username='root'
password='password'

dbname='user'

mysql_cmd="mysql -h${host} -P${port} -u${username} -p${password}"

echo ${mysql_cmd}

# 删除数据库
echo "drop database ${dbname}"
drop_db_sql="drop database ${dbname}"

echo ${drop_db_sql} | ${mysql_cmd}
if [ $? -eq 0 ]
then
  echo "drop databaese ${dbname} success ..."
else
  echo "drop databaese ${dbname} failed ..."
fi

# 创建数据库
echo "create database ${dbname}"
create_db_sql="create database IF NOT EXISTS ${dbname}"

echo ${create_db_sql} | ${mysql_cmd}
if [ $? -eq 0 ]
then
  echo "create databaese ${dbname} success ..."
else
  echo "create databaese ${dbname} failed ..."
  exit
fi

# 创建user表
table_user="user"
echo "create table ${table_user}"

create_table_user_sql="create table IF NOT EXISTS ${table_user} (
  id INT NOT NULL AUTO_INCREMENT,
  account VARCHAR(32) NOT NULL,
  age INT(4) NOT NULL,
  role VARCHAR(32) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)"

echo ${create_table_user_sql} | ${mysql_cmd} ${dbname}
if [ $? -eq 0 ]
then
  echo "create table ${table_user}.${dbname} success ..."
else
  echo "create table ${table_user}.${dbname} failed ..."
  exit
fi

# 插入数据
echo "inset data to ${table_user}"
inset_user_sql="insert into user (account, age, role) values ('admin', 27, 'ADMIN')"

echo ${inset_user_sql} | ${mysql_cmd} ${dbname}

if [ $? -eq 0 ]
then
  echo "inset data to ${table_user}.${dbname} success ..."
else
  echo "inset data to ${table_user}.${dbname} failed ..."
  exit
fi
