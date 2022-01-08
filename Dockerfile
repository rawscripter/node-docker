FROM node:latest
WORKDIR /app
COPY package.json .
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi
COPY . ./ 
ENV PORT 8080
EXPOSE $PORT
CMD ["npm", "run", "dev"]

