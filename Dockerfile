# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Install pnpm globally
RUN npm install -g pnpm

# Step 4: Copy the package.json and pnpm-lock.yaml files into the container
COPY package.json pnpm-lock.yaml ./

# Step 5: Install dependencies using pnpm


# Step 6: Copy the rest of the application code into the container
COPY . .

RUN pnpm install

# Step 7: Build the Next.js app
RUN pnpm build

# Step 8: Run Prisma migrations (optional, if you have Prisma setup)
RUN pnpm prisma migrate deploy

# Step 9: Expose the port that Next.js will run on
EXPOSE 3000

# Step 10: Set the environment variables for production
ENV NODE_ENV=production

# Step 11: Start the Next.js application
CMD ["pnpm", "start"]
