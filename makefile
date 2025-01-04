# Variabel untuk nama container dan service
CONTAINER_NAME=backend-test-app
DB_CONTAINER_NAME=mysql-db
IMAGE_NAME=agusheryanto182/backend-test-app
TAG=latest

# Build image Docker
build:
	docker compose build

# Jalankan container Docker
up:
	docker compose up -d

# Hentikan dan hapus container Docker
down:
	docker compose down

# Jalankan migrasi Prisma
migrate:
	docker compose exec app npx prisma migrate deploy

# Jalankan aplikasi secara manual (menggunakan entrypoint.sh)
start:
	docker compose exec app npm start

# Cek status container Docker
status:
	docker compose ps

# Hapus semua container, volume, dan network yang ada
clean:
	docker compose down -v --rmi all

# Hentikan aplikasi dan hapus semua container serta volume
reset: down clean

# Masuk ke dalam container untuk debugging
enter:
	docker exec -it $(CONTAINER_NAME) sh

# Masuk ke dalam container database untuk debugging
enter-db:
	docker exec -it $(DB_CONTAINER_NAME) sh

# Lihat log dari container aplikasi
logs:
	docker logs -f $(CONTAINER_NAME)

# Lihat log dari container database
logs-db:
	docker logs -f $(DB_CONTAINER_NAME)

# Restart aplikasi Docker
restart:
	docker compose restart app

# Push Docker image ke DockerHub
push:
	docker tag $(IMAGE_NAME) $(IMAGE_NAME):$(TAG)
	docker push $(IMAGE_NAME):$(TAG)