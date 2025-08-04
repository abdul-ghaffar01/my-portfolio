FROM node:18-alpine
WORKDIR /portfolio

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose Next.js port
EXPOSE 3001

# Build and run at container startup (env vars injected by docker-compose will be available here)
CMD ["sh", "-c", "npm run build && npm run start -- -H 0.0.0.0 -p 3001"]
