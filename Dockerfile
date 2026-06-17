# Stage 1 — builder: install deps, run lint and tests
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx htmlhint index.html
RUN npx jest --coverage

# Stage 2 — final: lean production image (~25 MB)
FROM nginx:alpine
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
EXPOSE 80
