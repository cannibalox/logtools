# logtools
tools and plugins for logseq 0.6.x

## logtools-css-productivitypack
my css mods for Kanban/columns view (#.v-kanban), Eisenhower Matrix (#.v-eisenhower) and numeric list (#.v-numlist) packaged as an all-in-one plugin
- Kanban : tag a block with `#.v-kanban` or `#.v-kanban-wide` (more samples here https://discuss.logseq.com/t/css-trigger-columns-kanban-view-with-tags/390)
- Eisenhower Matrix : tag a block with `#.v-eisenhower` (https://discuss.logseq.com/t/css-template-eisenhower-matrix/526)
- numeric lists : tag a block with `#.v-numlist` (https://discuss.logseq.com/t/css-numbered-lists/387/5)
- border : tag a block with `#.v-self-border`; `#.v-border-child` or `#.v-self-border-child` to add a frame/border
- Gallery : tag a parent block with `#.v-gallery` and put links to images in separate children blocks (optionally add `-w100`, `-w200`, `-w300`,`-w400`, `-fit` to change the width, or add `-h300` or `-h400` to change the height, eg: `#.v-gallery-fit-h400`. by default the images are 200x200px)

Kanban : `#.v-kanban`<br>
<img src="https://user-images.githubusercontent.com/4605693/156956422-9eab8cee-7fbb-4e65-81de-5097c1b96f89.png" width="600px">

Gallery : `#.v-gallery-fit`<br>
<img src="https://user-images.githubusercontent.com/4605693/156956622-fc96e39a-4240-4c22-a4e2-a37cd7b75126.png" width="600px">

Priority Matrix  `#.v-eisenhower-matrix`<br>
<img src="https://user-images.githubusercontent.com/4605693/156956223-a9cf13d8-4aa5-4f17-9726-9f5c5a49a3f7.png" width="600px">

Border `#.v-border-children`<br>
<img src="https://user-images.githubusercontent.com/4605693/156955395-0004e961-4d18-4dc8-9621-8b4168c91b05.png" width="600px">


# INSTALL

* download the zip and unpack it in a folder of your choice.
* in logseq, go to the main `menu > plugins`, then click on `Load unpacked plugin` and point it to the folder `logtools-css-productivitypack` (not the parent folder)

# TEMPLATES

use these starter templates to easily invoke the tools and tags. I usually save all my templates in a dedicated page called `ls-templates.md`
### priority matrix : invoke with `/eisen`
```
- #.v-eisenhower-matrix
  template:: eisenhower-matrix
	- [[TODO]]
		-
		-
		-
	- [[DECIDE]]
		-
		-
		-
	- [[DELEGATE]]
		-
		-
		-
	- [[ELIMINATE]]
		-
		-
		-
```
### kanbans, replace titles and catagories to your liking, invoke with `/kanban`
```
- a Kanban #.v-kanban
  template:: kanban
	- `TO DO`
		- 1
		- 2
	- `IN PROGRESS`
		- 1
		- 2
	- `DONE`
		- 1
		- 2
- Wide Kanban #.v-kanban-wide
  template:: kanban-wide
	- `UNDER REVIEW`
		- 1
		- 2
	- `RETAKE`
		- 1
		- 2
	- `APPROVED`
		- 1
		- 2
	- `ARCHIVED`
		- 1
		- 2
	- `DROPPED`
		- 1
		- 2
```
### pros and cons / likes and dislike (used for reviews or comparisons, works well in conjunction with the #.v-kanban tags)
```
- procons #.v-kanban
  template:: procons
	- #like
		-
	- #dislike
		-
```
