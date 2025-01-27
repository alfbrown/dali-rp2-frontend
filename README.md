# DALI RP2 FRONTEND

## Project setup

1. Create Virtual Environment - MAC 
python -m venv .venv

2. Activate virtual environment
source .venv/bin/activate  # For Mac/Linux
.venv/Scripts/activate # For windows

3. npm install

## Development Server
4. Run with development environment (default)
 npm run serve # for Windows
 npm run serve -- --host localhost --port 8080 # For Mac/Linux

## Production Server 
# Run with production environment
npm run serve:prod

# Build for production
npm run build

## Available Commands 

npm run serve        # Development mode
npm run serve:prod   # Production configuration
npm run build       # Production build
npm run build:dev   # Development build
npm run lint        # Lint files and fixes files 


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Troubleshooting 
# Check if port is in use
lsof -i :8080

# Kill process using port
kill -9 <PID>

# Environment issues 

# Verify environment
echo $NODE_ENV

# Check current environment file
cat .env.development  # or .env.production