#!/usr/bin/env bash

# install the plugins and build the static site
gitbook install && gitbook build

# add all files
git add .

# commit
git commit -a -m "Update docs"

# checkout to the master branch
git checkout master

# pull the latest updates
git pull origin master --rebase

# copy the static site files into the current directory.
cp -R _book/* .

# remove 'node_modules' and '_book' directory
# rm -R _book
rm -R fetch
rm -R scripts
rm -R DOC.md
rm package.json
rm package-lock.json
rm SUMMARY.md

# add all files
git add .

# commit
git commit -a -m "Update docs"

# push to the origin
git push origin master

# checkout to the master branch
git checkout source
