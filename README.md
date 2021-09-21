# pitchground-team-balance
Chrome extension to show your team balance on pitchground vendor dashboard
![image](https://user-images.githubusercontent.com/37305243/134150036-bad11011-be1f-448b-a8bd-22a6a03dd65d.png)

Pitchground offers a dashboard for whoever offers a product deal on their platform.\
Usually you have a contract in which is defined that you share the balance with them (60% to pitchground, 40% to your team).\
The thing is that in the vendor's dashboard is only shown the total balance.\
This simple chrome extension adds your team balance next to the total.

# Chrome Installation
go to 'manage extensions', activate developer mode toggle and click on 'load unpacked extension' then choose the repo folder

# Firefox Installation
write in your address bar `about:debugging` and go to 'this firefox' section, then click on 'Load Temporary Add-on...' so you can select your zip file

# Crate a zip file in Linux
run this command in the repo folder:\
`zip -r -FS ./pitchground-team-balance.zip * --exclude '*.git*' --exclude 'README.md'`
