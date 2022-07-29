PostgreSQL

Do this every time
<!-- const artist_id = Math.floor(Math.random() * 10000) -->

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
npx prisma db push
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

<!-- import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const album_name = String(form.get('album_name'))
	const artist_name = String(form.get('artist_name'))
	const year_of_release = Number(
		form.get('year_of_release')
	)
	const track_names = String(form.get('track_names'))
	const genre_names = String(form.get('genre_names'))

	await prisma.album.create({
		data: {
			album_name: album_name,
			cover_img: 'pp',
			year_of_release: year_of_release,
			artists: {
				create: {
					artist_name
				}
			},
			tracks: {
				create: {
					track_names: track_names.split(',')
				}
			},
			genres: {
				create: {
					genre_names: genre_names.split(',')
				}
			}
		}
	})

	return {}
} -->
