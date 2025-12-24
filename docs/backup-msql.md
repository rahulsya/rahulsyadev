RESTORE FILELISTONLY FROM DISK = N'/var/backups/inact_tomori_encrypted.bak'

RESTORE DATABASE inact_win_encoded1S FROM DISK = N'/var/backups/inact_tomori_encrypted.bak' WITH MOVE 'inact_win_encoded1' TO '/var/opt/mssql/data/inact_win_encoded1.mdf' , MOVE 'inact_win_encoded1_log' TO '/var/opt/mssql/data/inact_win_encoded1_log.ldf'
