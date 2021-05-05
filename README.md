# API
![NodeJS](https://img.shields.io/badge/NodeJS-6.0.0-green.svg)
![Yarn](https://img.shields.io/badge/yarn-1.21.1-blue.svg)


Back-End service for the critical error main site, doesn't include tabletop service.

## Installation Instructions

### Firsts steps

1. Clone the project

        git clone https://github.com/rpg-critical-error/api-user.git
        
2. Install dependencies

        yarn install
        
3. Change your readme file

    Clone .env.example to .env and change values inner file
    
4. Run database commands

    **Migrations**
    
        ./node_modules/.bin/sequelize db:migrate
        
    **Seeders**
    
        ./node_modules/.bin/sequelize db:seed:all
    
### Running application

* Run command to work or build

    **Server as developer**
    
        yarn dev
        
    **Run tests**
    
        yarn test
        
    **Run build compilation**
    
        yarn build

* Run with docker-compose

    **Run with docker-compose**

        sudo docker-compose up
