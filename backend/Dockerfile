FROM golang:1.24-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости для cgo и sqlite
RUN apk add --no-cache gcc musl-dev sqlite-dev

COPY go.mod go.sum ./
RUN go mod download

COPY . .
# Убираем CGO_ENABLED=0 и добавляем необходимые флаги
RUN GOOS=linux go build -ldflags="-w -s" -o main .

FROM alpine:latest

WORKDIR /app

# Копируем бинарник и базу данных
COPY --from=builder /app/main /app/
COPY --from=builder /app/store.db /app/
COPY --from=builder /app/static /app/static

# Устанавливаем runtime зависимости
RUN apk add --no-cache libc6-compat

EXPOSE 8000

CMD ["/app/main"]