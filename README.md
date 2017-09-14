# dotenv-demo

Demo environment variables and the dotenv package [dotenv](https://www.npmjs.com/package/dotenv)

## Environment Variables

### Setting Environment Variables

- Single execution. The envvar exists for the life of the execution.

```shell
SECRET=abracadabra node server.js
```

- Current session.  The envvar exists for the life of the terminal session.

```shell
export SECRET=password
echo $SECRET
node server.js
```

- Add to `~/.bash_profile` or `.bashrc`

```bash
export SECRET=abracadabra
````

### The `dotenv` package

For convenience you can use the [dotenv](https://www.npmjs.com/package/dotenv) package.

The dotenv module loads the `.env` file, parses it and adds the values to `process.env` which is global
so it only needs to be required *once*, typically at the start of your app.

1. Install it as a dependency

```sh
npm install dotenv --save
```

2. Create a `.env` file and add values

Create a file named `.env`. And add the name=values.

> Note: no space surrounds the `=`

```bash
SECRET=mypassword
DATABASE=postgres://<username>:<password>@stampy.db.elephantsql.com:5432/<username>
```

3. Add an entry for `.env` to `.gitignore` file

```txt
.env

# Example of other ignored files and folders
node_modules
logs
*.log
```

4. Require and config `dotenv`

Near the top of `server.js` or `config.js`

```js
require('dotenv').config();
```

Or you can pass a path to load your file from a custom path

```js
require('dotenv').config({path: '/path/to/your/env/file'});
```

### Using Environment Varaibles on Travis

There are 2 ways to add envvars on Travis

- Define variables in the repository settings.
	- Go to: PROJECT >  Settings > Environment Variables
- Or add encrypted variables to your `travis.yml` like so:
`travis encrypt MY_SECRET_ENV=super_secret --add env.matrix`

[Defining-encrypted-variables-in-Travis.yml](https://docs.travis-ci.com/user/environment-variables/#Defining-encrypted-variables-in-.travis.yml)

### Using Environment Varaibles On Heroku

And there are 2 ways to add envvars in Heroku.

- Run `heroku config:set SECRET=password`
- Or in: YOUR-APP > Settings > "Reveal Config Vars" button

For more information check out the documentation:
[config-vars](https://devcenter.heroku.com/articles/config-vars)