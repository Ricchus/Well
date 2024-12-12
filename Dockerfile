# Use the official Node.js image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /project

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to start the server
CMD ["npm", "start"]
