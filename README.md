# KalJA - Kalasens Jättebra Anmälningssystem

Anmälningssystem för TF:s kalas.

Frontend: https://github.com/noletreni/kalja-frontend

Baserat på: https://github.com/FruitieX/backend-hipster-kit

# Setup guide

## Install project dependencies
```
$ yarn
```

## Install PostgreSQL

Look up instructions for your specific OS/distribution.

## Initialize DB
```
$ psql --user postgres
  CREATE DATABASE kalja;
  <C-d>

$ yarn db:migrate
```

## Insert seed data
```
# Run either of these

# Production environment
$ yarn db:seed

# Development environment, additionally inserts admin account with credentials: foo@bar.com:foobar
$ yarn db:seed-dev
```

## Register admin user (production environments)
```
# Get URL from e.g. Heroku dashboard
$ DATABASE_URL=postgres://user:pass@hostname/dbname node register_admin.js
```

## Set secret used for generating JWT tokens (production environments)
```
# Backend will refuse to run if NODE_ENV=production and this is not set:
$ export SECRET=[secret-string]
```

In Heroku, you can:
```
$ heroku config:set SECRET=[secret-string]
```

Recommendation for generating `[secret-string]`:
```
$ node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

## Run backend
```
$ yarn start
```

Backend is now listening on port 3888 (or `$PORT` if set)

## Run backend in development, watching for changes
```
$ yarn watch
```
