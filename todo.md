# To-do

* Make link on project image only if a link is provided
* Make descriptions etc. of projects
* I believe a pipe is necessary to handle new lines in description (CSS won't handle content projected into component)
* Maybe make pipe that allows description to contain hyperlinks - e.g. "as seen [here](https://test.com)"
* Insert images to use in the projects
* Make everything (projects service) use a database for storage of projects instead of json file
* Redesign frontpage
* Somehow prevent false routes (why is this not even default behaviour???????)
* Make overhaul of design
* Finish everything blog-related
* Make text-limit pipe cut off before word that is overriding limit (makes for prettier text)
* Figure out why portfolio projects sometimes aren't loaded on routing to /portfolio. Seems like the service is getting the projects correctly, but the view just doesn't update.
  * Seems like routing is at fault. (ngOnInit doesn't get called when visiting non-loading page).
  * This behaviour seems to have stopped without any direct changes??? Maybe it comes back..
