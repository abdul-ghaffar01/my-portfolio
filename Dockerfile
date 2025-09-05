# --- Stage 1: Build ---
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies first (better cache)
COPY package*.json ./
RUN npm install

# Copy source code AFTER dependencies
COPY . .

# Build Next.js
RUN npm run build

# --- Stage 2: Run ---
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only what’s needed for production
COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3001
CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "3001"]
