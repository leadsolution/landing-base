Write-Output "Pushing..."
git push origin master

Write-Output "Pulling..."
ssh lp @"
  cd /var/www/landing_page
  git stash
  git pull origin master
  yarn install
  yarn build
  yarn export
"@

Write-Output "Here we go!"
Start-Process "http://landing_page_url"
