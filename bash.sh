#!/bin/sh
declare -i i=1
for f in _includes/svg/ankers/ankers_*.svg
do echo "Processing $f file.."
#mv "$f" "${f/ankers_/}";
done

declare -i i=1
for f in _includes/svg/ankers/*.svg
do echo "Processing $f file.."
sed -i .bak 's/ width="400" height="300"//g' $f
done

cd _includes/svg/ankers/
rm *.bak
