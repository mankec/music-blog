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
npx prisma db push
npx prisma db seed
```

Postgres stuff:

```
sudo -u postgres createdb db_name
sudo -u postgres psql db_name
```

TODOS
import { error } from '@sveltejs/kit'
throw error(400, 'not found'); error helper from @sveltejs/kit
export const load = async ({ params }) => {}

import { redirect } from '@sveltejs/kit'
throw redirect(307, '/login')

Auth restrictions
Progressive enhancement
Learn more about endpoints for components

Style the app
Make app accessible

Async functions for submit so it doesn't send data to endpoint if possible?
Make ids numbers if possible

Do not specify form action if you are sending data to the endpoint of the page you are on, not only is it unnecessary it won't work either.

Netlify
[build]
command = "npm run build"
publish = "build/"
functions = "functions/"
