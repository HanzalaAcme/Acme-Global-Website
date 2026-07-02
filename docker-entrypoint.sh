#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ]; then
  echo "Applying database schema..."
  if [ -f "/app/scripts/init-db.js" ]; then
    node /app/scripts/init-db.js || echo "Schema init script failed"
  elif [ -d "/migrate/node_modules/prisma" ]; then
    cd /migrate
    DATABASE_URL="$DATABASE_URL" ./node_modules/.bin/prisma db push --skip-generate || echo "Prisma db push failed"
    cd /app
  fi
fi
exec node server.js
