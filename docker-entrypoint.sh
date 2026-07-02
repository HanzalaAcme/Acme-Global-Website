#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ] && [ -f "./node_modules/prisma/build/index.js" ]; then
  echo "Applying database schema..."
  node ./node_modules/prisma/build/index.js db push --skip-generate || echo "Schema push skipped or failed"
fi

exec node server.js
