#!/bin/sh

echo "Running Prisma Migrations..."
npx prisma migrate deploy

echo "Starting application..."
exec npm start
