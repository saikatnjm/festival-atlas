FROM node:24-alpine AS base
WORKDIR /app
RUN chown node:node /app
USER node
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY --chown=node:node package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Local development: source is bind-mounted by docker-compose.yml
FROM deps AS dev
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production build + route smoke test against `next start`
FROM deps AS verify
COPY --chown=node:node . .
CMD ["npm", "run", "verify"]
