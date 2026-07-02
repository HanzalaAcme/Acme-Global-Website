#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ]; then
  echo "Applying database schema..."
  if [ -f "/app/scripts/init-db.js" ]; then
    node /app/scripts/init-db.js || echo "Schema init script failed"
  fi
fi
exec node server.js
