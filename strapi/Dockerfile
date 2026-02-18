FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build strapi
RUN npm run build

# Expose port
EXPOSE 1337

CMD ["npm", "run", "develop"]
