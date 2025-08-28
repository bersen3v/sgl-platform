FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY go.mod go.sum store.db ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s -extldflags '-static'" -o main .

FROM gcr.io/distroless/static-debian11

COPY --from=builder /app/main /

EXPOSE 8000

CMD ["/main"]