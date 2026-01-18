# Phase 1: Build Phase
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# Result: /app/build has the built files

# Phase 2: Run Phase
FROM nginx
# COPY only the build folder from the previous phase
COPY --from=builder /app/build /usr/share/nginx/html
# Nginx starts automatically

# To build and run: docker build -t vikas9dev/frontend .