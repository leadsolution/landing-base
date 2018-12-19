ssh lp @"
  cd /var/www/landing_page
  git stash
  git pull origin master
  yarn install
  yarn build
  yarn export
"@
start "http://landing_page_url"