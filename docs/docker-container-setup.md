Pull the SQL Server 2019 Docker Image: Open a PowerShell or Command Prompt window and run the following command to pull the SQL Server 2019 Docker image:

Code : docker pull mcr.microsoft.com/mssql/server:2019-latest

Run the Container with New Port Mapping
Code : docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=P@ssw0rd1234!" -p 1437:1433 --name sqlserver2019 -d mcr.microsoft.com/mssql/server:2019-latest

Verify the Container is Running
After running the command, verify that the container is up and running:
Code : docker ps

Setup Sql server For Mac m1

 docker run -e "ACCEPT_EULA=1" -e "MSSQL_SA_PASSWORD=Password@123" -e "MSSQL_PID=Developer" -e "MSSQL_USER=SA" -p 1433:1433 -d --name=sql mcr.microsoft.com/azure-sql-edge

Install mssql odbc 17
Extension sqlserver for php 7.3 mac
Copy extension to “opt/homebrew/lib/php/pecl/20180731”
Enable on php.ini with following code 
	extension=sqlsrv.so
extension=pdo_sqlsrv.so

Setup mysql 57 for mac m1
docker run --name mysql57 \
  --platform linux/amd64 \
  -e MYSQL_ROOT_PASSWORD=qwerty12 \
  -p 3307:3306 \
  -d mysql:5.7

Setup mongodb
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=qwerty12 \
  -v mongodb_data:/data/db \
  mongo:latest

Setup postgress
docker run --name my-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=qwerty12 \
  -p 5432:5432 \
  -d postgres
