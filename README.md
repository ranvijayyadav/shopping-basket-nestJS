Steps to run/test

- Clone repository 

    ```cd shopping-basket-nestJS```

-  Install dependencies 
 
    ```npm install```

- Start app 

    ``` npm run start```


- Call calculate end point using post method
  on following url:

  -  ``` localhost:3000/shopping/calculate```
  - request body 
     ~~~ 
     {
          "items": ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"]
      }
      ~~~
  - Header
  
    ``Content-Type: application/json ``



