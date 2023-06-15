<h1 align="center">
    SoapHealth
</h1>

<h4 align="center"> 
	Test 🗡️ Done!
</h4>
<p align="center">	
	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/RonaldoMoraes/soaphealth-test">
    
  
  <a href="https://github.com/RonaldoMoraes/soaphealth-test/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RonaldoMoraes/soaphealth-test">
  </a>

  <a>

</p>

## 💻 Applications

Requirements for Backend: 
- [x] Backend API CRUD
- [x] Node.js + Typescript
- [x] PrismaORM with SQLite

Bonus (that's on me bro): 
- [x] Integration Tests
- [x] Service Layer
- [x] Repository Pattern
- [x] Request Validation
- [x] Global Error Handler

Requirements for Frontend: 
- [x] Consuming API
- [x] React + Typescript
- [x] Form and basic operations
- [ ] Didn't use Vite/Vitest
- [ ] Not that beautiful


## :rocket: Tech stack

This test was develop using the following stack:

- NodeJS 19.8.1
- NPM 9.5.1
- Docker 23.0.5
- Docker Compose v2.17.3

## :hugs: Enjoy!

### Using with docker e docker-compose

```bash
# Clone this repository
$ git clone https://github.com/RonaldoMoraes/soaphealth-test

# Enter in the project folder
$ cd soaphealth-test

# Run docker-compose
$ docker-compose up --build

# Running apps ❤️
```

### As an alternative way, you can still run the applications locally using your machine Node.js

```bash
# Clone this repository
$ git clone https://github.com/RonaldoMoraes/soaphealth-test

# Enter in the backend project folder
$ cd soaphealth-test/backend

# Install dependencies and configure prisma
$ npm install
$ npx prisma generate

# Run with npm
$ npm run dev

# Running the API ❤️
```
&
```bash
# In other Terminal window, enter in the frontend project folder
$ cd soaphealth-test/phonebook-app

# Install dependencies
$ npm install

# Run docker-composewith npm
$ npm run start

# Running the web app ❤️
```

### Conclusion

There are some things that could be improved, like:
- More tests to reach at least 80% coverage in both apps
- Unit tests in backend
- Make a better frontend design
- Tests on frontend!

Hope you've enjoyed and we can talk about the project! Any doubts, just let me know!