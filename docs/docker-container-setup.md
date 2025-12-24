**SQL Server 2019:** `docker pull mcr.microsoft.com/mssql/server:2019-latest` → `docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=P@ssw0rd1234!" -p 1437:1433 --name sqlserver2019 -d mcr.microsoft.com/mssql/server:2019-latest` → verify: `docker ps`  

**SQL Server (macOS M1):** `docker run -e "ACCEPT_EULA=1" -e "MSSQL_SA_PASSWORD=Password@123" -e "MSSQL_PID=Developer" -e "MSSQL_USER=SA" -p 1433:1433 -d --name sql mcr.microsoft.com/azure-sql-edge`  

**PHP SQLSRV (macOS):** Install **ODBC Driver 17**, copy extensions to `/opt/homebrew/lib/php/pecl/20180731`, enable in `php.ini`: `extension=sqlsrv.so`, `extension=pdo_sqlsrv.so`  

**MySQL 5.7 (M1):** `docker run --name mysql57 --platform linux/amd64 -e MYSQL_ROOT_PASSWORD=qwerty12 -p 3307:3306 -d mysql:5.7`  

**MongoDB:** `docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=qwerty12 -v mongodb_data:/data/db mongo:latest`  

**PostgreSQL:** `docker run --name my-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=qwerty12 -p 5432:5432 -d postgres`
