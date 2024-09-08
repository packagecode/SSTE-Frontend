# Use the official Node.js 18 image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your application code into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Set environment variable to run in production
ENV NODE_ENV=production

# Start the Next.js app
CMD ["npm", "start"]
