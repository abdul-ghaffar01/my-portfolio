# --- Stage 1: Build ---
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies first (cache friendly)
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app with env baked in
ARG NEXT_PUBLIC_CHATBOT_BACKEND_URL
ENV NEXT_PUBLIC_CHATBOT_BACKEND_URL=$NEXT_PUBLIC_CHATBOT_BACKEND_URL

RUN npm run build

# --- Stage 2: Production runner ---
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only what’s needed for production
COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Set env for runtime
ENV NODE_ENV=production
ENV NEXT_PUBLIC_CHATBOT_BACKEND_URL=$NEXT_PUBLIC_CHATBOT_BACKEND_URL

EXPOSE 3001

CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "3001"]
