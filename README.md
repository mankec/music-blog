PostgreSQL

Do this every time

```
sudo service postgresql start
sudo -u postgres psql mbdb
\conninfo
ctrl d
npm run dev

```

For changes in database:

```
npx prisma migrate dev --name name_of_your_migration
npx prisma db seed
```

Postgres stuff:

```
sudo -u postgres createdb db_name
sudo -u postgres psql db_name
```

<!-- ```
sudo service postgresql start
pg_lsclusters
sudo -u postgres psql
sudo service postgresql restart
```

```
make
su
make install
adduser postgres
mkdir /usr/local/pgsql/data
chown postgres /usr/local/pgsql/data

su - postgres
locate initdb
/usr/lib/postgresql/12/bin/initdb -D /usr/lib/postgresql/12/data
/usr/local/pgsql/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start
/usr/local/pgsql/bin/createdb test
/usr/local/pgsql/bin/psql test
```

Success. You can now start the database server using:

```
su - postgres

/usr/lib/postgresql/12/bin/pg_ctl -D /usr/lib/postgresql/12/data -l logfile start
```

```
\l
\c music-blog
``` -->
