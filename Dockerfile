FROM mcr.microsoft.com/playwright:v1.59.1-jammy-amd64

WORKDIR /app

# Copy root dependencies first
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Return to root
WORKDIR /app

# Environment configuration
ENV NODE_ENV=production
ENV PORT=7860

# Expose port
EXPOSE 7860

# Force rebuild trigger
RUN echo "clean-build-v4"

# Start application
CMD ["node", "backend/server.js"]
