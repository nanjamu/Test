# AWS set-up

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html

# Version Control

Git commit message style: Capitalize first letter, make sense in the format of "This commit will [your commit message]"  <br />
Ex: If I just added a test case, my commit message might be "Add new test case"

Commands to push your code: <br />
git add . <br />
git commit -m "[Your message here]" <br />
git pull <br />
git push heroku main <br />
git push <br />

Heroku has their own repo for our app that they use to deploy our code. To push to that, use "git push heroku main". We also have our own GitHub repo (https://github.com/nanjamu/Test/tree/main), since Heroku specifies not to use their one for version control. To push to our GitHub repo, use "git push".
