# heroku_travis_dockers_template
This is a simple template to deploy and connect multiple dockers to heroku trough travis.

### Reference urls
https://medium.com/@javierfernandes/continuous-deployment-con-docker-travis-heroku-c24042fb830b
https://stackoverflow.com/questions/49147389/heroku-docker-port-environment-varibale-in-nginx

This template has 3 images
- Frontend(Nginx - React)
- Backend(Nodejs - express)
- Server(Nginx)

Nginx Server container routes request to Frontend and backend container. 

## Steps

* Create 3 applications in heroku.
* Get api key from heroku -> account settings -> Api Key
* Create following environment variables in travis  
    HEROKU_USERNAME=_       //underscore  
    HEROKU_PASSWORD=        //Api key from heroku  
    HEROKU_API_KEY=         //same api key as above  
    HEROKU_APP_BACKEND=     //heroku back end app name without ".herokuapp.com"  
    HEROKU_APP_CLIENT=      //heroku front end app name without ".herokuapp.com"  
    HEROKU_APP_NGINX=       //heroku nginx app name without ".herokuapp.com"  
    DOCKER_USERNAME=        //dockerhub username  
    DOCKER_PASSWORD=        //dockerhub password  
* Create following environment variables in nginx heroku app  
    HEROKU_APP_BACKEND_URL= //heroku back end app url example: xxxxxx.herokuapp.com  
    HEROKU_APP_CLIENT_URL=  //heroku front end app url example: xxxxxx.herokuapp.com  

## Note: 
  This is not like docker compose network, we are just injecting nginx app with HEROKU_APP_BACKEND_URL and HEROKU_APP_CLIENT_URL. Hence both backend and frontend app are accessible to outer world.
