ARG NODE_VERSION=21.6.2

FROM node:${NODE_VERSION}-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

# Run the application as a non-root user.
USER root

RUN chown -R app:app .

USER app

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD npm start
