set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # npm run lint
  # npm run test

  # build
  VERSION=$VERSION npm run build

  # commit
  git add -A
  git commit -m "feat(build): $VERSION"
  npm version $VERSION --message "feat: $VERSION"

  # publish
  git push origin refs/tags/v$VERSION
  git push
  npm publish
fi
