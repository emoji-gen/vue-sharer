set('-ev')
cd(__dirname)

pushd('./vue1')
exec('npm install')
exec('npm run build')
popd()

pushd('./vue2')
exec('npm install')
exec('npm run build')
popd()
