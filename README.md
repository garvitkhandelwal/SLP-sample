## **Installation Steps**
* Install node js and npm on your machine.
* To install, download the Windows installer from the [Node website](https://nodejs.org/en/).
* Run the installer.
* Follow the prompts in the installer.
* To see if node is installed, open you command line tool and type `node -v`. This should print a version number.
* To see if npm is installed, open you command line tool and type `npm -v`. This should print a version number of npm installed.
## **Contributing**
1. **Create** your branch `git checkout -b my-branch`.
2. **Commit** your changes `git commit -m 'Add some feature'.
3. **Push** to the branch `git push origin my-branch`.
4. Send a **Pull Request**.
5. **It's done**.
## **How to use**
#### **Front end**
* Open **index.html**. This is the main page through which user will interact. It contains 2 buttons which link to 2 other web pages. This makes the **front end**.
#### **Back end**
* Open your terminal, cd into the **js** folder and type `node server.js`.
* This will get the server up and running. It won't detect changes automatically. To make it do so, instal nodeman on your machine and instead of typing `node server.js`, type `nodeman server.js`.
* This server is connected to **mongo database**. 
* To insert a new product into the database, you can either use **postman app** or do it directly using the **mongo commands**.
* To learn mongodb commands, you can visit [this website](https://docs.mongodb.com/manual/reference/mongo-shell/).
* You can set a title and price to your product only at this time.
* Your product will be inserted into the database and will be there forever unless you remove it.
* You can view the list of products on your browser by going to `http://locahost3000/product`. 
* You can remove and update your products as well.

**Thank You!**
